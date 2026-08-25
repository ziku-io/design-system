import type { ReactNode } from "react"
import type { Icon } from "@phosphor-icons/react"
import type {
  ColumnFiltersState,
  GroupingState,
  SortingState,
  ColumnVisibilityState,
} from "@tanstack/react-table"

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
export const labelsOf = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(str) : [str(v)]

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
  /** Board only: makes cards draggable while grouped by this column. Called
   *  with the label of the column the card was dropped on. */
  onSet?: (row: T, label: string) => void
  /** Board only: cards returning false cannot be dragged. */
  canSet?: (row: T) => boolean
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
  <T,>(col: DataTableColumn<T>) =>
  (a: string, b: string) => {
    if (!col.order) return compare(a, b)
    const ia = col.order.indexOf(a)
    const ib = col.order.indexOf(b)
    return (ia < 0 ? col.order.length : ia) - (ib < 0 ? col.order.length : ib)
  }

/** A column the user is shown by name. */
export const named = <T,>(col: DataTableColumn<T>) => Boolean(col.header)

/** What one chip reads: `Status: Active, Invited`, `Status: Active +2`, `Status`. */
export function chipLabel<T>(col: DataTableColumn<T>, value: unknown): string {
  if (isBlankFilter(value)) return col.header
  const labels = labelsOf(value)
  const shown = labels.slice(0, 2).join(", ")
  return `${col.header}: ${labels.length > 2 ? `${shown} +${labels.length - 2}` : shown}`
}
