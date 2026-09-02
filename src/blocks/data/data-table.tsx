import * as React from "react"
import {
  columnFacetingFeature,
  columnFilteringFeature,
  columnGroupingFeature,
  columnVisibilityFeature,
  createExpandedRowModel,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createGroupedRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  globalFilteringFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  type ColumnDef,
  type ExpandedState,
  type Row,
  type RowData,
  type SortingState,
} from "@tanstack/react-table"
import {
  CaretDownIcon,
  CaretRightIcon,
  CaretUpIcon,
  DotsThreeIcon,
  DownloadSimpleIcon,
  EyeIcon,
  FunnelIcon,
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  RowsIcon,
  SortAscendingIcon,
  SquaresFourIcon,
  TableIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@phosphor-icons/react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { downloadCsv, toCsv, type CsvDecimal } from "./csv"
import { useStrings } from "@/lib/strings"

import {
  Control,
  ColumnPicker,
  ColumnToggles,
  FilterPanel,
  NameForm,
  PopoverPanel,
  SortPanel,
  ViewIcon,
  ViewSettings,
  type SettingsRow,
} from "./data-table-panels"
import { Kanban } from "./kanban"
import {
  NONE,
  chipLabel,
  compare,
  facetText,
  isBlankFilter,
  named,
  rank,
  str,
  toQuery,
  type DataTableColumn,
  type DataTableQuery,
  type DataTableState,
  type DataTableView,
  type FilterValue,
} from "./types"
import { useDataTableViews, type ViewsBackend } from "./use-data-table-views"

/** The feature set every DataTable registers. */
export const dataTableFeatures = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  columnFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  globalFilteringFeature,
  columnFacetingFeature,
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  columnGroupingFeature,
  groupedRowModel: createGroupedRowModel(),
  rowExpandingFeature,
  expandedRowModel: createExpandedRowModel(),
  columnVisibilityFeature,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
})

type Features = typeof dataTableFeatures

/**
 * What an export needs that the table cannot know.
 *
 * `filename` because "table.csv" tells nobody which table it was, and the page
 * is the only thing that knows. `decimal` because the spreadsheet on the other
 * end splits on the separator its locale names, and the library has no locale:
 * an app that renders `1234,5` on screen exports `,` and gets semicolons with
 * it, which is what makes the file open correctly in Excel pt-PT.
 */
export interface CsvExport {
  filename: string
  /** Default `"."`, the delimiter that follows it a comma. */
  decimal?: CsvDecimal
}

export interface DataTableProps<T extends RowData> {
  columns: DataTableColumn<T>[]
  data: T[] | null | undefined
  loading?: boolean
  empty?: React.ReactNode
  /** Stable key per row. Required for the board; the table falls back to index. */
  rowId?: (row: T) => string
  search?: boolean
  searchPlaceholder?: string
  /** Page-specific controls, to the left of the toolbar icons. */
  toolbar?: React.ReactNode
  onRowClick?: (row: T) => void
  /** Rows per page. 0 shows everything. Grouping and the board always show all. */
  pageSize?: number
  defaultSort?: { key: string; dir: "asc" | "desc" }
  /** Columns the "All" view starts hidden. The user can tick them back on. */
  defaultHidden?: string[]
  /** Chips the "All" view starts with: `[{ id: "status", value: ["Active"] }]`. */
  defaultFilters?: DataTableState["columnFilters"]
  defaultGroup?: string
  defaultMode?: "table" | "board"
  /** Present → the board layout becomes available. Dragging cards needs the
   *  grouped column to define `onSet`. */
  renderCard?: (row: T) => React.ReactNode
  /** Line under each board column's title, e.g. the sum of its rows. */
  boardSubtitle?: (rows: T[]) => string | undefined
  /** Views pinned after "All" — the page's own, always there, never deleted. */
  presets?: DataTableView[]
  /** localStorage key for saved views. Without it, nothing is persisted. */
  viewKey?: string
  /**
   * Observe the active view's state, e.g. to mirror it into the URL.
   * Filtering and sorting still happen in the browser.
   *
   * The second argument is the id of the view that state belongs to, which is
   * what a caller needs to put a saved view in a link: the state alone
   * reproduces the list, and the id is what re-selects the tab it came from.
   * Pass it back as `view` and the table opens on it.
   */
  onStateChange?: (state: DataTableState, viewId: string) => void
  /**
   * Which saved view to open on: the id `onStateChange` reported, usually out
   * of a URL. Honoured once, and only until somebody picks a view themselves.
   *
   * An id that names no view is ignored rather than refused: a link can outlive
   * the view it was made from, and the useful answer then is the table's own
   * opening view rather than an error.
   */
  view?: string
  /** Where saved views live. Absent means this browser's localStorage alone,
   *  which is the default and needs no server. */
  viewsBackend?: ViewsBackend
  /**
   * A list the API pages rather than one the browser holds.
   *
   * The table stops paginating and scrolls instead, loading the next page as
   * the bottom comes into view, and hands the toolbar's state to `setQuery`
   * whenever it changes — debounced on the search box. What that state becomes
   * is the page's business: a cursor, an offset, `?sort_by=`, one packed
   * `?filter=`, this library never builds a URL.
   *
   * Searching and sorting move to the API, and so do the chips on columns with
   * a `filterKey`. Anything the API cannot do — a chip without one, a grouping,
   * the board — needs rows that may not be loaded, so turning it on pulls the
   * rest of the list first.
   *
   * Absent, everything stays in the browser exactly as before.
   */
  paged?: {
    hasMore: boolean
    loadingMore: boolean
    more: () => void
    setQuery: (query: DataTableQuery) => void
  }
  /** Turns on "Export CSV". Absent means no export offered: a table of
   *  somebody's private records should not grow a download button because a
   *  library version did. See `CsvExport`. */
  csv?: CsvExport
  className?: string
}

/**
 * Table with filter chips, multi-column sorting, grouping, column visibility
 * and saved views — the Notion-style list every product needs. Built on
 * TanStack Table v9.
 */
export function DataTable<T extends RowData>({
  columns,
  data,
  loading,
  empty,
  rowId,
  search = true,
  searchPlaceholder,
  toolbar,
  onRowClick,
  pageSize = 0,
  defaultSort,
  defaultHidden,
  defaultFilters,
  defaultGroup = "",
  defaultMode = "table",
  renderCard,
  boardSubtitle,
  presets = [],
  viewKey,
  onStateChange,
  view,
  viewsBackend,
  paged,
  csv,
  className,
}: DataTableProps<T>) {
  const strings = useStrings()
  const t = strings.dataTable
  const common = strings.common
  const rows = React.useMemo(() => data ?? [], [data])
  // Whether the list lives on the API. Named for what it means at each use.
  const server = Boolean(paged)
  const byKey = React.useMemo(
    () => Object.fromEntries(columns.map((c) => [c.key, c])) as Record<string, DataTableColumn<T>>,
    [columns],
  )

  const base = React.useMemo<DataTableState>(
    () => ({
      sorting: defaultSort ? [{ id: defaultSort.key, desc: defaultSort.dir === "desc" }] : [],
      columnFilters: defaultFilters ?? [],
      globalFilter: "",
      columnVisibility: Object.fromEntries((defaultHidden ?? []).map((k) => [k, false])),
      grouping: defaultGroup ? [defaultGroup] : [],
      mode: defaultMode,
      // The defaults are read once, on first render: a page rebuilding these
      // arrays must not reset the view the user is on.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    [defaultSort, defaultGroup, defaultMode],
  )

  // A view saved versions ago may point at columns that no longer exist — and,
  // from before chips took several values, hold a bare string on a facet column.
  const prune = React.useCallback(
    (s: DataTableState): DataTableState => ({
      ...s,
      sorting: (s.sorting ?? []).filter((x) => byKey[x.id]),
      columnFilters: (s.columnFilters ?? [])
        .filter((x) => byKey[x.id])
        .map((x) =>
          byKey[x.id]?.facet && !Array.isArray(x.value)
            ? { ...x, value: isBlankFilter(x.value) ? [] : [str(x.value)] }
            : x,
        )
        // A label renamed in the code is left over in storage and would filter
        // to nothing — drop it, keep the rest of the picked values.
        .map((x) => {
          const order = byKey[x.id]?.order
          return order && Array.isArray(x.value)
            ? {
                ...x,
                value: (x.value as string[]).filter((v) => order.includes(str(v))),
              }
            : x
        }),
      grouping: (s.grouping ?? []).filter((x) => byKey[x]),
    }),
    [byKey],
  )

  const store = useDataTableViews(base, presets, viewKey, viewsBackend, view)
  const { views, active, isPreset, patch } = store
  const state = React.useMemo(() => prune(active.state), [active.state, prune])

  React.useEffect(() => {
    onStateChange?.(state, active.id)
  }, [state, active.id, onStateChange])

  // TanStack hands either a value or an updater.
  const setter =
    <K extends keyof DataTableState>(key: K) =>
    (u: DataTableState[K] | ((old: DataTableState[K]) => DataTableState[K])) =>
      patch({
        [key]:
          typeof u === "function"
            ? (u as (o: DataTableState[K]) => DataTableState[K])(state[key])
            : u,
      } as Partial<DataTableState>)

  const defs = React.useMemo<ColumnDef<Features, T, any>[]>(
    () =>
      columns.map((col) => ({
        id: col.key,
        header: col.header,
        // `facetKey` first: with one, the value the table sorts, groups and
        // filters on is the stored key, and the word comes from `facetLabel`.
        accessorFn: (row: T) => {
          const v = col.facetKey
            ? col.facetKey(row)
            : col.value
              ? col.value(row)
              : (row as unknown as Record<string, unknown>)[col.key]
          return v == null || v === "" ? undefined : (v as string | number)
        },
        cell: (ctx) =>
          col.render ? col.render(ctx.row.original) : facetText(col, str(ctx.getValue())) || NONE,
        // Server-side, only the columns the API knows how to sort by are
        // clickable: the browser holds part of the list, so ordering it here
        // would order the loaded rows and nothing else.
        enableSorting: col.sortable !== false && (!server || Boolean(col.sortKey)),
        enableGlobalFilter: col.sortable !== false,
        enableGrouping: Boolean(col.facet),
        // Furniture is not the user's to hide: without the row menu the row
        // loses its actions, and nothing names the column in the list anyway.
        enableHiding: named(col),
        sortUndefined: "last",
        sortFn: (a, b, id) =>
          col.order
            ? rank(col)(str(a.getValue(id)), str(b.getValue(id)))
            : compare(a.getValue(id), b.getValue(id)),
        // A list of picked values is an "is any of"; typed text is a "contains".
        filterFn: (row, id, value) => {
          if (isBlankFilter(value)) return true
          const cell = str(row.getValue(id))
          return Array.isArray(value)
            ? (value as string[]).includes(cell)
            : cell.toLowerCase().includes(String(value).toLowerCase())
        },
      })),
    [columns, server],
  )

  const [expanded, setExpanded] = React.useState<ExpandedState>(true)
  const [pageIndex, setPageIndex] = React.useState(0)
  const group = state.grouping[0] ?? ""
  const facets = columns.filter((c) => c.facet)
  const boardable = Boolean(renderCard && facets.length && rowId)
  const board = state.mode === "board" && boardable
  // Grouping and the board show the whole set at once, and a paged list
  // scrolls: its next page arrives at the bottom, not behind a page number.
  const paginated = pageSize > 0 && !group && !board && !server

  // Chips the API cannot apply (a column with no `filterKey`) still filter
  // here, and so do grouping and the board — all three need rows that may not
  // be loaded yet, so turning any of them on pulls the rest of the list.
  const localFilters = React.useMemo(
    () => state.columnFilters.filter((f) => !isBlankFilter(f.value) && !byKey[f.id]?.filterKey),
    [state.columnFilters, byKey],
  )
  const needsAll = server && (localFilters.length > 0 || state.grouping.length > 0 || board)

  // Grouping sorts by the grouped column first, so the groups come out in the
  // column's fixed `order` rather than the order rows happened to arrive in;
  // the user's own sort still decides the rows inside each group.
  const sorting = React.useMemo<SortingState>(
    () =>
      group && !state.sorting.some((s) => s.id === group)
        ? [{ id: group, desc: false }, ...state.sorting]
        : state.sorting,
    [group, state.sorting],
  )

  const table = useTable({
    features: dataTableFeatures,
    data: rows,
    columns: defs,
    state: {
      sorting,
      // The API already searched and filtered what it sent. Doing it again over
      // the loaded rows would hide the ones it matched on a column this table
      // does not show, or on a stored value the chip spells differently.
      columnFilters: server ? localFilters : state.columnFilters,
      globalFilter: server ? "" : state.globalFilter,
      columnVisibility: state.columnVisibility,
      grouping: state.grouping,
      expanded,
      // The pagination feature is always registered, so it always applies a
      // page size. Without a page — or while grouped or on the board — that
      // size has to be "everything", not v9's default of 10.
      pagination: {
        pageIndex: paginated ? pageIndex : 0,
        pageSize: paginated ? pageSize : Number.MAX_SAFE_INTEGER,
      },
    },
    onSortingChange: setter("sorting"),
    onColumnFiltersChange: setter("columnFilters"),
    onGlobalFilterChange: setter("globalFilter"),
    onColumnVisibilityChange: setter("columnVisibility"),
    onGroupingChange: setter("grouping"),
    onExpandedChange: setExpanded,
    onPaginationChange: (u) => {
      const next =
        typeof u === "function"
          ? u({
              pageIndex,
              pageSize: paginated ? pageSize : Number.MAX_SAFE_INTEGER,
            })
          : u
      setPageIndex(next.pageIndex)
    },
    // Rows arrive in the order the API was asked for; re-sorting them here
    // would only reorder the loaded page. Grouping is the exception: it loads
    // every page anyway, and only a local sort puts the groups in `order`.
    manualSorting: server && !group,
    globalFilterFn: (row, _id, value) => {
      const q = String(value).toLowerCase()
      if (!q) return true
      return row.getAllCells().some((c) => str(c.getValue()).toLowerCase().includes(q))
    },
    autoResetExpanded: false,
  })

  const filtered = table.getFilteredRowModel().rows

  /**
   * The rows and columns on screen, as a file.
   *
   * The sorted model rather than `filtered`, so the file opens in the order the
   * screen is in, and rather than `getRowModel()`, which is paginated and holds
   * group parent rows when a grouping is on. Grouping and the board both export
   * the flat set: a spreadsheet groups by itself, and the point of the export
   * is the rows.
   *
   * Visible leaf columns in their visible order, minus the furniture ones with
   * no header, which are checkboxes and row menus and export as blanks.
   */
  function exportCsv() {
    if (!csv) return
    const decimal = csv.decimal ?? "."
    const cols = table
      .getVisibleLeafColumns()
      .map((c) => byKey[c.id])
      .filter((c): c is DataTableColumn<T> => Boolean(c?.header))
      .map((c) => ({
        header: c.header,
        // The same accessor the table sorts and filters on, never `render`,
        // which returns a ReactNode and would export as "[object Object]".
        value: (row: Row<Features, T>) => (c.value ? c.value(row.original) : row.getValue(c.key)),
      }))
    const rowsOut = table.getSortedRowModel().rows.filter((r) => !r.getIsGrouped())
    downloadCsv(csv.filename, toCsv(rowsOut, cols, decimal))
  }

  // A narrowed list can be shorter than the page the user is on.
  React.useEffect(() => {
    setPageIndex(0)
  }, [state.columnFilters, state.globalFilter, state.grouping])

  // ── What the API is asked for ──
  // Serialised so the effect compares it by content: the object is rebuilt on
  // every render and would otherwise refetch the list on every render too.
  const q = useDebounced(state.globalFilter, SEARCH_DEBOUNCE_MS)
  const query = JSON.stringify(toQuery(columns, { ...state, globalFilter: q }))
  // Through a ref, so the query is what decides. A page that writes `paged`
  // inline hands over a new `setQuery` on every render, and an effect that
  // depended on the callback would ask the API again on every render — which,
  // for a page that stores what it is handed, never stops.
  const setQuery = React.useRef(paged?.setQuery)
  React.useEffect(() => {
    setQuery.current = paged?.setQuery
  })
  React.useEffect(() => {
    setQuery.current?.(JSON.parse(query) as DataTableQuery)
  }, [query])

  // ── Infinite scroll ──
  const sentinelRef = React.useRef<HTMLTableRowElement>(null)
  const more = paged?.more
  const hasMore = paged?.hasMore ?? false
  const loadingMore = paged?.loadingMore ?? false

  React.useEffect(() => {
    const node = sentinelRef.current
    // Re-created after each page: if the sentinel is still on screen the fresh
    // observer fires again, so a short viewport keeps filling itself.
    if (!node || !more || !hasMore || loadingMore) return
    // The viewport is the root, not the scroll box: a page that constrains the
    // table's height gets the same answer either way, and one that does not
    // would have its whole list "in view" of a box that never scrolls.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) more()
      },
      { rootMargin: "200px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [more, hasMore, loadingMore])

  // The board, a grouped table and a chip the API cannot apply all need rows
  // that may not be loaded — so they take every page, one after the other.
  React.useEffect(() => {
    if (needsAll && hasMore && !loadingMore) more?.()
  }, [needsAll, hasMore, loadingMore, more])

  const chips = state.columnFilters
  const hiddenCount = Object.values(state.columnVisibility).filter((v) => v === false).length
  const dirty =
    chips.length > 0 ||
    Boolean(state.globalFilter) ||
    state.grouping.length > 0 ||
    state.sorting.length > 0 ||
    hiddenCount > 0

  /**
   * Whether the conditions emptied the table rather than the list being empty.
   *
   * A list that never had a row is the page's `empty` slot, even with a sort or
   * a hidden column set — the consumer's copy is not something a stray default
   * gets to replace. Server-side the API did the filtering, so an empty answer
   * to a set condition is this state and not that one.
   */
  const narrowedToNothing = dirty && (rows.length > 0 || server)

  /** Columns a condition can be built on: named, sortable, not already a chip. */
  const filterable = columns.filter(
    (c) => named(c) && c.sortable !== false && !chips.some((f) => f.id === c.key),
  )
  /** Columns the table can order by — server-side, the ones the API knows. */
  const sortable = columns.filter(
    (c) => named(c) && c.sortable !== false && (!server || Boolean(c.sortKey)),
  )

  const addFilter = (key: string) =>
    patch({
      columnFilters: [...chips, { id: key, value: byKey[key]?.facet ? [] : "" }],
    })
  const removeFilter = (key: string) => patch({ columnFilters: chips.filter((f) => f.id !== key) })
  const setChipValue = (key: string, value: FilterValue) =>
    patch({ columnFilters: chips.map((f) => (f.id === key ? { ...f, value } : f)) })

  /**
   * The values a facet chip offers, with counts.
   *
   * A filter the API applies is picked from the column's fixed list where it
   * has one: the loaded rows are only part of the list, so building the options
   * out of them — or counting them — would be wrong.
   */
  function filterOptions(col: DataTableColumn<T>) {
    if (!col.facet) return []
    const remote = server && Boolean(col.filterKey)
    if (remote && col.order) return col.order.map((v) => ({ value: v, label: facetText(col, v) }))
    return [...(table.getColumn(col.key)?.getFacetedUniqueValues()?.entries() ?? [])]
      .filter(([v]) => v != null && v !== "")
      .sort((a, b) => rank(col)(str(a[0]), str(b[0])))
      .map(([v, count]) => ({
        value: str(v),
        label: remote ? facetText(col, str(v)) : `${facetText(col, str(v))} (${count})`,
      }))
  }

  const setLayout = (mode: "table" | "board") =>
    patch({
      mode,
      // The board has to be grouped by something; the first facet is the guess.
      grouping: mode === "board" && !group ? [facets[0].key] : state.grouping,
    })

  const toggles = (
    <ColumnToggles
      columns={columns}
      visibility={state.columnVisibility}
      onToggle={(key, visible) =>
        patch({
          columnVisibility: { ...state.columnVisibility, [key]: visible },
        })
      }
    />
  )
  const sortPanel = (
    <SortPanel
      sorting={state.sorting}
      sortable={sortable}
      byKey={byKey}
      onChange={(s) => patch({ sorting: s })}
    />
  )
  const groupPicker = (close?: () => void) => (
    <ColumnPicker
      columns={facets}
      empty={{
        label: t.noGrouping,
        onPick: () => {
          patch({ grouping: [] })
          close?.()
        },
      }}
      onPick={(key) => {
        patch({ grouping: [key] })
        close?.()
      }}
    />
  )
  const filtersPanel = (
    <>
      {chips.map((f) => {
        const col = byKey[f.id]
        if (!col) return null
        const Ic = col.icon ?? FunnelIcon
        return (
          <div key={f.id} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm">
            <Ic className="size-3.5 shrink-0 text-muted-foreground" />
            <span className="flex-1 truncate">{chipLabel(col, f.value)}</span>
            <button
              type="button"
              onClick={() => removeFilter(f.id)}
              aria-label={t.removeFilterFor(col.header)}
              className="shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg"
            >
              <XIcon className="size-3" weight="bold" />
            </button>
          </div>
        )
      })}
      {chips.length > 0 && <div className="my-1 border-t" />}
      <ColumnPicker columns={filterable} onPick={addFilter} />
    </>
  )

  const settingsRows: SettingsRow[] = [
    ...(boardable
      ? [
          {
            key: "layout",
            icon: TableIcon,
            label: t.layout,
            value: state.mode === "board" ? t.board : t.table,
            panel: (
              <>
                {(
                  [
                    ["table", RowsIcon, t.table],
                    ["board", SquaresFourIcon, t.board],
                  ] as const
                ).map(([m, Ic, label]) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setLayout(m)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent",
                      state.mode === m && "font-medium",
                    )}
                  >
                    <Ic className="size-4 text-muted-foreground" /> {label}
                  </button>
                ))}
              </>
            ),
          },
        ]
      : []),
    {
      key: "columns",
      icon: EyeIcon,
      label: t.visibleColumns,
      value: hiddenCount ? t.hidden(hiddenCount) : t.allView,
      panel: toggles,
    },
    {
      key: "filter",
      icon: FunnelSimpleIcon,
      label: t.filters,
      value: chips.length ? String(chips.length) : undefined,
      panel: filtersPanel,
    },
    {
      key: "sort",
      icon: SortAscendingIcon,
      label: t.sorting,
      value: state.sorting.length
        ? state.sorting.length === 1
          ? byKey[state.sorting[0].id]?.header
          : String(state.sorting.length)
        : undefined,
      panel: sortPanel,
    },
    ...(facets.length
      ? [
          {
            key: "group",
            icon: RowsIcon,
            label: t.groupBy,
            value: group ? byKey[group]?.header : common.none,
            panel: groupPicker(),
          },
        ]
      : []),
  ]

  const groupCol = group ? byKey[group] : null
  /** A group's heading: the column's word for the stored key, or `NONE`. */
  const groupLabel = (key: string) =>
    key && key !== NONE ? facetText(groupCol ?? undefined, key) : NONE
  const boardColumns = React.useMemo(() => {
    if (!board || !groupCol) return []
    const found = new Map<string, T[]>()
    for (const row of filtered) {
      const label = str(row.getValue(group)) || NONE
      found.set(label, [...(found.get(label) ?? []), row.original])
    }
    return [...new Set([...(groupCol.order ?? []), ...found.keys()])]
      .sort(rank(groupCol))
      .map((key) => {
        const items = found.get(key) ?? []
        return {
          key,
          title: groupLabel(key),
          items,
          subtitle: boardSubtitle?.(items),
          tile: groupCol.boardTile?.(key),
        }
      })
    // `groupLabel` is derived from `groupCol`, which is already a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, groupCol, filtered, group, boardSubtitle])

  const visibleCount = table.getVisibleLeafColumns().length

  return (
    <div className={cn("overflow-hidden rounded-md border bg-card", className)}>
      {/* ── Views and controls, one line ── */}
      <div className="flex items-center gap-1 border-b px-2 pt-1.5">
        {/* Only the tabs scroll; the controls stay put on the right. */}
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {views.map((v) => (
            <button
              type="button"
              key={v.id}
              onClick={() => store.select(v.id)}
              className={cn(
                "-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
                v.id === active.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              <ViewIcon name={v.icon} className="size-4" />
              {v.name}
              {/* Only somebody else's: a person does not need telling that
                  their own shared view is theirs. */}
              {v.shared && v.ownerName && !v.canDelete && (
                <span title={t.sharedBy(v.ownerName)} aria-label={t.sharedBy(v.ownerName)}>
                  <UsersIcon className="size-3.5 opacity-70" />
                </span>
              )}
            </button>
          ))}
          <NameForm
            align="start"
            title={t.saveView}
            className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            trigger={<PlusIcon className="size-4" weight="bold" />}
            defaultValue={t.newView}
            confirmLabel={t.createView}
            onSubmit={store.add}
            shareLabel={store.sharable ? t.shareView : undefined}
          />
        </div>

        <div className="-mb-px flex shrink-0 items-center gap-1 pb-1.5">
          {toolbar}

          {search && (
            <Control
              icon={MagnifyingGlassIcon}
              label={common.search}
              active={Boolean(state.globalFilter)}
              width="w-72"
            >
              <Input
                className="h-8"
                placeholder={searchPlaceholder ?? common.searchPlaceholder}
                autoFocus
                value={state.globalFilter}
                onChange={(e) => patch({ globalFilter: e.target.value })}
              />
            </Control>
          )}

          <Control icon={FunnelSimpleIcon} label={t.filter} active={chips.length > 0}>
            {(close) => (
              <ColumnPicker
                columns={filterable}
                onPick={(key) => {
                  addFilter(key)
                  close()
                }}
              />
            )}
          </Control>

          <Control
            icon={SortAscendingIcon}
            label={t.sort}
            active={state.sorting.length > 0}
            width="w-88"
          >
            {sortPanel}
          </Control>

          {facets.length > 0 && (
            <Control icon={RowsIcon} label={t.group} active={Boolean(group)}>
              {(close) => groupPicker(close)}
            </Control>
          )}

          <Control icon={EyeIcon} label={t.visibleColumns} active={hiddenCount > 0} width="w-52">
            {toggles}
          </Control>

          {boardable && (
            <div className="ml-1 flex overflow-hidden rounded-md border">
              {(
                [
                  ["table", RowsIcon, t.table],
                  ["board", SquaresFourIcon, t.board],
                ] as const
              ).map(([m, Ic, label]) => (
                <button
                  type="button"
                  key={m}
                  title={label}
                  aria-label={label}
                  onClick={() => setLayout(m)}
                  className={cn(
                    "px-2 py-1",
                    state.mode === m
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Ic className="size-4" />
                </button>
              ))}
            </div>
          )}

          <PopoverPanel
            align="end"
            width="w-72"
            className="ml-1 rounded-md p-1.5 text-muted-foreground outline-none hover:bg-accent hover:text-foreground"
            trigger={
              <span aria-label={t.viewSettings}>
                <DotsThreeIcon className="size-4" weight="bold" />
              </span>
            }
          >
            {(close) => (
              <ViewSettings
                name={active.name}
                icon={active.icon}
                onIcon={store.setIcon}
                onRename={store.rename}
                onClose={close}
                rows={settingsRows}
                footer={
                  <>
                    {csv && (
                      <button
                        type="button"
                        onClick={() => {
                          exportCsv()
                          close()
                        }}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                      >
                        <DownloadSimpleIcon className="size-4 text-muted-foreground" />
                        {t.exportCsv}
                      </button>
                    )}
                    {!isPreset && active.canDelete !== false && (
                      <button
                        type="button"
                        onClick={() => {
                          store.remove()
                          close()
                        }}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10"
                      >
                        <TrashIcon className="size-4" /> {t.deleteView}
                      </button>
                    )}
                  </>
                }
              />
            )}
          </PopoverPanel>
        </div>
      </div>

      {/* ── Conditions ── */}
      {/* Only there once something is set, so a clean table stays clean. Each
          chip opens the condition it describes. */}
      {(chips.length > 0 || state.sorting.length > 0 || group) && (
        <div className="flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2">
          {state.sorting.length > 0 && (
            <PopoverPanel
              width="w-88"
              className={CHIP_ON}
              trigger={
                <span className="flex items-center gap-1.5">
                  <SortAscendingIcon className="size-3.5" weight="bold" />
                  {state.sorting.length === 1
                    ? `${byKey[state.sorting[0].id]?.header ?? state.sorting[0].id} ${state.sorting[0].desc ? "↓" : "↑"}`
                    : t.sortCount(state.sorting.length)}
                  <CaretDownIcon className="size-2.5 opacity-60" weight="bold" />
                </span>
              }
            >
              {sortPanel}
            </PopoverPanel>
          )}

          {group && (
            <PopoverPanel
              className={CHIP_ON}
              trigger={
                <span className="flex items-center gap-1.5">
                  <RowsIcon className="size-3.5" weight="bold" />
                  {t.groupedBy(byKey[group]?.header.toLowerCase() ?? "")}
                  <CaretDownIcon className="size-2.5 opacity-60" weight="bold" />
                </span>
              }
            >
              {(close) => groupPicker(close)}
            </PopoverPanel>
          )}

          {chips.map((f) => {
            const col = byKey[f.id]
            if (!col) return null
            const Ic = col.icon ?? FunnelIcon
            return (
              <PopoverPanel
                key={f.id}
                className={isBlankFilter(f.value) ? CHIP_OFF : CHIP_ON}
                trigger={
                  <span className="flex items-center gap-1.5">
                    <Ic className="size-3.5" weight="bold" />
                    <span className="max-w-56 truncate">{chipLabel(col, f.value)}</span>
                    <CaretDownIcon className="size-2.5 opacity-60" weight="bold" />
                  </span>
                }
              >
                {(close) => (
                  <FilterPanel
                    col={col}
                    options={filterOptions(col)}
                    value={(f.value ?? (col.facet ? [] : "")) as FilterValue}
                    // Straight into the view, not through the table: under
                    // `paged` the table only holds the chips it applies
                    // locally, and setting a value through it would drop the
                    // ones the API is applying.
                    onChange={(v) => setChipValue(f.id, v)}
                    onRemove={() => {
                      removeFilter(f.id)
                      close()
                    }}
                  />
                )}
              </PopoverPanel>
            )
          })}

          <PopoverPanel
            className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
            trigger={
              <span className="flex items-center gap-1">
                <PlusIcon className="size-3" weight="bold" /> {t.addFilter}
              </span>
            }
          >
            {(close) => (
              <ColumnPicker
                columns={filterable}
                onPick={(key) => {
                  addFilter(key)
                  close()
                }}
              />
            )}
          </PopoverPanel>

          {dirty && (
            <button
              type="button"
              onClick={store.reset}
              className="ml-auto flex items-center gap-1 text-xs text-link hover:underline"
            >
              <XIcon className="size-3" weight="bold" /> {t.clearFilters}
            </button>
          )}
        </div>
      )}

      {loading ? (
        // The columns that are about to arrive, not five bars: a skeleton of a
        // different shape moves the whole page when the real table lands.
        <div className="overflow-auto" role="status" aria-live="polite" aria-busy="true">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                {table.getVisibleLeafColumns().map((c) => (
                  <TableHead key={c.id} className={cn("whitespace-nowrap", byKey[c.id]?.className)}>
                    {byKey[c.id]?.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i} className="hover:bg-transparent">
                  {table.getVisibleLeafColumns().map((c) => (
                    <TableCell key={c.id} className={byKey[c.id]?.className}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : filtered.length === 0 ? (
        <div
          role="status"
          aria-live="polite"
          className="p-12 text-center text-sm text-muted-foreground"
        >
          {/* An empty list and a filter that matched nothing are different
              states: the second one is the user's own doing and needs a way
              back out, so the page's `empty` slot is not the answer to it. */}
          {narrowedToNothing ? (
            <div className="flex flex-col items-center gap-3">
              <span>{t.noMatches}</span>
              <Button variant="outline" size="sm" onClick={store.reset}>
                <XIcon className="size-3.5" weight="bold" />
                {t.clearAllFilters}
              </Button>
            </div>
          ) : (
            (empty ?? common.noResults)
          )}
        </div>
      ) : board ? (
        <div className="p-3">
          <Kanban
            columns={boardColumns}
            itemKey={rowId!}
            renderCard={renderCard!}
            onDrop={groupCol?.onSet ? (row, key) => groupCol.onSet!(row, key) : undefined}
            canDrag={(row) => Boolean(groupCol?.onSet) && (groupCol?.canSet?.(row) ?? true)}
          />
        </div>
      ) : (
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((hg) => (
                <TableRow key={hg.id} className="bg-muted/50">
                  {hg.headers.map((h) => {
                    const col = byKey[h.column.id]
                    const dir = h.column.getIsSorted()
                    const Ic = col?.icon
                    const Sort =
                      dir === "asc"
                        ? CaretUpIcon
                        : dir === "desc"
                          ? CaretDownIcon
                          : SortAscendingIcon
                    const label = (
                      <>
                        {Ic && <Ic className="size-3.5" weight="bold" />}
                        <table.FlexRender header={h} />
                      </>
                    )
                    return (
                      <TableHead
                        key={h.id}
                        // The order a screen reader reports. "none" only on a
                        // column that can be sorted: on the rest the attribute
                        // would claim the column is sortable and unsorted.
                        aria-sort={
                          dir === "asc"
                            ? "ascending"
                            : dir === "desc"
                              ? "descending"
                              : h.column.getCanSort()
                                ? "none"
                                : undefined
                        }
                        className={cn("whitespace-nowrap", col?.className)}
                      >
                        {h.column.getCanSort() ? (
                          // A real button, so the header is in the tab order and
                          // Enter and Space sort. A `<th>` with an onClick is
                          // reachable by pointer only.
                          <button
                            type="button"
                            onClick={h.column.getToggleSortingHandler()}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-sm outline-none select-none",
                              "hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
                            )}
                          >
                            {label}
                            <Sort
                              className={cn("size-3", dir ? "text-foreground" : "opacity-40")}
                              weight="bold"
                            />
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-1.5">{label}</span>
                        )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) =>
                row.getIsGrouped() ? (
                  <TableRow key={row.id} className="hover:bg-transparent">
                    <TableHead
                      colSpan={visibleCount}
                      className="bg-muted/50 text-xs font-semibold tracking-wide uppercase"
                    >
                      <button
                        type="button"
                        onClick={row.getToggleExpandedHandler()}
                        aria-expanded={row.getIsExpanded()}
                        className="inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        {row.getIsExpanded() ? (
                          <CaretDownIcon className="size-3" weight="bold" />
                        ) : (
                          <CaretRightIcon className="size-3" weight="bold" />
                        )}
                        {groupLabel(str(row.getValue(group)))}
                        <span className="rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal">
                          {row.subRows.length}
                        </span>
                      </button>
                    </TableHead>
                  </TableRow>
                ) : (
                  <TableRow
                    key={row.id}
                    // ponytail: a focusable row with a button role, which is the
                    // cheapest thing that opens from the keyboard. The ceiling
                    // is that the row stops reading as a row and still cannot be
                    // Cmd-clicked into a new tab; the upgrade path is a link in
                    // the first cell, rendered by the consumer, and `onRowClick`
                    // left to the pointer.
                    role={onRowClick ? "button" : undefined}
                    tabIndex={onRowClick ? 0 : undefined}
                    onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                    onKeyDown={
                      onRowClick
                        ? (e) => {
                            if (e.key !== "Enter" && e.key !== " ") return
                            // Space scrolls the page otherwise.
                            e.preventDefault()
                            onRowClick(row.original)
                          }
                        : undefined
                    }
                    className={
                      onRowClick
                        ? "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        : undefined
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className={byKey[cell.column.id]?.className}>
                        <table.FlexRender cell={cell} />
                      </TableCell>
                    ))}
                  </TableRow>
                ),
              )}
              {/* The last row of the list: coming into view loads the next page. */}
              {hasMore && (
                <TableRow ref={sentinelRef} className="hover:bg-transparent">
                  <TableCell
                    colSpan={visibleCount}
                    role="status"
                    aria-live="polite"
                    className="text-center text-xs text-muted-foreground"
                  >
                    {loadingMore ? t.loadingMore : null}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {paginated && !loading && filtered.length > 0 && (
        <div className="flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground">
          <span role="status" aria-live="polite">
            {t.rowCount(filtered.length)}
          </span>
          <div className="flex items-center gap-2">
            <span>{t.pageOf(pageIndex + 1, Math.max(table.getPageCount(), 1))}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {t.previousPage}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {t.nextPage}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

// A condition on the bar: highlighted once it holds a value, plain while empty.
const CHIP = "rounded-md border px-2 py-1.5 text-sm outline-none"
const CHIP_ON = `${CHIP} border-ring/60 bg-accent font-medium text-foreground`
const CHIP_OFF = `${CHIP} border-border bg-card text-muted-foreground`

/** How long the search box waits before it becomes a request. */
const SEARCH_DEBOUNCE_MS = 300

/** The search box fires on every keystroke; the API should not. */
function useDebounced(value: string, ms: number) {
  const [held, setHeld] = React.useState(value)
  React.useEffect(() => {
    const timer = setTimeout(() => setHeld(value), ms)
    return () => clearTimeout(timer)
  }, [value, ms])
  return held
}
