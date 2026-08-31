import type { ReactNode } from "react"
import type { Icon } from "@phosphor-icons/react"
import type {
  ColumnFiltersState,
  GroupingState,
  SortingState,
  ColumnVisibilityState,
} from "@tanstack/react-table"

import type { KanbanTile } from "./kanban"

/** Shown in place of an empty cell or an empty group. */
export const NONE = "—"

export const str = (v: unknown) => (v == null || v === "" ? "" : String(v))

/** Compares two cell values. Numbers numerically, everything else naturally. */
export function compare(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") return a - b
  return String(a).localeCompare(String(b), undefined, { numeric: true })
}

/** A chip's value: picked labels on a facet column, typed text on any other. */
export type FilterValue = string[] | string

export const isBlankFilter = (v: unknown): boolean =>
  v == null || v === "" || (Array.isArray(v) && v.length === 0)

/** The labels a chip carries, whichever shape it is in. */
export const labelsOf = (v: unknown): string[] => (Array.isArray(v) ? v.map(str) : [str(v)])

export interface DataTableColumn<T> {
  key: string
  /** The visible name. A column without one is furniture (checkboxes, row
   *  menus): never offered in a picker, never hidden by the user. */
  header: string
  /** Header icon, for a faster read down the toolbar and pickers. */
  icon?: Icon
  /** Value used to sort, filter and search. Return the visible label — filters
   *  and groups display it verbatim. Defaults to `row[key]`. */
  value?: (row: T) => string | number | null | undefined
  render?: (row: T) => ReactNode
  /** Enables the distinct-values filter, and allows grouping by this column. */
  facet?: boolean
  /** Fixed order for groups and filter options (e.g. priorities); alphabetical
   *  by default. On the board every entry gets a column, even an empty one. */
  order?: string[]
  sortable?: boolean
  /** Extra classes on this column's cells (width, alignment, whitespace). */
  className?: string
  /**
   * The API's name for this column, sent as `DataTableQuery.sort.key`.
   *
   * Under `paged` a column without one cannot be sorted at all: only part of
   * the list is in the browser, so ordering it here would order the loaded
   * rows and leave the rest of the list contradicting them. Ignored without
   * `paged`, where every column sorts locally as before.
   */
  sortKey?: string
  /**
   * The field this column's chip travels to the API as: the picked values go
   * out under this name in `DataTableQuery.filters`.
   *
   * A facet without one keeps filtering in the browser, which under `paged`
   * means the table pulls the whole list before it can answer.
   */
  filterKey?: string
  /**
   * The stored value behind a facet: what the chip carries, what the group is
   * built on, what goes to the API, and what `onSet` gets back.
   *
   * Without it the visible word is the stored value, which holds until the
   * word is translated or renamed. With it the two are separate — the key is
   * stored and transmitted, `facetLabel` supplies the word.
   */
  facetKey?: (row: T) => string
  /** The word for a key. Used on the chip, in the filter options, on a group
   *  heading and on a board column. Defaults to the key itself. */
  facetLabel?: (key: string) => string
  /** Board only: makes cards draggable while grouped by this column. Called
   *  with the label of the column the card was dropped on. */
  onSet?: (row: T, label: string) => void
  /** Board only: cards returning false cannot be dragged. */
  canSet?: (row: T) => boolean
  /**
   * Board only, and only for the column being grouped by: which of this
   * column's values are endings rather than stages.
   *
   * Return a tile for a label and that label becomes a compact drop target
   * showing its count and subtitle instead of a full column of cards. Return
   * nothing and it stays a column. See `KanbanTile` for why endings are worth
   * distinguishing.
   */
  boardTile?: (label: string) => KanbanTile | undefined
}

/** Everything a view remembers. */
export interface DataTableState {
  sorting: SortingState
  columnFilters: ColumnFiltersState
  globalFilter: string
  columnVisibility: ColumnVisibilityState
  grouping: GroupingState
  mode: "table" | "board"
}

export interface SavedView {
  id: string
  name: string
  icon: string
  state: DataTableState
  /**
   * Set only on a view that lives on a server rather than in this browser.
   * `true` means everybody working on this table sees it, `false` means it
   * follows one person between their machines. Absent means neither: the view
   * is in this browser's localStorage and goes when the profile does.
   */
  shared?: boolean
  /** Who a shared view belongs to, so the picker can say whose it is. */
  ownerName?: string
  /** False on somebody else's shared view. The server decides this, and the
   *  server enforces it: this only keeps the UI from offering what would be
   *  refused. */
  canDelete?: boolean
}

/** A view the page pins next to "All" — its state is a patch on the defaults. */
export interface DataTableView {
  id: string
  name: string
  icon: string
  state: Partial<DataTableState>
}

/** Sorts by the column's fixed order when it has one, else alphabetically. */
export const rank =
  <T>(col: DataTableColumn<T>) =>
  (a: string, b: string) => {
    if (!col.order) return compare(a, b)
    const ia = col.order.indexOf(a)
    const ib = col.order.indexOf(b)
    return (ia < 0 ? col.order.length : ia) - (ib < 0 ? col.order.length : ib)
  }

/** A column the user is shown by name. */
export const named = <T>(col: DataTableColumn<T>) => Boolean(col.header)

/** The word for one facet value: the column's label for the key, else the key. */
export function facetText<T>(col: DataTableColumn<T> | undefined, key: string): string {
  return col?.facetLabel ? col.facetLabel(key) : key
}

/** What one chip reads: `Status: Active, Invited`, `Status: Active +2`, `Status`. */
export function chipLabel<T>(col: DataTableColumn<T>, value: unknown): string {
  if (isBlankFilter(value)) return col.header
  const labels = labelsOf(value).map((v) => facetText(col, v))
  const shown = labels.slice(0, 2).join(", ")
  return `${col.header}: ${labels.length > 2 ? `${shown} +${labels.length - 2}` : shown}`
}

/**
 * What a `paged` table asks the API for.
 *
 * State, not a URL: this library has no idea whether the consumer pages on a
 * cursor or an offset, spells the sort `sort_by=name` or `sort=-name`, or
 * packs its filters into one parameter. It hands over what the toolbar is set
 * to and the page builds the request.
 *
 * `filters` is keyed by each column's `filterKey`, holding the picked
 * `facetKey` values. A chip on a column without a `filterKey` is not in here:
 * it is filtered in the browser instead.
 */
export interface DataTableQuery {
  /** The search box. Debounced, so this is not every keystroke. */
  q: string
  /** Absent when nothing is sorted, or when the sorted column has no `sortKey`. */
  sort?: { key: string; dir: "asc" | "desc" }
  filters: Record<string, string[]>
}

/**
 * The toolbar as a query.
 *
 * Only the first sort is sent: the API takes one order, and a second one
 * applied to the loaded page alone would contradict the rows still to come.
 */
export function toQuery<T>(
  columns: DataTableColumn<T>[],
  state: Pick<DataTableState, "globalFilter" | "sorting" | "columnFilters">,
): DataTableQuery {
  const byKey = Object.fromEntries(columns.map((c) => [c.key, c]))
  const first = state.sorting[0]
  const sortKey = first ? byKey[first.id]?.sortKey : undefined
  return {
    q: state.globalFilter,
    sort: sortKey ? { key: sortKey, dir: first.desc ? "desc" : "asc" } : undefined,
    filters: Object.fromEntries(
      state.columnFilters.flatMap((f) => {
        const filterKey = byKey[f.id]?.filterKey
        if (!filterKey || isBlankFilter(f.value)) return []
        return [[filterKey, labelsOf(f.value)]]
      }),
    ),
  }
}
