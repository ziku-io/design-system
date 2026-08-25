import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react"

import { DataTable } from "./data-table"
import { Kanban } from "./kanban"
import { chipLabel, isBlankFilter, rank, type DataTableColumn } from "./types"

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
