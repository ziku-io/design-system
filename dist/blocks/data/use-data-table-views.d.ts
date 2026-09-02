import { DataTableState, DataTableView, SavedView } from './types';
export declare const VIEW_ICON_NAMES: readonly ["table", "list", "board", "star", "funnel", "clock", "users", "tag", "eye"];
/**
 * Where saved views live when they are not in this browser.
 *
 * A view is how a team encodes a workflow ("missing identification", each
 * consultant's slice of the task list), and in localStorage it cannot be
 * shared, does not follow a person to a second machine, and goes with a cleared
 * profile. An app that has somewhere to put them passes this; an app that does
 * not passes nothing and keeps exactly today's behaviour.
 *
 * The library holds no opinion about transport, authentication or who may see
 * what. `list` answers whatever the caller is allowed to see, and `remove`
 * refuses whatever the caller may not delete: `canDelete` on a view only keeps
 * the UI from offering an action the server would refuse, and is never the
 * thing enforcing it.
 */
export interface ViewsBackend {
    /** Every view this person may see for this table: their own and the shared
     *  ones. Called once on mount. A rejection is swallowed and the browser's own
     *  views are used, because a table that will not draw is worse than a table
     *  missing a view. */
    list: () => Promise<SavedView[]>;
    /** Create one, owned by whoever is signed in. The id comes back from the
     *  server: the local one was only ever good inside this tab. */
    create: (view: Omit<SavedView, "id">) => Promise<SavedView>;
    /** Name, icon, shared flag or state. Called on a debounce, not per keystroke. */
    update: (id: string, patch: Partial<Omit<SavedView, "id">>) => Promise<void>;
    remove: (id: string) => Promise<void>;
}
export interface UseDataTableViews {
    views: SavedView[];
    active: SavedView;
    /** True for "All" and any page-pinned preset: renaming is allowed, deleting is not. */
    isPreset: boolean;
    select: (id: string) => void;
    /** `shared` is only meaningful with a backend: without one every view is
     *  this browser's, and there is nobody to share it with. */
    add: (name: string, shared?: boolean) => void;
    rename: (name: string) => void;
    setIcon: (icon: string) => void;
    remove: () => void;
    /** Back to what the page defined for this view, not to a blank table. */
    reset: () => void;
    /** Merges into the active view's state. Saved immediately — no save button. */
    patch: (partial: Partial<DataTableState>) => void;
    /** True once a backend has been asked for its views, whatever it answered.
     *  Nothing renders differently on it; it is what a test waits for. */
    loaded: boolean;
    /** Whether views can be shared at all, i.e. whether a backend was given. */
    sharable: boolean;
}
/**
 * Saved views, in this browser and optionally on a server too.
 *
 * Without a `backend` this is what it always was: every change to the active
 * view is written to localStorage as it happens, and `viewKey` is the key.
 *
 * With one, the two live side by side. The browser's views are still the
 * browser's, and the server's arrive on mount and are merged in after them.
 * Only remote views are pushed back, on a debounce, because every character
 * typed into the search box is a change to the active view's state.
 *
 * Local views migrate up the first time a backend is present and there is
 * something to migrate: a workflow somebody built before the server existed
 * should not be the price of the server arriving.
 */
export declare function useDataTableViews(base: DataTableState, presets: DataTableView[], viewKey: string | undefined, backend?: ViewsBackend, 
/**
 * Which view to open on, when the caller knows: a view id out of a URL.
 *
 * Honoured once, and only while the person has not picked a view themselves,
 * so a link opens where it points and stops steering the moment somebody
 * clicks a tab. A view that arrives later from the backend is still caught,
 * which is the whole reason this is not just an argument to `load`.
 */
openOn?: string): UseDataTableViews;
