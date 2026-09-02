import type { DataTableState } from "./types"

/**
 * A table's toolbar, in the address bar.
 *
 * `DataTable` already reports its state and takes an opening one; what was
 * missing was the agreement on how that state is written down, so every
 * consumer invented its own and none of their links looked alike. This is that
 * agreement: six parameters, in the spelling an API tends to use, so a URL
 * reads like the request it becomes.
 *
 * ```
 * /clients?q=silva&sort=-value&filter=city:lisboa;status:active&view=v1-mine
 * ```
 *
 * Not JSON and not base64: somebody reading a link in a chat message can see
 * what it is, and somebody editing one by hand can. Fields are sorted, so the
 * same list is the same link however the chips were picked.
 *
 * No React and no router here on purpose. Which router puts these in the
 * address bar is the app's business; this is only the codec, and the two
 * adapters under it are what connect it to the table.
 *
 * Anything not listed in `LIST_PARAMS` is left exactly as it was found. A list
 * is not the only thing that puts a parameter in a URL.
 */

/** The keys this module owns. Everything else in a URL is somebody else's. */
export const LIST_PARAMS = ["q", "sort", "filter", "group", "mode", "view"] as const

export interface ListUrlState {
  /** The search box. Empty means absent from the URL. */
  q: string
  /** `{ key, dir }`, written `-key` for descending. */
  sort?: { key: string; dir: "asc" | "desc" }
  /** Facet chips: column key to picked values. */
  filters: Record<string, string[]>
  /** The column rows are grouped under, if any. */
  group?: string
  /** The board, where a table offers one. `table` is the default and is never
   *  written: a URL says what differs from the plain list, and nothing else. */
  mode?: "table" | "board"
  /** The saved view this state belongs to, as `onStateChange` reports it. */
  view?: string
}

/**
 * Reads the parameters back out of a query string.
 *
 * Tolerant on purpose, which is not how a request body should be treated: a URL
 * arrives from a chat message, an old bookmark or somebody editing it by hand,
 * and the useful answer to a malformed `sort` is the unsorted list rather than
 * an error page. Nothing here can produce an invalid state: a key naming no
 * column is dropped by the table, and a filter field an API does not know is
 * refused by the API.
 */
export function parseListUrl(search: string | URLSearchParams): ListUrlState {
  const params = typeof search === "string" ? new URLSearchParams(search) : search
  const state: ListUrlState = { q: params.get("q") ?? "", filters: {} }

  const sort = params.get("sort")
  if (sort) {
    const desc = sort.startsWith("-")
    const key = desc ? sort.slice(1) : sort
    if (key) state.sort = { key, dir: desc ? "desc" : "asc" }
  }

  // `field:a,b;other:c`. A field with no values is dropped rather than kept as
  // an empty chip, which would filter nothing and look like it filtered.
  for (const part of (params.get("filter") ?? "").split(";")) {
    const at = part.indexOf(":")
    if (at < 1) continue
    const field = part.slice(0, at)
    const values = part
      .slice(at + 1)
      .split(",")
      .filter((v) => v !== "")
    if (values.length > 0) state.filters[field] = values
  }

  const group = params.get("group")
  if (group) state.group = group
  if (params.get("mode") === "board") state.mode = "board"
  const view = params.get("view")
  if (view) state.view = view
  return state
}

/**
 * Writes them back, into a copy of the parameters already there.
 *
 * A default is absent rather than spelled out: an unfiltered list is `/clients`
 * and not `/clients?q=&filter=`, so the plain path stays the plain path and a
 * link to it says nothing it does not mean.
 */
export function toListUrl(
  state: ListUrlState,
  existing?: string | URLSearchParams,
): URLSearchParams {
  const params = new URLSearchParams(
    typeof existing === "string" ? existing : (existing ?? undefined),
  )
  for (const key of LIST_PARAMS) params.delete(key)

  if (state.q) params.set("q", state.q)
  if (state.sort) params.set("sort", `${state.sort.dir === "desc" ? "-" : ""}${state.sort.key}`)
  const filter = Object.entries(state.filters)
    .filter(([, values]) => values.length > 0)
    // Sorted by field, so the same list is the same URL however the chips were
    // added. Two colleagues comparing links should not find they differ by the
    // order somebody clicked things in.
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([field, values]) => `${field}:${values.join(",")}`)
    .join(";")
  if (filter) params.set("filter", filter)
  if (state.group) params.set("group", state.group)
  if (state.mode === "board") params.set("mode", "board")
  // "default" is the built-in "All" view, which is where a table opens anyway.
  if (state.view && state.view !== "default") params.set("view", state.view)
  return params
}

/** Whether two toolbars are the same one, so an unchanged list does not rewrite
 *  its own URL. Compared as the string, which is what lands in the address bar
 *  and what `toListUrl` has already made canonical. */
export function sameListUrl(a: ListUrlState, b: ListUrlState): boolean {
  return toListUrl(a).toString() === toListUrl(b).toString()
}

/**
 * What `onStateChange` hands you, in the spelling the address bar uses.
 *
 * ```tsx
 * onStateChange={(state, view) => setParams(toListUrl(listUrlOf(state, view), params))}
 * ```
 */
export function listUrlOf(state: DataTableState, view?: string): ListUrlState {
  const [first] = state.sorting
  return {
    q: state.globalFilter ?? "",
    sort: first ? { key: first.id, dir: first.desc ? "desc" : "asc" } : undefined,
    filters: Object.fromEntries(
      state.columnFilters.map((f) => [f.id, (Array.isArray(f.value) ? f.value : []) as string[]]),
    ),
    group: state.grouping[0],
    mode: state.mode === "board" ? "board" : undefined,
    view,
  }
}

/**
 * And back: the props that open a table on it.
 *
 * ```tsx
 * <DataTable {...listUrlProps(parseListUrl(params))} ... />
 * ```
 *
 * Read once, when the table mounts. Spreading a fresh object on every render is
 * harmless because these are opening values, but re-deriving them from a URL
 * that the table itself is writing is a loop waiting to happen: hold the parsed
 * state in the caller.
 */
export function listUrlProps(state: ListUrlState): {
  defaultSort?: { key: string; dir: "asc" | "desc" }
  defaultFilters: DataTableState["columnFilters"]
  defaultGroup?: string
  defaultMode: "table" | "board"
  view?: string
} {
  return {
    defaultSort: state.sort,
    defaultFilters: Object.entries(state.filters).map(([id, value]) => ({ id, value })),
    defaultGroup: state.group,
    defaultMode: state.mode ?? "table",
    view: state.view,
  }
}
