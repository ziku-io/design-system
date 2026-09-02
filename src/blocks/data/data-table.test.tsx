import { afterEach, describe, expect, it, vi } from "vitest"
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react"

import { DataTable } from "./data-table"
import { Kanban } from "./kanban"
import { chipLabel, isBlankFilter, rank, type DataTableColumn, type DataTableQuery } from "./types"

afterEach(cleanup)

interface Deal {
  id: number
  name: string
  stage: string
}
const deals: Deal[] = [
  { id: 1, name: "Alpha", stage: "Lead" },
  { id: 2, name: "Beta", stage: "Won" },
  { id: 3, name: "Gamma", stage: "Won" },
]
const columns: DataTableColumn<Deal>[] = [
  { key: "name", header: "Deal" },
  { key: "stage", header: "Stage", facet: true, order: ["Lead", "Won"] },
]

describe("helpers", () => {
  it("ranks by the column's fixed order, not alphabetically", () => {
    const col: DataTableColumn<Deal> = {
      key: "stage",
      header: "Stage",
      order: ["Lead", "Won"],
    }
    expect(["Won", "Lead"].sort(rank(col))).toEqual(["Lead", "Won"])
    // unknown labels sort after the known ones
    expect(["Zzz", "Won", "Lead"].sort(rank(col))).toEqual(["Lead", "Won", "Zzz"])
  })

  it("falls back to alphabetical without an order", () => {
    const col: DataTableColumn<Deal> = { key: "stage", header: "Stage" }
    expect(["b", "a"].sort(rank(col))).toEqual(["a", "b"])
  })

  it("treats empty values, empty strings and empty arrays as blank", () => {
    expect(isBlankFilter([])).toBe(true)
    expect(isBlankFilter("")).toBe(true)
    expect(isBlankFilter(null)).toBe(true)
    expect(isBlankFilter(["Won"])).toBe(false)
  })

  it("summarises a chip, collapsing past two values", () => {
    const col: DataTableColumn<Deal> = { key: "stage", header: "Stage" }
    expect(chipLabel(col, [])).toBe("Stage")
    expect(chipLabel(col, ["Won"])).toBe("Stage: Won")
    expect(chipLabel(col, ["Won", "Lead", "Lost", "X"])).toBe("Stage: Won, Lead +2")
  })
})

describe("DataTable", () => {
  it("shows every row when no page size is set", () => {
    render(<DataTable columns={columns} data={deals} />)
    for (const d of deals) expect(screen.getByText(d.name)).toBeTruthy()
  })

  it("narrows the rows to a starting filter", () => {
    render(
      <DataTable
        columns={columns}
        data={deals}
        defaultFilters={[{ id: "stage", value: ["Won"] }]}
      />,
    )
    expect(screen.queryByText("Alpha")).toBeNull()
    expect(screen.getByText("Beta")).toBeTruthy()
    expect(screen.getByText("Gamma")).toBeTruthy()
  })

  it("puts a chip on the bar for that filter", () => {
    render(
      <DataTable
        columns={columns}
        data={deals}
        defaultFilters={[{ id: "stage", value: ["Won"] }]}
      />,
    )
    expect(screen.getByText("Stage: Won")).toBeTruthy()
  })

  it("groups rows under their group label", () => {
    render(<DataTable columns={columns} data={deals} defaultGroup="stage" />)
    // one group header per distinct stage, each with its row count
    expect(screen.getByText("Lead")).toBeTruthy()
    expect(screen.getByText("Won")).toBeTruthy()
  })

  it("renders the empty message when nothing matches", () => {
    render(<DataTable columns={columns} data={[]} empty="Nothing here." />)
    expect(screen.getByText("Nothing here.")).toBeTruthy()
  })
})

/** jsdom has no DataTransfer, and drag handlers read from the event's own. */
function dataTransfer() {
  const store = new Map<string, string>()
  return {
    setData: (k: string, v: string) => store.set(k, v),
    getData: (k: string) => store.get(k) ?? "",
    setDragImage: () => {},
    effectAllowed: "",
    dropEffect: "",
  }
}

describe("Kanban", () => {
  const columnsOf = (items: Deal[]) => [
    {
      key: "Lead",
      title: "Lead",
      items: items.filter((d) => d.stage === "Lead"),
    },
    { key: "Won", title: "Won", items: items.filter((d) => d.stage === "Won") },
  ]

  it("hands the dropped item and the target column to onDrop", () => {
    const onDrop = vi.fn()
    render(
      <Kanban
        columns={columnsOf(deals)}
        itemKey={(d) => String(d.id)}
        renderCard={(d) => <span>{d.name}</span>}
        onDrop={onDrop}
      />,
    )
    const dt = dataTransfer()
    // "Alpha" sits in the Lead column; drop it on the Won one.
    fireEvent.dragStart(screen.getByText("Alpha").parentElement!, {
      dataTransfer: dt,
    })
    const wonColumn = screen.getByText("Won").closest("div[class*='shrink-0']")!
    fireEvent.drop(wonColumn, { dataTransfer: dt })

    expect(onDrop).toHaveBeenCalledTimes(1)
    expect(onDrop.mock.calls[0][0]).toEqual(deals[0]) // the card that was dragged
    expect(onDrop.mock.calls[0][1]).toBe("Won") // the column it landed on
  })

  it("does not make cards draggable without an onDrop", () => {
    const { container } = render(
      <Kanban
        columns={columnsOf(deals)}
        itemKey={(d) => String(d.id)}
        renderCard={(d) => <span>{d.name}</span>}
      />,
    )
    expect(container.querySelectorAll('[draggable="true"]').length).toBe(0)
  })

  // #92: HTML5 drag and drop never fires on touch, so the menu is the only way
  // a card moves on a phone. These are the assertions that a board on a tablet
  // is not a read-only picture.
  it("moves a card through the menu, with no drag at all", async () => {
    const onDrop = vi.fn()
    render(
      <Kanban
        columns={columnsOf(deals)}
        itemKey={(d) => String(d.id)}
        renderCard={(d) => <span>{d.name}</span>}
        onDrop={onDrop}
      />,
    )
    // Alpha is in Lead. Open its menu from the keyboard, which is the same path
    // a tap takes and the one jsdom can drive.
    const card = screen.getByText("Alpha").parentElement!
    fireEvent.keyDown(within(card).getByLabelText("Move to"), { key: "Enter" })
    fireEvent.click(await screen.findByRole("menuitem", { name: "Won" }))

    expect(onDrop).toHaveBeenCalledTimes(1)
    expect(onDrop.mock.calls[0][0]).toEqual(deals[0])
    expect(onDrop.mock.calls[0][1]).toBe("Won")
  })

  it("does not offer the column the card is already in", async () => {
    render(
      <Kanban
        columns={columnsOf(deals)}
        itemKey={(d) => String(d.id)}
        renderCard={(d) => <span>{d.name}</span>}
        onDrop={() => {}}
      />,
    )
    const card = screen.getByText("Alpha").parentElement!
    fireEvent.keyDown(within(card).getByLabelText("Move to"), { key: "Enter" })
    const items = await screen.findAllByRole("menuitem")
    expect(items.map((i) => i.textContent)).toEqual(["Won"])
  })

  it("gives no move menu to a card that cannot be dragged", () => {
    render(
      <Kanban
        columns={columnsOf(deals)}
        itemKey={(d) => String(d.id)}
        renderCard={(d) => <span>{d.name}</span>}
        onDrop={() => {}}
        canDrag={(d) => d.stage === "Won"}
      />,
    )
    // Same rule as the drag: no permission to move it, no control that moves it.
    expect(within(screen.getByText("Alpha").parentElement!).queryByLabelText("Move to")).toBeNull()
    expect(screen.getAllByLabelText("Move to").length).toBe(2)
  })

  it("respects canDrag", () => {
    const { container } = render(
      <Kanban
        columns={columnsOf(deals)}
        itemKey={(d) => String(d.id)}
        renderCard={(d) => <span>{d.name}</span>}
        onDrop={() => {}}
        canDrag={(d) => d.stage === "Won"}
      />,
    )
    const draggable = [...container.querySelectorAll('[draggable="true"]')]
    expect(draggable.length).toBe(2)
    for (const el of draggable) {
      expect(within(el as HTMLElement).queryByText("Alpha")).toBeNull()
    }
  })
})

// ── Server-driven lists ───────────────────────────────────────────────
interface Task {
  id: number
  title: string
  status: "todo" | "done"
}
const tasks: Task[] = [
  { id: 1, title: "Write", status: "todo" },
  { id: 2, title: "Ship", status: "done" },
  { id: 3, title: "Rest", status: "done" },
]
const LABELS: Record<string, string> = { todo: "To do", done: "Done" }
const keyed: DataTableColumn<Task>[] = [
  { key: "title", header: "Task", sortKey: "title" },
  {
    key: "status",
    header: "Status",
    facet: true,
    order: ["todo", "done"],
    sortKey: "status",
    filterKey: "status",
    facetKey: (r) => r.status,
    facetLabel: (key) => LABELS[key] ?? key,
  },
]

/** A `paged` prop whose calls the test can read. */
function pagedProp(over: { hasMore?: boolean; loadingMore?: boolean } = {}) {
  return {
    hasMore: false,
    loadingMore: false,
    ...over,
    more: vi.fn(),
    setQuery: vi.fn(),
  }
}
const lastQuery = (paged: ReturnType<typeof pagedProp>): DataTableQuery =>
  paged.setQuery.mock.calls.at(-1)?.[0]

describe("facetKey and facetLabel", () => {
  it("shows the label on the chip and never the key", () => {
    render(
      <DataTable
        columns={keyed}
        data={tasks}
        defaultFilters={[{ id: "status", value: ["done"] }]}
      />,
    )
    expect(screen.getByText("Status: Done")).toBeTruthy()
    expect(screen.queryByText("Status: done")).toBeNull()
  })

  it("heads a group with the label, and filters on the key", () => {
    render(
      <DataTable
        columns={keyed}
        data={tasks}
        defaultGroup="status"
        defaultFilters={[{ id: "status", value: ["done"] }]}
      />,
    )
    // The stored key filtered the rows, the word is what is on screen.
    expect(screen.getByText("Ship")).toBeTruthy()
    expect(screen.queryByText("Write")).toBeNull()
    expect(screen.getAllByText("Done").length).toBeGreaterThan(0)
    expect(screen.queryByText("done")).toBeNull()
  })

  it("sends the key to the API, not the word", () => {
    const paged = pagedProp()
    render(
      <DataTable
        columns={keyed}
        data={tasks}
        paged={paged}
        defaultFilters={[{ id: "status", value: ["done"] }]}
      />,
    )
    expect(lastQuery(paged)).toEqual({ q: "", sort: undefined, filters: { status: ["done"] } })
  })

  it("hands the board the key it stores and the word it renders", () => {
    const onSet = vi.fn()
    const columnsWithSet = keyed.map((c) => (c.key === "status" ? { ...c, onSet } : c))
    render(
      <DataTable
        columns={columnsWithSet}
        data={tasks}
        rowId={(r) => String(r.id)}
        defaultMode="board"
        defaultGroup="status"
        renderCard={(r) => <span>{r.title}</span>}
      />,
    )
    // Column headings read as words…
    expect(screen.getByText("To do")).toBeTruthy()
    const card = screen.getByText("Write").parentElement!
    fireEvent.keyDown(within(card).getByLabelText("Move to"), { key: "Enter" })
    fireEvent.click(screen.getByRole("menuitem", { name: "Done" }))
    // …and what comes back is the key the API stores.
    expect(onSet.mock.calls[0][1]).toBe("done")
  })

  it("leaves a column with neither exactly as it was", () => {
    render(<DataTable columns={columns} data={deals} defaultGroup="stage" />)
    expect(screen.getAllByText("Won").length).toBeGreaterThan(0)
    expect(screen.getByText("Alpha")).toBeTruthy()
  })
})

describe("paged", () => {
  it("does not sort by a column the API cannot sort by", () => {
    const noSortKey: DataTableColumn<Task>[] = [
      { key: "title", header: "Task" },
      { key: "status", header: "Status", sortKey: "status" },
    ]
    const paged = pagedProp()
    render(<DataTable columns={noSortKey} data={tasks} paged={paged} />)

    fireEvent.click(screen.getByText("Task"))
    expect(lastQuery(paged).sort).toBeUndefined()
    // The rows are still in the order the API sent them.
    const before = screen.getAllByRole("cell").map((c) => c.textContent)
    fireEvent.click(screen.getByText("Status"))
    expect(lastQuery(paged).sort).toEqual({ key: "status", dir: "asc" })
    // Sorting is the API's job: the loaded page is not reordered here.
    expect(screen.getAllByRole("cell").map((c) => c.textContent)).toEqual(before)
  })

  it("sorts locally, as ever, without paged", () => {
    render(<DataTable columns={keyed} data={tasks} />)
    fireEvent.click(screen.getByText("Task"))
    const titles = screen
      .getAllByRole("row")
      .slice(1)
      .map((r) => r.firstElementChild?.textContent)
    expect(titles).toEqual(["Rest", "Ship", "Write"])
  })

  it("keeps a chip without a filterKey in the browser, and takes every page", () => {
    const local: DataTableColumn<Task>[] = [
      { key: "title", header: "Task", sortKey: "title" },
      { key: "status", header: "Status", facet: true, sortKey: "status" },
    ]
    const paged = pagedProp({ hasMore: true })
    render(
      <DataTable
        columns={local}
        data={tasks}
        paged={paged}
        defaultFilters={[{ id: "status", value: ["done"] }]}
      />,
    )
    // Nothing the API can apply…
    expect(lastQuery(paged).filters).toEqual({})
    // …so the rows are narrowed here, over a list it now has to load in full.
    expect(screen.queryByText("Write")).toBeNull()
    expect(screen.getByText("Ship")).toBeTruthy()
    expect(paged.more).toHaveBeenCalled()
  })

  it("takes every page to group", () => {
    const paged = pagedProp({ hasMore: true })
    render(<DataTable columns={keyed} data={tasks} paged={paged} defaultGroup="status" />)
    expect(paged.more).toHaveBeenCalled()
  })

  it("asks for nothing more when it can answer from the API", () => {
    const paged = pagedProp({ hasMore: true })
    render(
      <DataTable
        columns={keyed}
        data={tasks}
        paged={paged}
        defaultFilters={[{ id: "status", value: ["done"] }]}
      />,
    )
    expect(paged.more).not.toHaveBeenCalled()
  })
})

describe("the search box", () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  function typeSearch(text: string) {
    fireEvent.click(screen.getByLabelText("Search"))
    fireEvent.change(screen.getByPlaceholderText("Search…"), { target: { value: text } })
  }

  it("waits before it becomes a request", () => {
    const paged = pagedProp()
    render(<DataTable columns={keyed} data={tasks} paged={paged} />)
    expect(paged.setQuery).toHaveBeenCalledTimes(1) // the empty query, on mount

    // The panel is opened before the clock is faked: Radix schedules its own
    // work on mount, and none of it is what this test is measuring.
    fireEvent.click(screen.getByLabelText("Search"))
    const input = screen.getByPlaceholderText("Search…")
    vi.useFakeTimers()

    act(() => {
      fireEvent.change(input, { target: { value: "s" } })
    })
    act(() => {
      fireEvent.change(input, { target: { value: "sh" } })
    })
    act(() => {
      vi.advanceTimersByTime(299)
    })
    // Two keystrokes, no request yet.
    expect(paged.setQuery).toHaveBeenCalledTimes(1)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(paged.setQuery).toHaveBeenCalledTimes(2)
    expect(lastQuery(paged)).toEqual({ q: "sh", sort: undefined, filters: {} })
  })

  it("still narrows the rows itself when the list is not paged", () => {
    render(<DataTable columns={keyed} data={tasks} />)
    typeSearch("ship")
    expect(screen.getByText("Ship")).toBeTruthy()
    expect(screen.queryByText("Write")).toBeNull()
  })
})

// ── Keyboard and semantics ────────────────────────────────────────────
describe("a11y", () => {
  it("sorts from a button in the header, and says which way", () => {
    render(<DataTable columns={columns} data={deals} />)
    const header = screen.getByRole("button", { name: "Deal" })
    expect(header.tagName).toBe("BUTTON")
    expect(header.closest("th")?.getAttribute("aria-sort")).toBe("none")

    fireEvent.click(header)
    expect(header.closest("th")?.getAttribute("aria-sort")).toBe("ascending")
    fireEvent.click(header)
    expect(header.closest("th")?.getAttribute("aria-sort")).toBe("descending")
  })

  it("leaves aria-sort off a column that cannot be sorted", () => {
    const fixed: DataTableColumn<Deal>[] = [{ key: "name", header: "Deal", sortable: false }]
    render(<DataTable columns={fixed} data={deals} />)
    expect(screen.getByText("Deal").closest("th")?.hasAttribute("aria-sort")).toBe(false)
  })

  it("collapses a group from its own button", () => {
    render(<DataTable columns={columns} data={deals} defaultGroup="stage" />)
    const toggle = screen.getByRole("button", { name: /Won/ })
    expect(toggle.getAttribute("aria-expanded")).toBe("true")

    fireEvent.click(toggle)
    expect(screen.getByRole("button", { name: /Won/ }).getAttribute("aria-expanded")).toBe("false")
    // The rows under it are gone; the heading stays.
    expect(screen.queryByText("Beta")).toBeNull()
  })

  it("opens a row from the keyboard", () => {
    const onRowClick = vi.fn()
    render(<DataTable columns={columns} data={deals} onRowClick={onRowClick} />)
    const row = screen.getByText("Alpha").closest("tr")!
    expect(row.getAttribute("tabindex")).toBe("0")
    expect(row.getAttribute("role")).toBe("button")

    fireEvent.keyDown(row, { key: "Enter" })
    fireEvent.keyDown(row, { key: " " })
    expect(onRowClick).toHaveBeenCalledTimes(2)
    expect(onRowClick.mock.calls[0][0]).toEqual(deals[0])
  })

  it("leaves a row alone when there is nothing to open", () => {
    render(<DataTable columns={columns} data={deals} />)
    const row = screen.getByText("Alpha").closest("tr")!
    expect(row.hasAttribute("tabindex")).toBe(false)
    expect(row.hasAttribute("role")).toBe(false)
  })

  it("offers a way out when the search, not the data, emptied the table", () => {
    render(<DataTable columns={columns} data={deals} empty="Nothing here." />)
    fireEvent.click(screen.getByLabelText("Search"))
    fireEvent.change(screen.getByPlaceholderText("Search…"), { target: { value: "zzz" } })

    // The page's own empty copy is for an empty list, not for this.
    expect(screen.queryByText("Nothing here.")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }))
    expect(screen.getByText("Alpha")).toBeTruthy()
  })

  it("skeletons the columns that are coming, not five bars", () => {
    render(<DataTable columns={columns} data={[]} loading />)
    // The header is already there, so the real table lands without moving.
    expect(screen.getByText("Deal")).toBeTruthy()
    expect(screen.getByText("Stage")).toBeTruthy()
  })

  it("keeps the view form open, and says why, when the name is blank", () => {
    render(<DataTable columns={columns} data={deals} />)
    fireEvent.click(screen.getByTitle("Save the current filters as a new view"))

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "   " } })
    fireEvent.click(screen.getByRole("button", { name: "Create" }))

    expect(screen.getByRole("alert").textContent).toBe("Give the view a name.")
    // Still open, and still holding what was typed.
    expect(screen.getByRole("textbox")).toBeTruthy()
  })
})

describe("DataTable windowing", () => {
  const many = Array.from({ length: 10_000 }, (_, i) => ({
    id: i,
    name: `Deal ${i}`,
    stage: i % 2 ? "Won" : "Lead",
  }))

  it("mounts a window, not ten thousand rows", () => {
    render(<DataTable columns={columns} data={many} />)
    const table = screen.getByRole("table")
    const rows = table.querySelectorAll("tbody tr")
    // jsdom reports a zero-height scrollport, so the window here is the
    // overscan. The assertion that matters is the order of magnitude.
    expect(rows.length).toBeLessThan(200)
    expect(rows.length).toBeGreaterThan(0)
  })

  it("tells a screen reader the full total, not the window", () => {
    render(<DataTable columns={columns} data={many} />)
    // The header is row 1, so 10,000 rows is a count of 10,001.
    expect(screen.getByRole("table").getAttribute("aria-rowcount")).toBe("10001")
  })

  it("leaves a short list alone: every row, no height cap", () => {
    const { container } = render(<DataTable columns={columns} data={deals} />)
    expect(screen.getByRole("table").querySelectorAll("tbody tr")).toHaveLength(deals.length)
    expect(container.querySelector('[data-slot="table-container"]')?.className).not.toContain(
      "max-h-",
    )
  })
})

describe("DataTable windowing and paging together", () => {
  // The page after this one still arrives through the sentinel row, which sits
  // below the bottom spacer: an IntersectionObserver against the viewport
  // accounts for the clipping scroll box, so it fires when the list really has
  // been scrolled to its end. jsdom has no layout, so that path is exercised by
  // the `PagedLarge` story rather than here.
  const many = Array.from({ length: 400 }, (_, i) => ({
    id: i,
    name: `Deal ${i}`,
    stage: i % 2 ? "Won" : "Lead",
  }))

  it("does not ask for the next page while the window is nowhere near the end", () => {
    const more = vi.fn()
    render(
      <DataTable
        columns={columns}
        data={many}
        paged={{ hasMore: true, loadingMore: false, more, setQuery: () => {} }}
      />,
    )
    // The end-of-window trigger must not read as "the list is exhausted" on
    // mount, or a windowed table pulls every page the moment it renders.
    expect(more).not.toHaveBeenCalled()
  })
})
