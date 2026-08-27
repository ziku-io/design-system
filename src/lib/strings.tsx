import * as React from "react"

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
    removeFilter: string
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
    group: string
    groupBy: string
    noGrouping: string
  }
  search: {
    placeholder: string
    empty: string
  }
  modal: {
    close: string
  }
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
    hidden: (count) => `${count} hidden`,
    filters: "Filters",
    filter: "Filter",
    removeFilter: "Remove filter",
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
    group: "Group",
    groupBy: "Group by",
    noGrouping: "No grouping",
  },
  search: {
    placeholder: "Search…",
    empty: "No results found.",
  },
  modal: {
    close: "Close",
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
