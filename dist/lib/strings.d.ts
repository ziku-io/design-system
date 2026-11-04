import { DayPickerLocale } from 'react-day-picker';
import * as React from "react";
/**
 * Every word the blocks render, in one place.
 *
 * The library owns the layout and the behaviour; the app owns the language. An
 * app wraps `UIStringsProvider` once with whatever its own dictionary produces
 * and every block follows. There is no locale negotiation, no plural rules and
 * no message format here on purpose: an app that needs those already has them,
 * and one that does not should not pay for them.
 *
 * ponytail: two levels deep, merged one level down. If a block ever needs a
 * third level, flatten its keys instead of making the merge recursive.
 */
export interface UIStrings {
    common: {
        close: string;
        cancel: string;
        create: string;
        search: string;
        searchPlaceholder: string;
        noResults: string;
        all: string;
        none: string;
        /** What `ErrorState` says when the caller gives it no title. */
        loadFailed: string;
        retry: string;
        /** What `ErrorBoundary` says over a render that threw. Not `loadFailed`:
         *  nothing was being fetched, the screen itself broke. */
        crashed: string;
        /** The yes of `confirm()`. A caller with a verb passes `confirmLabel`. */
        confirm: string;
        /** Read to a screen reader over a skeleton, and shown in a list that is
         *  still fetching. */
        loading: string;
    };
    auth: {
        /** Login */
        loginTitle: string;
        loginDescription: string;
        email: string;
        emailPlaceholder: string;
        password: string;
        forgotPassword: string;
        signIn: string;
        orContinueWith: string;
        noAccount: string;
        createOne: string;
        /** Register */
        registerTitle: string;
        registerDescription: string;
        name: string;
        namePlaceholder: string;
        passwordHint: string;
        confirmPassword: string;
        createAccount: string;
        haveAccount: string;
        /** Forgot password */
        resetTitle: string;
        resetDescription: string;
        sendResetLink: string;
        backToSignIn: string;
        sentTitle: string;
        /** `email` is what was typed, or `thatEmail` when the field was empty. */
        sentDescription: (email: string) => string;
        thatEmail: string;
        /** Validation. These reach the user through `FormMessage`. */
        invalidEmail: string;
        passwordRequired: string;
        nameTooShort: string;
        passwordTooShort: string;
        passwordsDoNotMatch: string;
    };
    shell: {
        signOut: string;
        /** The first thing a keyboard user reaches, jumping the sidebar nav. */
        skipToContent: string;
    };
    preferences: {
        zoom: string;
        /** An item in the zoom menu: `zoomLevel(125)` reads "125%". */
        zoomLevel: (percent: number) => string;
    };
    dataTable: {
        /** The view every table starts on. */
        allView: string;
        newView: string;
        createView: string;
        saveView: string;
        deleteView: string;
        viewSettings: string;
        viewName: string;
        changeIcon: string;
        back: string;
        layout: string;
        table: string;
        board: string;
        visibleColumns: string;
        hidden: (count: number) => string;
        filters: string;
        filter: string;
        /** The button that adds a chip: reads as "+ Filter". */
        addFilter: string;
        removeFilter: string;
        /** The X on a chip: `removeFilterFor("Stage")` reads "Remove Stage filter". */
        removeFilterFor: (column: string) => string;
        /** Puts the view back to its saved state. */
        clearFilters: string;
        /** Empties a facet's ticked list, inside its panel. */
        clearSelection: string;
        /** Joins a column name to its condition: "Status is", "Name contains". */
        is: string;
        contains: string;
        findColumn: string;
        typeAValue: string;
        sorting: string;
        sort: string;
        ascending: string;
        descending: string;
        addSort: string;
        removeSort: string;
        removeSorting: string;
        /** The bar's sorting chip once more than one column is ordering the list. */
        sortCount: (count: number) => string;
        group: string;
        groupBy: string;
        /** The chip on the bar: `groupedBy("stage")` reads "Grouped by stage". */
        groupedBy: (column: string) => string;
        /** The card menu on a board, for a pointer that cannot drag. */
        moveCard: string;
        /** The export action, offered only when the page passes `csv`. */
        exportCsv: string;
        /** The tickbox on the save form, shown only when views have a server. */
        shareView: string;
        /** Next to a shared view somebody else owns, in the picker. */
        sharedBy: (owner: string) => string;
        noGrouping: string;
        /** Under the last row of a `paged` table while the next page is in flight. */
        loadingMore: string;
        /** Instead of the `empty` slot when conditions are on and nothing matched:
         *  "there is no data" and "your filters are too narrow" are not the same
         *  state, and only the second one has a way out. */
        noMatches: string;
        /** That way out, next to `noMatches`. */
        clearAllFilters: string;
        /** Under the view name field when the name was blank or only spaces. */
        viewNameRequired: string;
        /** The paging bar under a table that has a `pageSize`. */
        rowCount: (count: number) => string;
        pageOf: (page: number, total: number) => string;
        previousPage: string;
        nextPage: string;
    };
    search: {
        placeholder: string;
        empty: string;
        /** The hint in `SearchTrigger`'s kbd. The key is the platform's, so an app
         *  on Windows overrides it with "Ctrl K". */
        shortcut: string;
    };
    modal: {
        close: string;
    };
    /** The few words the shadcn primitives in `components/ui/` render on their
     *  own, nearly all of them for a screen reader. Everything else a primitive
     *  shows arrives as children from the caller. */
    ui: {
        close: string;
        breadcrumb: string;
        /** The collapsed middle of a breadcrumb trail. */
        more: string;
        pagination: string;
        previous: string;
        next: string;
        goToPreviousPage: string;
        goToNextPage: string;
        morePages: string;
        toggleSidebar: string;
        /** The mobile sidebar is a sheet, and a sheet needs a title to be announced. */
        sidebarTitle: string;
        sidebarDescription: string;
        commandTitle: string;
        commandDescription: string;
    };
    /** How values are written. One place, so a chart tooltip, a tile and a file
     *  size all agree on "1.234,5" or "1,234.5". */
    format: {
        number: (value: number) => string;
        /** A calendar day: a picker's trigger, an axis tick. */
        date: (date: Date) => string;
        /** A moment: when something happened. */
        dateTime: (date: Date) => string;
        /** Bytes as a person reads them: `fileSize(1536)` reads "1.5 KB". */
        fileSize: (bytes: number) => string;
    };
    dashboard: {
        /** `StatTile`'s `change`: `change(12.5)` reads "+12.5%". */
        change: (percent: number) => string;
        /** An `ActivityList` with nothing in it. */
        noActivity: string;
    };
    datePicker: {
        placeholder: string;
        rangePlaceholder: string;
        /** Joins the two ends of a range on the trigger: "4 Nov – 10 Nov". */
        rangeSeparator: string;
        clear: string;
        today: string;
        last7Days: string;
        last30Days: string;
        last90Days: string;
        thisMonth: string;
        thisYear: string;
        /** Month and weekday names, the calendar's own aria-labels, and the first
         *  day of the week. A react-day-picker locale, not a string. */
        locale: DayPickerLocale;
    };
    upload: {
        /** The drop zone's line: "Drop files here or" ahead of `browse`. */
        dropHere: string;
        /** `dropHere` for a zone that takes one file. */
        dropFile: string;
        browse: string;
        /** Under the drop zone, built from what the caller allows. `maxFiles` is
         *  left out when it is 1: `dropFile` already says so. */
        limits: (limits: {
            accept?: string;
            maxSize?: string;
            maxFiles?: number;
        }) => string;
        tooLarge: (name: string, max: string) => string;
        wrongType: (name: string) => string;
        tooMany: (max: number) => string;
        remove: (name: string) => string;
        uploading: string;
        failed: string;
        retry: string;
        /** Beside an `UploadSlots` slot the form can be sent without. */
        optional: string;
    };
}
/** Bytes in 1024 steps, one decimal under ten. Shared by every locale: only
 *  the number format and the unit letters differ, and those are passed in. */
export declare function bytes(value: number, format: (n: number) => string, units?: string[]): string;
/** English. What a consumer gets when it wraps nothing. */
export declare const defaultStrings: UIStrings;
/** What a consumer passes: any subset, merged over the English above. */
export type PartialUIStrings = {
    [K in keyof UIStrings]?: Partial<UIStrings[K]>;
};
export interface UIStringsProviderProps {
    /** Any subset of the dictionary. Everything left out stays English. */
    strings?: PartialUIStrings;
    children: React.ReactNode;
}
/**
 * Wrap the app once, next to `LinkProvider`:
 *
 * ```tsx
 * <UIStringsProvider strings={{ auth: { signIn: "Iniciar sessão" } }}>
 * ```
 *
 * Nesting works — an inner provider merges over the outer one, not over the
 * English — so one screen can differ from the rest of the app.
 */
export declare function UIStringsProvider({ strings, children }: UIStringsProviderProps): React.JSX.Element;
/** The dictionary in force here. Always complete: every key has an English fallback. */
export declare function useStrings(): UIStrings;
