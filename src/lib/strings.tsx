import * as React from "react"
import type { DayPickerLocale } from "react-day-picker"
import { enUS } from "react-day-picker/locale/en-US"

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
    close: string
    cancel: string
    create: string
    search: string
    searchPlaceholder: string
    noResults: string
    all: string
    none: string
    /** What `ErrorState` says when the caller gives it no title. */
    loadFailed: string
    retry: string
    /** What `ErrorBoundary` says over a render that threw. Not `loadFailed`:
     *  nothing was being fetched, the screen itself broke. */
    crashed: string
    /** The yes of `confirm()`. A caller with a verb passes `confirmLabel`. */
    confirm: string
  }
  auth: {
    /** Login */
    loginTitle: string
    loginDescription: string
    email: string
    emailPlaceholder: string
    password: string
    forgotPassword: string
    signIn: string
    orContinueWith: string
    noAccount: string
    createOne: string
    /** Register */
    registerTitle: string
    registerDescription: string
    name: string
    namePlaceholder: string
    passwordHint: string
    confirmPassword: string
    createAccount: string
    haveAccount: string
    /** Forgot password */
    resetTitle: string
    resetDescription: string
    sendResetLink: string
    backToSignIn: string
    sentTitle: string
    /** `email` is what was typed, or `thatEmail` when the field was empty. */
    sentDescription: (email: string) => string
    thatEmail: string
    /** Validation. These reach the user through `FormMessage`. */
    invalidEmail: string
    passwordRequired: string
    nameTooShort: string
    passwordTooShort: string
    passwordsDoNotMatch: string
  }
  shell: {
    signOut: string
    /** The first thing a keyboard user reaches, jumping the sidebar nav. */
    skipToContent: string
  }
  preferences: {
    zoom: string
    /** An item in the zoom menu: `zoomLevel(125)` reads "125%". */
    zoomLevel: (percent: number) => string
  }
  dataTable: {
    /** The view every table starts on. */
    allView: string
    newView: string
    createView: string
    saveView: string
    deleteView: string
    viewSettings: string
    viewName: string
    changeIcon: string
    back: string
    layout: string
    table: string
    board: string
    visibleColumns: string
    hidden: (count: number) => string
    filters: string
    filter: string
    /** The button that adds a chip: reads as "+ Filter". */
    addFilter: string
    removeFilter: string
    /** The X on a chip: `removeFilterFor("Stage")` reads "Remove Stage filter". */
    removeFilterFor: (column: string) => string
    /** Puts the view back to its saved state. */
    clearFilters: string
    /** Empties a facet's ticked list, inside its panel. */
    clearSelection: string
    /** Joins a column name to its condition: "Status is", "Name contains". */
    is: string
    contains: string
    findColumn: string
    typeAValue: string
    sorting: string
    sort: string
    ascending: string
    descending: string
    addSort: string
    removeSort: string
    removeSorting: string
    /** The bar's sorting chip once more than one column is ordering the list. */
    sortCount: (count: number) => string
    group: string
    groupBy: string
    /** The chip on the bar: `groupedBy("stage")` reads "Grouped by stage". */
    groupedBy: (column: string) => string
    /** The card menu on a board, for a pointer that cannot drag. */
    moveCard: string
    /** The export action, offered only when the page passes `csv`. */
    exportCsv: string
    /** The tickbox on the save form, shown only when views have a server. */
    shareView: string
    /** Next to a shared view somebody else owns, in the picker. */
    sharedBy: (owner: string) => string
    noGrouping: string
    /** Under the last row of a `paged` table while the next page is in flight. */
    loadingMore: string
    /** Instead of the `empty` slot when conditions are on and nothing matched:
     *  "there is no data" and "your filters are too narrow" are not the same
     *  state, and only the second one has a way out. */
    noMatches: string
    /** That way out, next to `noMatches`. */
    clearAllFilters: string
    /** Under the view name field when the name was blank or only spaces. */
    viewNameRequired: string
    /** The paging bar under a table that has a `pageSize`. */
    rowCount: (count: number) => string
    pageOf: (page: number, total: number) => string
    previousPage: string
    nextPage: string
  }
  search: {
    placeholder: string
    empty: string
    /** The hint in `SearchTrigger`'s kbd. The key is the platform's, so an app
     *  on Windows overrides it with "Ctrl K". */
    shortcut: string
  }
  modal: {
    close: string
  }
  /** The few words the shadcn primitives in `components/ui/` render on their
   *  own, nearly all of them for a screen reader. Everything else a primitive
   *  shows arrives as children from the caller. */
  ui: {
    close: string
    breadcrumb: string
    /** The collapsed middle of a breadcrumb trail. */
    more: string
    pagination: string
    previous: string
    next: string
    goToPreviousPage: string
    goToNextPage: string
    morePages: string
    toggleSidebar: string
    /** The mobile sidebar is a sheet, and a sheet needs a title to be announced. */
    sidebarTitle: string
    sidebarDescription: string
    commandTitle: string
    commandDescription: string
  }
  /** How values are written. One place, so a chart tooltip, a tile and a file
   *  size all agree on "1.234,5" or "1,234.5". */
  format: {
    number: (value: number) => string
    /** A calendar day: a picker's trigger, an axis tick. */
    date: (date: Date) => string
    /** A moment: when something happened. */
    dateTime: (date: Date) => string
    /** Bytes as a person reads them: `fileSize(1536)` reads "1.5 KB". */
    fileSize: (bytes: number) => string
  }
  dashboard: {
    /** `StatTile`'s `change`: `change(12.5)` reads "+12.5%". */
    change: (percent: number) => string
    /** An `ActivityList` with nothing in it. */
    noActivity: string
  }
  datePicker: {
    placeholder: string
    rangePlaceholder: string
    /** Joins the two ends of a range on the trigger: "4 Nov – 10 Nov". */
    rangeSeparator: string
    clear: string
    today: string
    last7Days: string
    last30Days: string
    last90Days: string
    thisMonth: string
    thisYear: string
    /** Month and weekday names, the calendar's own aria-labels, and the first
     *  day of the week. A react-day-picker locale, not a string. */
    locale: DayPickerLocale
  }
  upload: {
    /** The drop zone's line: "Drop files here or" ahead of `browse`. */
    dropHere: string
    /** `dropHere` for a zone that takes one file. */
    dropFile: string
    browse: string
    /** Under the drop zone, built from what the caller allows. `maxFiles` is
     *  left out when it is 1: `dropFile` already says so. */
    limits: (limits: { accept?: string; maxSize?: string; maxFiles?: number }) => string
    tooLarge: (name: string, max: string) => string
    wrongType: (name: string) => string
    tooMany: (max: number) => string
    remove: (name: string) => string
    uploading: string
    failed: string
    retry: string
    /** Beside an `UploadSlots` slot the form can be sent without. */
    optional: string
  }
}

/**
 * A count as the reader's own locale writes it: 12,000 rather than 12000.
 *
 * The runtime's locale, because the library has none of its own — the same
 * reason there are no plural rules here. An app whose language groups
 * differently overrides the string.
 */
const numbers = new Intl.NumberFormat()
const num = (value: number) => numbers.format(value)
// `signDisplay: "exceptZero"`: a change reads "+12%" and "−3%", and no change reads "0%".
const percents = new Intl.NumberFormat(undefined, {
  style: "percent",
  maximumFractionDigits: 1,
  signDisplay: "exceptZero",
})
const days = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" })
const moments = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" })

/** Bytes in 1024 steps, one decimal under ten. Shared by every locale: only
 *  the number format and the unit letters differ, and those are passed in. */
export function bytes(
  value: number,
  format: (n: number) => string,
  units = ["B", "KB", "MB", "GB"],
) {
  let n = value
  let unit = 0
  while (n >= 1024 && unit < units.length - 1) {
    n /= 1024
    unit++
  }
  const rounded = unit === 0 || n >= 10 ? Math.round(n) : Math.round(n * 10) / 10
  return `${format(rounded)}\u00A0${units[unit]}`
}

/** English. What a consumer gets when it wraps nothing. */
export const defaultStrings: UIStrings = {
  common: {
    close: "Close",
    cancel: "Cancel",
    create: "Create",
    search: "Search",
    searchPlaceholder: "Search…",
    noResults: "No results.",
    all: "All",
    none: "None",
    loadFailed: "This did not load.",
    retry: "Try again",
    crashed: "Something went wrong on this screen.",
    confirm: "Confirm",
  },
  auth: {
    loginTitle: "Welcome back",
    loginDescription: "Sign in to your account",
    email: "Email",
    emailPlaceholder: "you@company.com",
    password: "Password",
    forgotPassword: "Forgot password?",
    signIn: "Sign in",
    orContinueWith: "or continue with",
    noAccount: "No account?",
    createOne: "Create one",
    registerTitle: "Create an account",
    registerDescription: "Get started in under a minute",
    name: "Name",
    namePlaceholder: "Ada Lovelace",
    passwordHint: "At least 8 characters",
    confirmPassword: "Confirm password",
    createAccount: "Create account",
    haveAccount: "Already have an account?",
    resetTitle: "Reset your password",
    resetDescription: "Enter your email and we'll send you a link",
    sendResetLink: "Send reset link",
    backToSignIn: "Back to sign in",
    sentTitle: "Check your inbox",
    sentDescription: (email) => `If an account exists for ${email}, we sent a reset link.`,
    thatEmail: "that email",
    invalidEmail: "Enter a valid email",
    passwordRequired: "Password is required",
    nameTooShort: "Enter your name",
    passwordTooShort: "At least 8 characters",
    passwordsDoNotMatch: "Passwords do not match",
  },
  shell: {
    signOut: "Sign out",
    skipToContent: "Skip to content",
  },
  preferences: {
    zoom: "Zoom",
    zoomLevel: (percent) => `${num(percent)}%`,
  },
  dataTable: {
    allView: "All",
    newView: "New view",
    createView: "Create",
    saveView: "Save the current filters as a new view",
    deleteView: "Delete view",
    viewSettings: "View settings",
    viewName: "View name",
    changeIcon: "Change the icon",
    back: "Back",
    layout: "Layout",
    table: "Table",
    board: "Board",
    visibleColumns: "Visible columns",
    hidden: (count) => `${num(count)} hidden`,
    filters: "Filters",
    filter: "Filter",
    addFilter: "Filter",
    removeFilter: "Remove filter",
    removeFilterFor: (column) => `Remove ${column} filter`,
    clearFilters: "Clear",
    clearSelection: "Clear selection",
    is: "is",
    contains: "contains",
    findColumn: "Find a column…",
    typeAValue: "Type a value…",
    sorting: "Sorting",
    sort: "Sort",
    ascending: "Ascending",
    descending: "Descending",
    addSort: "Add sort",
    removeSort: "Remove",
    removeSorting: "Remove sorting",
    sortCount: (count) => `${num(count)} sorts`,
    group: "Group",
    groupBy: "Group by",
    groupedBy: (column) => `Grouped by ${column}`,
    moveCard: "Move to",
    exportCsv: "Export CSV",
    shareView: "Share with everyone",
    sharedBy: (owner) => `Shared by ${owner}`,
    noGrouping: "No grouping",
    loadingMore: "Loading more…",
    noMatches: "Nothing matches these conditions.",
    clearAllFilters: "Clear filters",
    viewNameRequired: "Give the view a name.",
    rowCount: (count) => (count === 1 ? "1 row" : `${num(count)} rows`),
    pageOf: (page, total) => `Page ${num(page)} of ${num(total)}`,
    previousPage: "Previous",
    nextPage: "Next",
  },
  search: {
    placeholder: "Search…",
    empty: "No results found.",
    // A non-breaking space: the pair is one key, and a narrow header was
    // wrapping the K onto its own line under the command symbol.
    shortcut: "⌘\u00A0K",
  },
  modal: {
    close: "Close",
  },
  ui: {
    close: "Close",
    breadcrumb: "Breadcrumb",
    more: "More",
    pagination: "Pagination",
    previous: "Previous",
    next: "Next",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
    morePages: "More pages",
    toggleSidebar: "Toggle sidebar",
    sidebarTitle: "Sidebar",
    sidebarDescription: "Displays the mobile sidebar.",
    commandTitle: "Command palette",
    commandDescription: "Search for a command to run…",
  },
  format: {
    number: num,
    date: (date) => days.format(date),
    dateTime: (date) => moments.format(date),
    fileSize: (value) => bytes(value, num),
  },
  dashboard: {
    change: (percent) => percents.format(percent / 100),
    noActivity: "Nothing has happened yet.",
  },
  datePicker: {
    placeholder: "Pick a date",
    rangePlaceholder: "Pick a period",
    rangeSeparator: " – ",
    clear: "Clear",
    today: "Today",
    last7Days: "Last 7 days",
    last30Days: "Last 30 days",
    last90Days: "Last 90 days",
    thisMonth: "This month",
    thisYear: "This year",
    locale: enUS,
  },
  upload: {
    dropHere: "Drop files here or",
    dropFile: "Drop a file here or",
    browse: "browse",
    limits: ({ accept, maxSize, maxFiles }) =>
      [
        accept,
        maxSize && `up to ${maxSize} each`,
        maxFiles && maxFiles > 1 && `${num(maxFiles)} files at most`,
      ]
        .filter(Boolean)
        .join(" · "),
    tooLarge: (name, max) => `${name} is larger than ${max}.`,
    wrongType: (name) => `${name} is not a type this accepts.`,
    tooMany: (max) => (max === 1 ? "Only one file." : `${num(max)} files at most.`),
    remove: (name) => `Remove ${name}`,
    uploading: "Uploading…",
    failed: "Upload failed",
    retry: "Retry",
    optional: "Optional",
  },
}

/** What a consumer passes: any subset, merged over the English above. */
export type PartialUIStrings = {
  [K in keyof UIStrings]?: Partial<UIStrings[K]>
}

// A group the consumer did not mention keeps its English wholesale; one it did
// keeps the English for the keys it left out. Never a bare spread of `over`,
// which would drop the rest of the group and render `undefined`.
// Generic so `base[key]` and `over[key]` narrow to the same group.
function mergeGroup<K extends keyof UIStrings>(
  out: UIStrings,
  base: UIStrings,
  over: PartialUIStrings,
  key: K,
): void {
  out[key] = { ...base[key], ...over[key] }
}

function merge(base: UIStrings, over: PartialUIStrings | undefined): UIStrings {
  if (!over) return base
  const out = { ...base }
  for (const key of Object.keys(over) as (keyof UIStrings)[]) {
    mergeGroup(out, base, over, key)
  }
  return out
}

const StringsContext = React.createContext<UIStrings>(defaultStrings)

export interface UIStringsProviderProps {
  /** Any subset of the dictionary. Everything left out stays English. */
  strings?: PartialUIStrings
  children: React.ReactNode
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
export function UIStringsProvider({ strings, children }: UIStringsProviderProps) {
  const outer = React.useContext(StringsContext)
  const value = React.useMemo(() => merge(outer, strings), [outer, strings])
  return <StringsContext.Provider value={value}>{children}</StringsContext.Provider>
}

/** The dictionary in force here. Always complete: every key has an English fallback. */
export function useStrings(): UIStrings {
  return React.useContext(StringsContext)
}
