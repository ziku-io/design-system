import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { act, cleanup, renderHook, waitFor } from "@testing-library/react"

import { useDataTableViews, type ViewsBackend } from "./use-data-table-views"
import type { DataTableState, SavedView } from "./types"

afterEach(() => {
  cleanup()
  localStorage.clear()
  vi.useRealTimers()
})

const base: DataTableState = {
  sorting: [],
  columnFilters: [],
  globalFilter: "",
  columnVisibility: {},
  grouping: [],
  mode: "table",
}

const render = (viewKey: string | undefined, backend?: ViewsBackend) =>
  renderHook(() => useDataTableViews(base, [], viewKey, backend))

/** A backend that records what it was asked to do. */
function fake(seed: SavedView[] = []) {
  const calls = { create: [] as unknown[], update: [] as unknown[], remove: [] as string[] }
  let n = 0
  const backend: ViewsBackend = {
    list: () => Promise.resolve(seed),
    create: (view) => {
      calls.create.push(view)
      return Promise.resolve({ ...view, id: `server-${++n}` } as SavedView)
    },
    update: (id, patch) => {
      calls.update.push([id, patch])
      return Promise.resolve()
    },
    remove: (id) => {
      calls.remove.push(id)
      return Promise.resolve()
    },
  }
  return { backend, calls }
}

describe("without a backend", () => {
  it("keeps views in localStorage under the table's key", async () => {
    const { result } = render("clients")
    act(() => result.current.add("Mine"))
    await waitFor(() =>
      expect(JSON.parse(localStorage.getItem("ziku.views.clients")!).views).toHaveLength(2),
    )
    // Nothing was shared, because there is nowhere to share it to.
    expect(result.current.sharable).toBe(false)
    expect(result.current.views[1].shared).toBeUndefined()
  })

  it("starts a new view from the one on screen, not from the defaults", () => {
    // The filters showing are the reason somebody pressed save. Copying the
    // defaults instead throws away exactly what they meant to keep.
    const { result } = render("clients")
    act(() => result.current.patch({ globalFilter: "silva" }))
    act(() => result.current.add("Silva"))
    expect(result.current.active.name).toBe("Silva")
    expect(result.current.active.state.globalFilter).toBe("silva")
  })

  it("persists nothing without a viewKey", async () => {
    const { result } = render(undefined)
    act(() => result.current.add("Mine"))
    await waitFor(() => expect(result.current.views).toHaveLength(2))
    expect(localStorage.length).toBe(0)
  })
})

describe("with a backend", () => {
  it("merges the server's views in after the browser's", async () => {
    const shared: SavedView = {
      id: "server-9",
      name: "Team slice",
      icon: "users",
      state: base,
      shared: true,
      ownerName: "Ana",
      canDelete: false,
    }
    const { backend } = fake([shared])
    const { result } = render("clients", backend)
    await waitFor(() => expect(result.current.loaded).toBe(true))
    expect(result.current.views.map((v) => v.name)).toEqual(["All", "Team slice"])
    expect(result.current.sharable).toBe(true)
  })

  it("creates a shared view on the server and takes the id it is given", async () => {
    const { backend, calls } = fake()
    const { result } = render("clients", backend)
    await waitFor(() => expect(result.current.loaded).toBe(true))

    act(() => result.current.add("Everyone's", true))
    await waitFor(() => expect(result.current.active.id).toBe("server-1"))
    expect(calls.create).toHaveLength(1)
    expect((calls.create[0] as SavedView).shared).toBe(true)
  })

  it("drops a view the server refused rather than leaving it looking saved", async () => {
    const { backend } = fake()
    backend.create = () => Promise.reject(new Error("nope"))
    const { result } = render("clients", backend)
    await waitFor(() => expect(result.current.loaded).toBe(true))

    act(() => result.current.add("Doomed"))
    await waitFor(() => expect(result.current.views.map((v) => v.name)).toEqual(["All"]))
    expect(result.current.active.id).toBe("default")
  })

  it("migrates a view saved before the server existed, once", async () => {
    localStorage.setItem(
      "ziku.views.clients",
      JSON.stringify({
        views: [
          { id: "default", name: "All", icon: "table", state: base },
          { id: "v1-old", name: "Missing id", icon: "funnel", state: base },
        ],
        activeId: "default",
      }),
    )
    const { backend, calls } = fake()
    const { result } = render("clients", backend)
    await waitFor(() => expect(result.current.loaded).toBe(true))

    expect(calls.create).toHaveLength(1)
    expect((calls.create[0] as SavedView).name).toBe("Missing id")
    // It went up private: migrating a personal view must not publish it.
    expect((calls.create[0] as SavedView).shared).toBe(false)
    // And it is not there twice, once local and once remote.
    await waitFor(() => expect(result.current.views.map((v) => v.name)).toEqual(["All", "Missing id"]))
    // A remote view is not written back to localStorage, or the next mount
    // would load it a second time.
    await waitFor(() =>
      expect(JSON.parse(localStorage.getItem("ziku.views.clients")!).views).toHaveLength(1),
    )
  })

  it("does not migrate a view the server already has under that name", async () => {
    localStorage.setItem(
      "ziku.views.clients",
      JSON.stringify({
        views: [{ id: "v1-mine", name: "Mine", icon: "star", state: base }],
        activeId: "v1-mine",
      }),
    )
    // The same person on a second machine: the view is already up there.
    const { backend, calls } = fake([
      { id: "server-3", name: "Mine", icon: "star", state: base, shared: false, canDelete: true },
    ])
    const { result } = render("clients", backend)
    await waitFor(() => expect(result.current.loaded).toBe(true))
    expect(calls.create).toHaveLength(0)
    expect(result.current.views.filter((v) => v.name === "Mine")).toHaveLength(1)
  })

  it("debounces a remote view's state instead of writing per keystroke", async () => {
    vi.useFakeTimers()
    const { backend, calls } = fake([
      { id: "server-1", name: "Mine", icon: "star", state: base, shared: false, canDelete: true },
    ])
    const { result } = render("clients", backend)
    await act(async () => {
      await vi.advanceTimersByTimeAsync(0)
    })
    act(() => result.current.select("server-1"))

    for (const q of ["s", "si", "sil", "silv", "silva"]) {
      act(() => result.current.patch({ globalFilter: q }))
    }
    expect(calls.update).toHaveLength(0)
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000)
    })
    expect(calls.update).toHaveLength(1)
    expect((calls.update[0] as [string, { state: DataTableState }])[1].state.globalFilter).toBe(
      "silva",
    )
  })

  it("deletes a remote view on the server, and a local one nowhere", async () => {
    const { backend, calls } = fake([
      { id: "server-1", name: "Mine", icon: "star", state: base, shared: false, canDelete: true },
    ])
    const { result } = render("clients", backend)
    await waitFor(() => expect(result.current.loaded).toBe(true))

    act(() => result.current.select("server-1"))
    act(() => result.current.remove())
    await waitFor(() => expect(calls.remove).toEqual(["server-1"]))
  })

  it("keeps the browser's views when the server cannot be reached", async () => {
    localStorage.setItem(
      "ziku.views.clients",
      JSON.stringify({
        views: [{ id: "v1-mine", name: "Mine", icon: "star", state: base }],
        activeId: "v1-mine",
      }),
    )
    const { backend } = fake()
    backend.list = () => Promise.reject(new Error("offline"))
    const { result } = render("clients", backend)
    // A table that will not draw is worse than a table missing a view.
    await waitFor(() => expect(result.current.loaded).toBe(true))
    expect(result.current.views.map((v) => v.name)).toContain("Mine")
  })
})
