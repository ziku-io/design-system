import { ReactNode } from 'react';
import { Icon } from '@phosphor-icons/react';
import { ColumnFiltersState, GroupingState, SortingState, ColumnVisibilityState } from '@tanstack/react-table';
/** Shown in place of an empty cell or an empty group. */
export declare const NONE = "\u2014";
export declare const str: (v: unknown) => string;
/** Compares two cell values. Numbers numerically, everything else naturally. */
export declare function compare(a: unknown, b: unknown): number;
/** A chip's value: picked labels on a facet column, typed text on any other. */
export type FilterValue = string[] | string;
export declare const isBlankFilter: (v: unknown) => boolean;
/** The labels a chip carries, whichever shape it is in. */
export declare const labelsOf: (v: unknown) => string[];
export interface DataTableColumn<T> {
    key: string;
    /** The visible name. A column without one is furniture (checkboxes, row
     *  menus): never offered in a picker, never hidden by the user. */
    header: string;
    /** Header icon, for a faster read down the toolbar and pickers. */
    icon?: Icon;
    /** Value used to sort, filter and search. Return the visible label — filters
     *  and groups display it verbatim. Defaults to `row[key]`. */
    value?: (row: T) => string | number | null | undefined;
    render?: (row: T) => ReactNode;
    /** Enables the distinct-values filter, and allows grouping by this column. */
    facet?: boolean;
    /** Fixed order for groups and filter options (e.g. priorities); alphabetical
     *  by default. On the board every entry gets a column, even an empty one. */
    order?: string[];
    sortable?: boolean;
    /** Extra classes on this column's cells (width, alignment, whitespace). */
    className?: string;
    /** Board only: makes cards draggable while grouped by this column. Called
     *  with the label of the column the card was dropped on. */
    onSet?: (row: T, label: string) => void;
    /** Board only: cards returning false cannot be dragged. */
    canSet?: (row: T) => boolean;
}
/** Everything a view remembers. */
export interface DataTableState {
    sorting: SortingState;
    columnFilters: ColumnFiltersState;
    globalFilter: string;
    columnVisibility: ColumnVisibilityState;
    grouping: GroupingState;
    mode: "table" | "board";
}
export interface SavedView {
    id: string;
    name: string;
    icon: string;
    state: DataTableState;
}
/** A view the page pins next to "All" — its state is a patch on the defaults. */
export interface DataTableView {
    id: string;
    name: string;
    icon: string;
    state: Partial<DataTableState>;
}
/** Sorts by the column's fixed order when it has one, else alphabetically. */
export declare const rank: <T>(col: DataTableColumn<T>) => (a: string, b: string) => number;
/** A column the user is shown by name. */
export declare const named: <T>(col: DataTableColumn<T>) => boolean;
/** What one chip reads: `Status: Active, Invited`, `Status: Active +2`, `Status`. */
export declare function chipLabel<T>(col: DataTableColumn<T>, value: unknown): string;
