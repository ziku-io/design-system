import * as React from "react"
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  type ColumnDef,
  type RowData,
} from "@tanstack/react-table"
import { CaretDownIcon, CaretUpDownIcon, CaretUpIcon } from "@phosphor-icons/react"

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

/** The feature set every DataTable gets. Registered once so column types line up. */
export const dataTableFeatures = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  columnFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
  rowSelectionFeature,
  columnVisibilityFeature,
})

export type DataTableFeatures = typeof dataTableFeatures
export type DataTableColumn<TData extends RowData, TValue = unknown> = ColumnDef<
  DataTableFeatures,
  TData,
  TValue
>

/** Typed column builder for DataTable. `helper.accessor("name", { header: "Name" })` */
export function createDataTableColumnHelper<TData extends RowData>() {
  return createColumnHelper<DataTableFeatures, TData>()
}

export interface DataTableProps<TData extends RowData> {
  columns: DataTableColumn<TData, any>[]
  data: TData[]
  /** Column id to filter with the search box. Omit to hide the search box. */
  filterColumn?: string
  filterPlaceholder?: string
  /** Rows per page. 0 renders every row and hides the pager. */
  pageSize?: number
  loading?: boolean
  empty?: React.ReactNode
  onRowClick?: (row: TData) => void
  /** Toolbar content, right-aligned next to the search box */
  actions?: React.ReactNode
  className?: string
}

/**
 * Sortable, filterable, paginated table on TanStack Table v9.
 * Use this for any list of records rather than hand-building <Table> layouts.
 */
export function DataTable<TData extends RowData>({
  columns,
  data,
  filterColumn,
  filterPlaceholder = "Filter…",
  pageSize = 10,
  loading,
  empty = "No results.",
  onRowClick,
  actions,
  className,
}: DataTableProps<TData>) {
  const paginated = pageSize > 0

  const table = useTable({
    features: dataTableFeatures,
    columns,
    data,
    defaultColumn: { filterFn: filterFn_includesString },
    initialState: { pagination: { pageIndex: 0, pageSize: paginated ? pageSize : data.length || 1 } },
  })

  const rows = table.getRowModel().rows
  const filteredCount = table.getFilteredRowModel().rows.length
  const selectedCount = Object.keys(table.state.rowSelection ?? {}).length

  return (
    <div className={cn("grid gap-4", className)}>
      {(filterColumn || actions) && (
        <div className="flex items-center justify-between gap-2">
          {filterColumn ? (
            <Input
              placeholder={filterPlaceholder}
              value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
              onChange={(e) => table.getColumn(filterColumn)?.setFilterValue(e.target.value)}
              className="h-8 max-w-xs"
            />
          ) : (
            <span />
          )}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => {
                  const sorted = header.column.getIsSorted()
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <button
                          type="button"
                          onClick={header.column.getToggleSortingHandler()}
                          className="-mx-2 inline-flex items-center gap-1 rounded-sm px-2 py-1 hover:text-foreground"
                        >
                          <table.FlexRender header={header} />
                          {sorted === "asc" ? (
                            <CaretUpIcon className="size-3" />
                          ) : sorted === "desc" ? (
                            <CaretDownIcon className="size-3" />
                          ) : (
                            <CaretUpDownIcon className="size-3 opacity-50" />
                          )}
                        </button>
                      ) : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: Math.min(paginated ? pageSize : 5, 5) }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_col, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : rows.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                  className={onRowClick ? "cursor-pointer" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  {empty}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {paginated && (
        <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            {selectedCount > 0
              ? `${selectedCount} of ${filteredCount} row(s) selected`
              : `${filteredCount} row(s)`}
          </span>
          <div className="flex items-center gap-2">
            <span>
              Page {(table.state.pagination?.pageIndex ?? 0) + 1} of {Math.max(table.getPageCount(), 1)}
            </span>
            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
