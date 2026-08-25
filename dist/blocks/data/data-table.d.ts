import { RowData } from '@tanstack/react-table';
import { DataTableColumn, DataTableState, DataTableView } from './types';
import * as React from "react";
/** The feature set every DataTable registers. */
export declare const dataTableFeatures: {
    rowSortingFeature: import('@tanstack/react-table').TableFeature;
    sortedRowModel: (table: import('@tanstack/react-table').Table<any, any>) => () => import('@tanstack/react-table').RowModel<any, any>;
    columnFilteringFeature: import('@tanstack/react-table').TableFeature;
    filteredRowModel: (table: import('@tanstack/react-table').Table<any, any>) => () => import('@tanstack/react-table').RowModel<any, any>;
    globalFilteringFeature: import('@tanstack/react-table').TableFeature;
    columnFacetingFeature: import('@tanstack/react-table').TableFeature;
    facetedRowModel: (table: import('@tanstack/react-table').Table<any, any>, columnId: string) => () => import('@tanstack/react-table').RowModel<any, any>;
    facetedUniqueValues: (table: import('@tanstack/react-table').Table<import('@tanstack/react-table').TableFeatures, any>, columnId: string) => () => Map<any, number>;
    columnGroupingFeature: import('@tanstack/react-table').TableFeature;
    groupedRowModel: (table: import('@tanstack/react-table').Table<any, any>) => () => import('@tanstack/react-table').RowModel<any, any>;
    rowExpandingFeature: import('@tanstack/react-table').TableFeature;
    expandedRowModel: (table: import('@tanstack/react-table').Table<any, any>) => () => import('@tanstack/react-table').RowModel<any, any>;
    columnVisibilityFeature: import('@tanstack/react-table').TableFeature;
    rowPaginationFeature: import('@tanstack/react-table').TableFeature;
    paginatedRowModel: (table: import('@tanstack/react-table').Table<any, any>) => () => import('@tanstack/react-table').RowModel<any, any>;
};
export interface DataTableProps<T extends RowData> {
    columns: DataTableColumn<T>[];
    data: T[] | null | undefined;
    loading?: boolean;
    empty?: React.ReactNode;
    /** Stable key per row. Required for the board; the table falls back to index. */
    rowId?: (row: T) => string;
    search?: boolean;
    searchPlaceholder?: string;
    /** Page-specific controls, to the left of the toolbar icons. */
    toolbar?: React.ReactNode;
    onRowClick?: (row: T) => void;
    /** Rows per page. 0 shows everything. Grouping and the board always show all. */
    pageSize?: number;
    defaultSort?: {
        key: string;
        dir: "asc" | "desc";
    };
    /** Columns the "All" view starts hidden. The user can tick them back on. */
    defaultHidden?: string[];
    /** Chips the "All" view starts with: `[{ id: "status", value: ["Active"] }]`. */
    defaultFilters?: DataTableState["columnFilters"];
    defaultGroup?: string;
    defaultMode?: "table" | "board";
    /** Present → the board layout becomes available. Dragging cards needs the
     *  grouped column to define `onSet`. */
    renderCard?: (row: T) => React.ReactNode;
    /** Line under each board column's title, e.g. the sum of its rows. */
    boardSubtitle?: (rows: T[]) => string | undefined;
    /** Views pinned after "All" — the page's own, always there, never deleted. */
    presets?: DataTableView[];
    /** localStorage key for saved views. Without it, nothing is persisted. */
    viewKey?: string;
    /** Observe the active view's state, e.g. to mirror it into the URL.
     *  Filtering and sorting still happen in the browser. */
    onStateChange?: (state: DataTableState) => void;
    className?: string;
}
/**
 * Table with filter chips, multi-column sorting, grouping, column visibility
 * and saved views — the Notion-style list every product needs. Built on
 * TanStack Table v9.
 */
export declare function DataTable<T extends RowData>({ columns, data, loading, empty, rowId, search, searchPlaceholder, toolbar, onRowClick, pageSize, defaultSort, defaultHidden, defaultFilters, defaultGroup, defaultMode, renderCard, boardSubtitle, presets, viewKey, onStateChange, className, }: DataTableProps<T>): React.JSX.Element;
