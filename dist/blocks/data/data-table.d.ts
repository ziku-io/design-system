import { RowData } from '@tanstack/react-table';
import { CsvDecimal } from './csv';
import { DataTableColumn, DataTableQuery, DataTableState, DataTableView } from './types';
import { ViewsBackend } from './use-data-table-views';
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
    filename: string;
    /** Default `"."`, the delimiter that follows it a comma. */
    decimal?: CsvDecimal;
}
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
    /**
     * Observe the active view's state, e.g. to mirror it into the URL.
     * Filtering and sorting still happen in the browser.
     *
     * The second argument is the id of the view that state belongs to, which is
     * what a caller needs to put a saved view in a link: the state alone
     * reproduces the list, and the id is what re-selects the tab it came from.
     * Pass it back as `view` and the table opens on it.
     */
    onStateChange?: (state: DataTableState, viewId: string) => void;
    /**
     * Which saved view to open on: the id `onStateChange` reported, usually out
     * of a URL. Honoured once, and only until somebody picks a view themselves.
     *
     * An id that names no view is ignored rather than refused: a link can outlive
     * the view it was made from, and the useful answer then is the table's own
     * opening view rather than an error.
     */
    view?: string;
    /** Where saved views live. Absent means this browser's localStorage alone,
     *  which is the default and needs no server. */
    viewsBackend?: ViewsBackend;
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
        hasMore: boolean;
        loadingMore: boolean;
        more: () => void;
        setQuery: (query: DataTableQuery) => void;
    };
    /** Turns on "Export CSV". Absent means no export offered: a table of
     *  somebody's private records should not grow a download button because a
     *  library version did. See `CsvExport`. */
    csv?: CsvExport;
    className?: string;
}
/**
 * Table with filter chips, multi-column sorting, grouping, column visibility
 * and saved views — the Notion-style list every product needs. Built on
 * TanStack Table v9.
 */
export declare function DataTable<T extends RowData>({ columns, data, loading, empty, rowId, search, searchPlaceholder, toolbar, onRowClick, pageSize, defaultSort, defaultHidden, defaultFilters, defaultGroup, defaultMode, renderCard, boardSubtitle, presets, viewKey, onStateChange, view, viewsBackend, paged, csv, className, }: DataTableProps<T>): React.JSX.Element;
