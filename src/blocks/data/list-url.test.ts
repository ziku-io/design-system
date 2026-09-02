import { describe, expect, it } from "vitest"

import {
  listUrlOf,
  listUrlProps,
  parseListUrl,
  sameListUrl,
  toListUrl,
  type ListUrlState,
} from "./list-url"
import type { DataTableState } from "./types"

const round = (state: ListUrlState) => parseListUrl(toListUrl(state).toString())

const base: DataTableState = {
  sorting: [],
  columnFilters: [],
  globalFilter: "",
  columnVisibility: {},
  grouping: [],
  mode: "table",
}

describe("the codec", () => {
  it("writes the link a colleague is sent, and reads it back", () => {
    const list: ListUrlState = {
      q: "",
      sort: { key: "value", dir: "desc" },
      filters: { status: ["active"], city: ["lisboa"] },
    }
    expect(toListUrl(list).toString()).toBe("sort=-value&filter=city%3Alisboa%3Bstatus%3Aactive")
    expect(round(list)).toEqual(list)
  })

  it("leaves a plain list a plain path", () => {
    expect(toListUrl({ q: "", filters: {} }).toString()).toBe("")
    // A chip with nothing picked filters nothing and must not look like it does.
    expect(toListUrl({ q: "", filters: { status: [] } }).toString()).toBe("")
    // "default" is the built-in All view: writing it would put a parameter in
    // every URL to say the table is where it always opens.
    expect(toListUrl({ q: "", filters: {}, view: "default" }).toString()).toBe("")
  })

  it("does not depend on the order the chips were picked in", () => {
    const one = toListUrl({ q: "", filters: { b: ["2"], a: ["1"] } }).toString()
    const other = toListUrl({ q: "", filters: { a: ["1"], b: ["2"] } }).toString()
    expect(one).toBe(other)
    expect(sameListUrl({ q: "", filters: { b: ["2"] } }, { q: "", filters: { b: ["2"] } })).toBe(
      true,
    )
    expect(sameListUrl({ q: "x", filters: {} }, { q: "", filters: {} })).toBe(false)
  })

  it("leaves everything that is not the toolbar's alone", () => {
    const kept = toListUrl({ q: "silva", filters: {} }, "tab=kyc&q=old&filter=status%3Adone")
    expect(kept.get("tab")).toBe("kyc")
    expect(kept.get("q")).toBe("silva")
    expect(kept.get("filter")).toBeNull()
  })

  it("answers a malformed URL with a list rather than an error", () => {
    // These arrive from old bookmarks and from people editing links by hand.
    expect(parseListUrl("sort=-")).toEqual({ q: "", filters: {} })
    expect(parseListUrl("filter=status")).toEqual({ q: "", filters: {} })
    expect(parseListUrl("filter=:done")).toEqual({ q: "", filters: {} })
    expect(parseListUrl("filter=status:;a:1")).toEqual({ q: "", filters: { a: ["1"] } })
    expect(parseListUrl("")).toEqual({ q: "", filters: {} })
  })

  it("carries the board and the grouping", () => {
    expect(toListUrl({ q: "", filters: {}, mode: "board", group: "status" }).toString()).toBe(
      "group=status&mode=board",
    )
    expect(parseListUrl("group=status&mode=board")).toEqual({
      q: "",
      filters: {},
      group: "status",
      mode: "board",
    })
    expect(toListUrl({ q: "", filters: {}, mode: "table" }).toString()).toBe("")
  })
})

describe("the two adapters", () => {
  it("turns what onStateChange reports into a URL, and the URL back into props", () => {
    const state: DataTableState = {
      ...base,
      globalFilter: "silva",
      sorting: [{ id: "value", desc: true }],
      columnFilters: [{ id: "status", value: ["active"] }],
      grouping: ["city"],
      mode: "board",
    }
    const url = listUrlOf(state, "v1-mine")
    expect(toListUrl(url).toString()).toBe(
      "q=silva&sort=-value&filter=status%3Aactive&group=city&mode=board&view=v1-mine",
    )

    const props = listUrlProps(parseListUrl(toListUrl(url)))
    expect(props).toEqual({
      defaultSort: { key: "value", dir: "desc" },
      defaultFilters: [{ id: "status", value: ["active"] }],
      defaultGroup: "city",
      defaultMode: "board",
      view: "v1-mine",
    })
  })

  it("opens a table on its own defaults when the URL says nothing", () => {
    expect(listUrlProps(parseListUrl(""))).toEqual({
      defaultSort: undefined,
      defaultFilters: [],
      defaultGroup: undefined,
      defaultMode: "table",
      view: undefined,
    })
  })

  it("ignores a second sort, which the URL has no room for", () => {
    // The table can sort by two columns; one order is what a link carries, and
    // it is the first, which is the one the table applies first too.
    const state: DataTableState = {
      ...base,
      sorting: [
        { id: "name", desc: false },
        { id: "value", desc: true },
      ],
    }
    expect(toListUrl(listUrlOf(state)).toString()).toBe("sort=name")
  })
})
