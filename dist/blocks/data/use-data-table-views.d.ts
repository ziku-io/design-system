import { DataTableState, DataTableView, SavedView } from './types';
export declare const VIEW_ICON_NAMES: readonly ["table", "list", "board", "star", "funnel", "clock", "users", "tag", "eye"];
export interface UseDataTableViews {
    views: SavedView[];
    active: SavedView;
    /** True for "All" and any page-pinned preset: renaming is allowed, deleting is not. */
    isPreset: boolean;
    select: (id: string) => void;
    add: (name: string) => void;
    rename: (name: string) => void;
    setIcon: (icon: string) => void;
    remove: () => void;
    /** Back to what the page defined for this view, not to a blank table. */
    reset: () => void;
    /** Merges into the active view's state. Saved immediately — no save button. */
    patch: (partial: Partial<DataTableState>) => void;
}
/**
 * Saved views over localStorage. Every change to the active view is persisted
 * as it happens; `viewKey` is the storage key (omit it and nothing is saved).
 */
export declare function useDataTableViews(base: DataTableState, presets: DataTableView[], viewKey: string | undefined, 
/** State of the active view, after unknown columns have been pruned. */
liveState: DataTableState): UseDataTableViews;
