import * as React from "react"

import { storageKey } from "@/lib/storage"
import { defaultStrings, useStrings } from "@/lib/strings"

import type { DataTableState, DataTableView, SavedView } from "./types"

export const VIEW_ICON_NAMES = [
  "table",
  "list",
  "board",
  "star",
  "funnel",
  "clock",
  "users",
  "tag",
  "eye",
] as const

const storeKey = (k: string) => storageKey("views", k)

/** "All" plus whatever the page pins after it — always present, in this order,
 *  so a store saved before a preset existed still gains it. */
function builtIn(
  base: DataTableState,
  presets: DataTableView[],
  allLabel: string = defaultStrings.dataTable.allView,
): SavedView[] {
  return [
    { id: "default", name: allLabel, icon: "table", state: base },
    ...presets.map((p) => ({ ...p, state: { ...base, ...p.state } })),
  ]
}

function load(
  viewKey: string | undefined,
  base: DataTableState,
  presets: DataTableView[],
  allLabel: string,
): { views: SavedView[]; activeId: string } {
  const fixed = builtIn(base, presets, allLabel)
  const fallback = { views: fixed, activeId: fixed[0].id }
  if (!viewKey || typeof localStorage === "undefined") return fallback
  try {
    const raw = localStorage.getItem(storeKey(viewKey))
    const parsed = raw ? JSON.parse(raw) : null
    if (!parsed?.views?.length) return fallback
    const saved = parsed as { views: SavedView[]; activeId: string }
    // Name and position come from the code, the state left on it from storage,
    // so a preset added later shows up without wiping what the user saved.
    const views = [
      ...fixed.map((f) => {
        const seen = saved.views.find((v) => v.id === f.id)
        return seen ? { ...f, state: seen.state } : f
      }),
      ...saved.views.filter((v) => !fixed.some((f) => f.id === v.id)),
    ]
    return {
      views,
      activeId: views.some((v) => v.id === saved.activeId) ? saved.activeId : views[0].id,
    }
  } catch {
    // ponytail: corrupted or unavailable localStorage → start from scratch
    return fallback
  }
}

/**
 * Where saved views live when they are not in this browser.
 *
 * A view is how a team encodes a workflow ("missing identification", each
 * consultant's slice of the task list), and in localStorage it cannot be
 * shared, does not follow a person to a second machine, and goes with a cleared
 * profile. An app that has somewhere to put them passes this; an app that does
 * not passes nothing and keeps exactly today's behaviour.
 *
 * The library holds no opinion about transport, authentication or who may see
 * what. `list` answers whatever the caller is allowed to see, and `remove`
 * refuses whatever the caller may not delete: `canDelete` on a view only keeps
 * the UI from offering an action the server would refuse, and is never the
 * thing enforcing it.
 */
export interface ViewsBackend {
  /** Every view this person may see for this table: their own and the shared
   *  ones. Called once on mount. A rejection is swallowed and the browser's own
   *  views are used, because a table that will not draw is worse than a table
   *  missing a view. */
  list: () => Promise<SavedView[]>
  /** Create one, owned by whoever is signed in. The id comes back from the
   *  server: the local one was only ever good inside this tab. */
  create: (view: Omit<SavedView, "id">) => Promise<SavedView>
  /** Name, icon, shared flag or state. Called on a debounce, not per keystroke. */
  update: (id: string, patch: Partial<Omit<SavedView, "id">>) => Promise<void>
  remove: (id: string) => Promise<void>
}

/** How long a change to a remote view's state waits before it is pushed. Every
 *  keystroke in the search box is a state change, and each one is a round trip
 *  without this. */
const PUSH_DELAY_MS = 800

/** A view that lives on a server rather than in this browser. The two are told
 *  apart by this and nothing else, so a local view is never pushed and a remote
 *  one is never written to localStorage. */
const isRemote = (v: SavedView) => v.shared !== undefined

export interface UseDataTableViews {
  views: SavedView[]
  active: SavedView
  /** True for "All" and any page-pinned preset: renaming is allowed, deleting is not. */
  isPreset: boolean
  select: (id: string) => void
  /** `shared` is only meaningful with a backend: without one every view is
   *  this browser's, and there is nobody to share it with. */
  add: (name: string, shared?: boolean) => void
  rename: (name: string) => void
  setIcon: (icon: string) => void
  remove: () => void
  /** Back to what the page defined for this view, not to a blank table. */
  reset: () => void
  /** Merges into the active view's state. Saved immediately — no save button. */
  patch: (partial: Partial<DataTableState>) => void
  /** True once a backend has been asked for its views, whatever it answered.
   *  Nothing renders differently on it; it is what a test waits for. */
  loaded: boolean
  /** Whether views can be shared at all, i.e. whether a backend was given. */
  sharable: boolean
}

/**
 * Saved views, in this browser and optionally on a server too.
 *
 * Without a `backend` this is what it always was: every change to the active
 * view is written to localStorage as it happens, and `viewKey` is the key.
 *
 * With one, the two live side by side. The browser's views are still the
 * browser's, and the server's arrive on mount and are merged in after them.
 * Only remote views are pushed back, on a debounce, because every character
 * typed into the search box is a change to the active view's state.
 *
 * Local views migrate up the first time a backend is present and there is
 * something to migrate: a workflow somebody built before the server existed
 * should not be the price of the server arriving.
 */
export function useDataTableViews(
  base: DataTableState,
  presets: DataTableView[],
  viewKey: string | undefined,
  backend?: ViewsBackend,
): UseDataTableViews {
  // The built-in view's name comes from the dictionary, but only on first load:
  // it is stored alongside the user's own views and renaming it is allowed, so
  // re-reading it on every render would undo a rename.
  const allLabel = useStrings().dataTable.allView
  const [{ views, activeId }, setStore] = React.useState(() =>
    load(viewKey, base, presets, allLabel),
  )
  const [loaded, setLoaded] = React.useState(!backend)
  const active = views.find((v) => v.id === activeId) ?? views[0]

  // The backend is a prop, and a caller that rebuilds the object every render
  // would otherwise re-run the mount effect forever.
  const api = React.useRef(backend)
  api.current = backend

  // Only this browser's views are written here. A remote view in localStorage
  // would come back as a duplicate on the next mount, once from storage and
  // once from the server.
  React.useEffect(() => {
    if (viewKey && typeof localStorage !== "undefined") {
      const mine = views.filter((v) => !isRemote(v))
      localStorage.setItem(storeKey(viewKey), JSON.stringify({ views: mine, activeId }))
    }
  }, [views, activeId, viewKey])

  // Mount: ask the server what it has, and hand it anything this browser was
  // holding on its own. Runs once, whatever the backend prop does afterwards.
  React.useEffect(() => {
    const server = api.current
    if (!server) return
    let live = true
    void (async () => {
      let remote: SavedView[] = []
      try {
        remote = await server.list()
      } catch {
        // ponytail: the server is unreachable, so this session is the browser's
        // views alone. Not an error on screen: the table still works, and the
        // next mount tries again.
        if (live) setLoaded(true)
        return
      }
      if (!live) return

      // Everything this browser saved that is not "All" and not a preset. Those
      // two are built from code on every load and belong to nobody.
      const builtInIds = new Set(builtIn(base, presets).map((v) => v.id))
      const local = views.filter((v) => !isRemote(v) && !builtInIds.has(v.id))
      const migrated: SavedView[] = []
      for (const v of local) {
        // A view already on the server under the same name is the same view
        // arriving from a second machine, not a second view.
        if (remote.some((r) => r.name === v.name)) continue
        try {
          migrated.push(await server.create({ ...v, shared: false }))
        } catch {
          // It stays local and is offered again next mount. Losing it silently
          // would be worse than trying twice.
        }
      }
      if (!live) return
      const uploaded = new Set([...local.map((v) => v.name)])
      setStore((s) => ({
        views: [
          ...s.views.filter((v) => isRemote(v) || !uploaded.has(v.name)),
          ...remote,
          ...migrated,
        ],
        activeId: s.activeId,
      }))
      setLoaded(true)
    })()
    return () => {
      live = false
    }
    // Mount only: `base` and `presets` are rebuilt every render by the caller.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // A remote view's state is pushed on a timer, so a filter typed one letter at
  // a time is one request rather than eight. Keyed by id: switching views mid
  // delay must not push one view's state onto another.
  const pending = React.useRef(new Map<string, ReturnType<typeof setTimeout>>())
  const push = React.useCallback((id: string, patch: Partial<Omit<SavedView, "id">>) => {
    const server = api.current
    if (!server) return
    clearTimeout(pending.current.get(id))
    pending.current.set(
      id,
      setTimeout(() => {
        pending.current.delete(id)
        // Nothing to tell the user: the view still reads correctly on screen,
        // and the next change tries again.
        void server.update(id, patch).catch(() => {})
      }, PUSH_DELAY_MS),
    )
  }, [])

  // A pending push whose component has gone would fire into nothing.
  React.useEffect(() => {
    const timers = pending.current
    return () => {
      for (const t of timers.values()) clearTimeout(t)
      timers.clear()
    }
  }, [])

  /** Change the active view, and tell the server if the view is its. */
  const edit = React.useCallback(
    (change: (v: SavedView) => SavedView, remote: (v: SavedView) => Partial<SavedView>) => {
      setStore((s) => {
        const current = s.views.find((v) => v.id === s.activeId)
        if (current && isRemote(current)) push(current.id, remote(change(current)))
        return {
          ...s,
          views: s.views.map((v) => (v.id === s.activeId ? change(v) : v)),
        }
      })
    },
    [push],
  )

  const patch = React.useCallback(
    (partial: Partial<DataTableState>) =>
      edit(
        (v) => ({ ...v, state: { ...v.state, ...partial } }),
        (v) => ({ state: v.state }),
      ),
    [edit],
  )

  return {
    views,
    active,
    loaded,
    sharable: Boolean(backend),
    isPreset: active.id === "default" || presets.some((p) => p.id === active.id),
    patch,
    select: (id) => setStore((s) => ({ ...s, activeId: id })),
    add: (name, shared) =>
      setStore((s) => {
        const from = s.views.find((v) => v.id === s.activeId) ?? s.views[0]
        // A new view starts as a copy of the one being looked at. Starting from
        // the defaults would throw away the filters that are the reason
        // somebody pressed save.
        const draft = {
          name,
          icon: VIEW_ICON_NAMES[s.views.length % VIEW_ICON_NAMES.length],
          state: { ...from.state },
        }
        const id = `v${s.views.length}-${name.replace(/\W+/g, "-").toLowerCase()}`
        const server = api.current
        if (server) {
          // The local id is a placeholder until the server names it. Swapped in
          // place so the tab the user is now on does not jump.
          void server
            .create({ ...draft, shared: Boolean(shared) })
            .then((saved) =>
              setStore((s2) => ({
                views: s2.views.map((v) => (v.id === id ? saved : v)),
                activeId: s2.activeId === id ? saved.id : s2.activeId,
              })),
            )
            .catch(() =>
              // It could not be saved, so it must not sit there looking saved.
              setStore((s2) => ({
                views: s2.views.filter((v) => v.id !== id),
                activeId: s2.activeId === id ? s2.views[0].id : s2.activeId,
              })),
            )
          return { views: [...s.views, { ...draft, id, shared: Boolean(shared) }], activeId: id }
        }
        return { views: [...s.views, { ...draft, id }], activeId: id }
      }),
    rename: (name) =>
      edit(
        (v) => ({ ...v, name }),
        () => ({ name }),
      ),
    setIcon: (icon) =>
      edit(
        (v) => ({ ...v, icon }),
        () => ({ icon }),
      ),
    remove: () =>
      setStore((s) => {
        const gone = s.views.find((v) => v.id === s.activeId)
        if (gone && isRemote(gone)) void api.current?.remove(gone.id).catch(() => {})
        const rest = s.views.filter((v) => v.id !== s.activeId)
        return { views: rest, activeId: rest[0].id }
      }),
    reset: () => patch({ ...base, ...presets.find((p) => p.id === active.id)?.state }),
  }
}
