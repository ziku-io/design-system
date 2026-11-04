import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import { StatTile } from "./stat-tile"
import { ActivityList, DashboardPanel } from "@/blocks/dashboard/dashboard"
import { Kanban } from "@/blocks/data/kanban"
import { DataTable } from "@/blocks/data/data-table"
import { Combobox } from "@/blocks/search/combobox"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

const t = defaultStrings.common

describe("loading, error and content share one precedence", () => {
  it("shows loading over an error, because a retry in flight is loading", () => {
    render(
      <DashboardPanel title="Panel" loading error onRetry={() => {}}>
        content
      </DashboardPanel>,
    )
    expect(screen.getByRole("status", { name: t.loading })).toBeTruthy()
    expect(screen.queryByText(t.loadFailed)).toBeNull()
    expect(screen.queryByText("content")).toBeNull()
  })

  it("shows the error over content and wires the retry", () => {
    const onRetry = vi.fn()
    render(
      <DashboardPanel title="Panel" error onRetry={onRetry}>
        content
      </DashboardPanel>,
    )
    expect(screen.queryByText("content")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t.retry }))
    expect(onRetry).toHaveBeenCalledOnce()
  })

  it("says the caller's sentence when error is a string", () => {
    render(<ActivityList items={undefined} error="The audit log is down." />)
    expect(screen.getByText("The audit log is down.")).toBeTruthy()
  })
})

describe("StatTile", () => {
  it("keeps the label and drops the value while loading", () => {
    render(<StatTile label="Clients" value="86" loading />)
    expect(screen.getByText("Clients")).toBeTruthy()
    expect(screen.queryByText("86")).toBeNull()
  })

  it("says the dictionary's sentence when error is true", () => {
    render(<StatTile label="Clients" value={undefined} error />)
    expect(screen.getByText(t.loadFailed)).toBeTruthy()
  })
})

describe("ActivityList", () => {
  it("throws on undefined items that are neither loading nor failed", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<ActivityList items={undefined} />)).toThrow()
  })
})

describe("Kanban", () => {
  const columns = [{ key: "a", title: "Column A", items: [] as string[] }]

  it("keeps its columns while the cards load", () => {
    render(<Kanban columns={columns} renderCard={(s) => s} itemKey={(s) => s} loading />)
    expect(screen.getByText("Column A")).toBeTruthy()
    expect(screen.getByRole("status", { name: t.loading })).toBeTruthy()
  })

  it("replaces the board with the error band", () => {
    render(
      <Kanban
        columns={columns}
        renderCard={(s) => s}
        itemKey={(s) => s}
        error
        onRetry={() => {}}
      />,
    )
    expect(screen.queryByText("Column A")).toBeNull()
    expect(screen.getByRole("button", { name: t.retry })).toBeTruthy()
  })
})

describe("DataTable", () => {
  it("shows the error band instead of the empty state", () => {
    render(
      <DataTable
        columns={[{ key: "name", header: "Name" }]}
        data={undefined}
        error
        onRetry={() => {}}
      />,
    )
    expect(screen.getByText(t.loadFailed)).toBeTruthy()
  })
})

describe("DataTable board", () => {
  it("keeps declared columns while loading, and loading still beats an error", () => {
    render(
      <DataTable
        columns={[{ key: "stage", header: "Stage", facet: true, order: ["Lead", "Won"] }]}
        data={[]}
        rowId={(r: { stage: string }) => r.stage}
        renderCard={(r) => r.stage}
        defaultMode="board"
        defaultGroup="stage"
        loading
        error
      />,
    )
    expect(screen.getByText("Lead")).toBeTruthy()
    expect(screen.queryByText(t.loadFailed)).toBeNull()
  })
})

describe("Combobox", () => {
  it("says it is loading instead of drawing an empty list", () => {
    render(
      <Combobox
        label="People"
        items={[]}
        query="an"
        onQueryChange={() => {}}
        onSelect={() => {}}
        loading
      />,
    )
    fireEvent.focus(screen.getByRole("combobox"))
    expect(screen.getByText(t.loading)).toBeTruthy()
    expect(screen.queryByText(t.noResults)).toBeNull()
  })
})
