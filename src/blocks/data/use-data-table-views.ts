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

export interface UseDataTableViews {
  views: SavedView[]
  active: SavedView
  /** True for "All" and any page-pinned preset: renaming is allowed, deleting is not. */
  isPreset: boolean
  select: (id: string) => void
  add: (name: string) => void
  rename: (name: string) => void
  setIcon: (icon: string) => void
  remove: () => void
  /** Back to what the page defined for this view, not to a blank table. */
  reset: () => void
  /** Merges into the active view's state. Saved immediately — no save button. */
  patch: (partial: Partial<DataTableState>) => void
}

/**
 * Saved views over localStorage. Every change to the active view is persisted
 * as it happens; `viewKey` is the storage key (omit it and nothing is saved).
 */
export function useDataTableViews(
  base: DataTableState,
  presets: DataTableView[],
  viewKey: string | undefined,
  /** State of the active view, after unknown columns have been pruned. */
  liveState: DataTableState,
): UseDataTableViews {
  // The built-in view's name comes from the dictionary, but only on first load:
  // it is stored alongside the user's own views and renaming it is allowed, so
  // re-reading it on every render would undo a rename.
  const allLabel = useStrings().dataTable.allView
  const [{ views, activeId }, setStore] = React.useState(() =>
    load(viewKey, base, presets, allLabel),
  )
  const active = views.find((v) => v.id === activeId) ?? views[0]

  React.useEffect(() => {
    if (viewKey && typeof localStorage !== "undefined") {
      localStorage.setItem(storeKey(viewKey), JSON.stringify({ views, activeId }))
    }
  }, [views, activeId, viewKey])

  const patch = React.useCallback((partial: Partial<DataTableState>) => {
    setStore((s) => ({
      ...s,
      views: s.views.map((v) =>
        v.id === s.activeId ? { ...v, state: { ...v.state, ...partial } } : v,
      ),
    }))
  }, [])

  return {
    views,
    active,
    isPreset: active.id === "default" || presets.some((p) => p.id === active.id),
    patch,
    select: (id) => setStore((s) => ({ ...s, activeId: id })),
    add: (name) =>
      setStore((s) => {
        const id = `v${s.views.length}-${name.replace(/\W+/g, "-").toLowerCase()}`
        return {
          views: [
            ...s.views,
            {
              id,
              name,
              icon: VIEW_ICON_NAMES[s.views.length % VIEW_ICON_NAMES.length],
              state: { ...liveState },
            },
          ],
          activeId: id,
        }
      }),
    rename: (name) =>
      setStore((s) => ({
        ...s,
        views: s.views.map((v) => (v.id === s.activeId ? { ...v, name } : v)),
      })),
    setIcon: (icon) =>
      setStore((s) => ({
        ...s,
        views: s.views.map((v) => (v.id === s.activeId ? { ...v, icon } : v)),
      })),
    remove: () =>
      setStore((s) => {
        const rest = s.views.filter((v) => v.id !== s.activeId)
        return { views: rest, activeId: rest[0].id }
      }),
    reset: () => patch({ ...base, ...presets.find((p) => p.id === active.id)?.state }),
  }
}
