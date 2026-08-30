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
  type RowData,
  type SortingState,
} from "@tanstack/react-table"
import {
  CaretDownIcon,
  CaretRightIcon,
  CaretUpIcon,
  DotsThreeIcon,
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
  isBlankFilter,
  named,
  rank,
  str,
  type DataTableColumn,
  type DataTableState,
  type DataTableView,
  type FilterValue,
} from "./types"
import { useDataTableViews } from "./use-data-table-views"

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
  /** Observe the active view's state, e.g. to mirror it into the URL.
   *  Filtering and sorting still happen in the browser. */
  onStateChange?: (state: DataTableState) => void
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
  className,
}: DataTableProps<T>) {
  const strings = useStrings()
  const t = strings.dataTable
  const common = strings.common
  const rows = React.useMemo(() => data ?? [], [data])
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

  const store = useDataTableViews(base, presets, viewKey, base)
  const { views, active, isPreset, patch } = store
  const state = React.useMemo(() => prune(active.state), [active.state, prune])

  React.useEffect(() => {
    onStateChange?.(state)
  }, [state, onStateChange])

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
        accessorFn: (row: T) => {
          const v = col.value
            ? col.value(row)
            : (row as unknown as Record<string, unknown>)[col.key]
          return v == null || v === "" ? undefined : (v as string | number)
        },
        cell: (ctx) => (col.render ? col.render(ctx.row.original) : str(ctx.getValue()) || NONE),
        enableSorting: col.sortable !== false,
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
    [columns],
  )

  const [expanded, setExpanded] = React.useState<ExpandedState>(true)
  const [pageIndex, setPageIndex] = React.useState(0)
  const group = state.grouping[0] ?? ""
  const facets = columns.filter((c) => c.facet)
  const boardable = Boolean(renderCard && facets.length && rowId)
  const board = state.mode === "board" && boardable
  // Grouping and the board show the whole set at once.
  const paginated = pageSize > 0 && !group && !board

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
      columnFilters: state.columnFilters,
      globalFilter: state.globalFilter,
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
    globalFilterFn: (row, _id, value) => {
      const q = String(value).toLowerCase()
      if (!q) return true
      return row.getAllCells().some((c) => str(c.getValue()).toLowerCase().includes(q))
    },
    autoResetExpanded: false,
  })

  const filtered = table.getFilteredRowModel().rows

  // A narrowed list can be shorter than the page the user is on.
  React.useEffect(() => {
    setPageIndex(0)
  }, [state.columnFilters, state.globalFilter, state.grouping])
  const chips = state.columnFilters
  const hiddenCount = Object.values(state.columnVisibility).filter((v) => v === false).length
  const dirty =
    chips.length > 0 ||
    Boolean(state.globalFilter) ||
    state.grouping.length > 0 ||
    state.sorting.length > 0 ||
    hiddenCount > 0

  /** Columns a condition can be built on: named, sortable, not already a chip. */
  const filterable = columns.filter(
    (c) => named(c) && c.sortable !== false && !chips.some((f) => f.id === c.key),
  )
  const sortable = columns.filter((c) => named(c) && c.sortable !== false)

  const addFilter = (key: string) =>
    patch({
      columnFilters: [...chips, { id: key, value: byKey[key]?.facet ? [] : "" }],
    })
  const removeFilter = (key: string) => patch({ columnFilters: chips.filter((f) => f.id !== key) })

  /** The values a facet chip offers, with counts. */
  function filterOptions(col: DataTableColumn<T>) {
    if (!col.facet) return []
    return [...(table.getColumn(col.key)?.getFacetedUniqueValues()?.entries() ?? [])]
      .filter(([v]) => v != null && v !== "")
      .sort((a, b) => rank(col)(str(a[0]), str(b[0])))
      .map(([v, count]) => ({ value: str(v), label: `${str(v)} (${count})` }))
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
              aria-label={`Remove ${col.header}`}
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
          title: key,
          items,
          subtitle: boardSubtitle?.(items),
          tile: groupCol.boardTile?.(key),
        }
      })
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
                  !isPreset && (
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
                  )
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
                    : `${state.sorting.length} sorts`}
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
                    onChange={(v) => table.getColumn(f.id)?.setFilterValue(v)}
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
        <div className="grid gap-2 p-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-12 text-center text-sm text-muted-foreground">
          {empty ?? common.noResults}
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
                    return (
                      <TableHead
                        key={h.id}
                        onClick={h.column.getToggleSortingHandler()}
                        className={cn(
                          "whitespace-nowrap",
                          h.column.getCanSort() &&
                            "cursor-pointer select-none hover:text-foreground",
                          col?.className,
                        )}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          {Ic && <Ic className="size-3.5" weight="bold" />}
                          <table.FlexRender header={h} />
                          {h.column.getCanSort() && (
                            <Sort
                              className={cn("size-3", dir ? "text-foreground" : "opacity-40")}
                              weight="bold"
                            />
                          )}
                        </span>
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
                      onClick={row.getToggleExpandedHandler()}
                      className="cursor-pointer bg-muted/50 text-xs font-semibold tracking-wide uppercase"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {row.getIsExpanded() ? (
                          <CaretDownIcon className="size-3" weight="bold" />
                        ) : (
                          <CaretRightIcon className="size-3" weight="bold" />
                        )}
                        {str(row.getValue(group)) || NONE}
                        <span className="rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal">
                          {row.subRows.length}
                        </span>
                      </span>
                    </TableHead>
                  </TableRow>
                ) : (
                  <TableRow
                    key={row.id}
                    onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                    className={onRowClick ? "cursor-pointer" : undefined}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className={byKey[cell.column.id]?.className}>
                        <table.FlexRender cell={cell} />
                      </TableCell>
                    ))}
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {paginated && !loading && filtered.length > 0 && (
        <div className="flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground">
          <span>{t.rowCount(filtered.length)}</span>
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
