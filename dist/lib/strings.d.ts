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
        email: string;
        emailPlaceholder: string;
        password: string;
        forgotPassword: string;
        signIn: string;
        /** Between the social buttons and the email fields. */
        or: string;
        /** A social sign-in button: `continueWith("Google")`. */
        continueWith: (provider: string) => string;
        noAccount: string;
        createOne: string;
        /** Register */
        registerTitle: string;
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
        /** Register, when the app asks for a phone number (`phone` prop). */
        phone: string;
        /** After a field's label when the field may be left empty. */
        optional: string;
        phoneRequired: string;
        invalidPhone: string;
        /** Under the consent checkbox when it is submitted unticked. */
        consentRequired: string;
    };
    shell: {
        signOut: string;
        /** The first thing a keyboard user reaches, jumping the sidebar nav. */
        skipToContent: string;
        /** The avatar button in the top bar that opens the account menu. */
        accountMenu: string;
    };
    preferences: {
        /** The top-bar button that opens the panel. */
        title: string;
        appearance: string;
        themes: {
            light: string;
            dark: string;
            system: string;
        };
        language: string;
        zoom: string;
        zoomIn: string;
        zoomOut: string;
        /** The zoom field's name: it holds the figure, the % sits beside it. */
        zoomPercent: string;
        /** After the figure in the zoom field. */
        percentSign: string;
        /** The icon that puts zoom back to 100%. */
        resetZoom: string;
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
        /** The Gantt layout: bars from start to end. */
        timeline: string;
        /** The month-grid layout: rows on the day they fall. */
        calendar: string;
        /** The zoom control's accessible name on the timeline. */
        timelineScale: string;
        scales: {
            week: string;
            month: string;
            quarter: string;
        };
        /** Rows a timeline or calendar left off: `undated(3)` reads "3 without a date". */
        undated: (count: number) => string;
        /** A calendar day's overflow: `moreItems(2)` reads "+2 more". */
        moreItems: (count: number) => string;
        previousMonth: string;
        nextMonth: string;
        previousYear: string;
        nextYear: string;
        /** The calendar's Month / Year switch. */
        calendarScale: string;
        calendarScales: {
            month: string;
            year: string;
        };
        /** Read after a draggable timeline bar's name, for keyboard users. */
        rescheduleHint: string;
        /** The same, for a calendar chip. */
        calendarRescheduleHint: string;
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
        /** Names an editable cell's field: `editCell("Quota", "Jay Oak")` reads
         *  "Quota for Jay Oak", and its pencil "Edit Quota for Jay Oak". */
        editCell: (column: string, row: string) => string;
        /** Under the last row when the page passes `onAddRow`. */
        addRow: string;
        /** The check on the new row. Cancel is `common.cancel`. */
        saveRow: string;
        /** Under the new row when `onAddRow` rejected. The row stays, with what
         *  the reader typed still in it. */
        addRowFailed: string;
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
        /** The toast region's landmark name, and each toast's close button.
         *  Sonner's own defaults are English and unreachable through children. */
        notifications: string;
        closeNotification: string;
        /** A file input with nothing picked yet. */
        chooseFile: string;
        /** A multiple file input once more than one is picked: "3 files". */
        filesChosen: (count: number) => string;
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
        /** A share out of 100, unsigned: `percent(62)` reads "62%". */
        percent: (value: number) => string;
        /** A calendar's title and a timeline's month band: "November 2026". */
        month: (date: Date) => string;
        /** A month card's title in the calendar's year view: "January". */
        monthName: (date: Date) => string;
        /** A calendar column heading: "Mon". */
        weekday: (date: Date) => string;
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
        /** A `required` picker left empty when its form was sent. The form's
         *  validation message, so an app showing `validationMessage` reads it. */
        required: string;
        /** Month and weekday names, the calendar's own aria-labels, and the first
         *  day of the week. A react-day-picker locale, not a string. */
        locale: DayPickerLocale;
    };
    /** `EditableText`: text with a pencil that turns into a field. */
    editable: {
        /** The pencil's label: `edit("Q3 report")` reads "Edit Q3 report". */
        edit: (value: string) => string;
        save: string;
        /** Under the field when `required` and the value is blank. */
        required: string;
        /** Under the field when `onSave` rejected. The field stays open with the
         *  reader's text in it, so nothing they typed is lost. */
        saveFailed: string;
    };
    copy: {
        /** The button's label and tooltip: `copy("IBAN")` reads "Copy IBAN". */
        copy: (label?: string) => string;
        /** Shown and announced for two seconds after the value reached the clipboard. */
        copied: string;
        /** The clipboard refused (an insecure page, a denied permission). Says how
         *  to get the value anyway, since the reader still needs it. */
        failed: string;
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
        /** What `image/*` reads as in the accepted types. An extension reads as
         *  itself in capitals (PDF, CSV), so only the wildcard needs a word. */
        images: string;
        tooLarge: (name: string, max: string) => string;
        wrongType: (name: string) => string;
        tooMany: (max: number) => string;
        remove: (name: string) => string;
        uploading: string;
        failed: string;
        retry: string;
        /** Beside an `UploadSlots` slot the form can be sent without. */
        optional: string;
        /** `UploadSlots`: the label over the picker beside the drop zone. */
        thisFileIs: string;
        /** The picker with nothing picked. */
        pickDocument: string;
        /** The checklist's heading. */
        documents: string;
        /** Over the checklist: `uploadedCount(2, 4)` reads "2 of 4". */
        uploadedCount: (done: number, total: number) => string;
        /** A document in the checklist with no file yet. */
        missing: string;
        /** In place of the drop zone once every document has a file. */
        allIn: string;
        /** The question behind the cross: `removeConfirm("a.pdf")` reads
         *  "Remove a.pdf? This cannot be undone." */
        removeConfirm: (name: string) => string;
        /** The button that answers it. */
        removeAction: string;
        /** The download button's name: `download("a.pdf")`. */
        download: (name: string) => string;
        /** The download button's name while `onDownload` is still running. */
        downloading: (name: string) => string;
        /** Under a file when `onDownload` rejected. */
        downloadFailed: string;
        /** Beside a saved file: `uploadedOn(date)` reads "Uploaded 3 Nov 2026". */
        uploadedOn: (date: Date) => string;
    };
    /** The public site: `SiteLayout`, `LegalPage`, `ArticlePage`, `PostList`,
     *  `PricingTable`, `ContactForm`. Only the chrome: headlines, features and
     *  posts are the app's copy and arrive as props. */
    site: {
        /** The first tab stop on every page, for keyboard readers. */
        skipToContent: string;
        /** The phone menu button's label and the drawer's title. */
        menu: string;
        /** `aria-label` on the header's and the footer's `<nav>`. */
        mainNav: string;
        footerNav: string;
        /** Footer small print: `copyright(2026, "Ziku")` reads "© 2026 Ziku". */
        copyright: (year: number, owner: string) => string;
        /** The legal page's table of contents. */
        contents: string;
        /** Under a legal page's title: "Last updated 6 Nov 2026". */
        lastUpdated: (date: Date) => string;
        /** A post's publication date, as written under its title. */
        published: (date: Date) => string;
        /** `readingTime(4)` reads "4 min read". */
        readingTime: (minutes: number) => string;
        /** `ArticlePage`'s link back to the index. */
        allPosts: string;
        /** `PostList` with nothing in it. */
        noPosts: string;
        /** `NewsletterForm`: the field's label (read to a screen reader), its
         *  placeholder, the button, and the line that replaces the form once sent. */
        newsletterEmail: string;
        newsletterPlaceholder: string;
        subscribe: string;
        subscribed: string;
        /** `PlanComparison`: the first column's heading, read to a screen reader. */
        feature: string;
        /** A tick or a dash in `PlanComparison`, read to a screen reader. */
        included: string;
        notIncluded: string;
        /** The badge on the one plan `PricingTable` marks `highlighted`. */
        recommended: string;
        /** `ContactForm`. */
        name: string;
        email: string;
        message: string;
        messagePlaceholder: string;
        send: string;
        sentTitle: string;
        sentDescription: string;
        nameRequired: string;
        invalidEmail: string;
        messageTooShort: string;
        /** `ContactForm` with `topics`: the group's legend, and the error when
         *  none is picked. */
        topic: string;
        topicRequired: string;
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
