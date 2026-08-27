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
        removeFilter: string;
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
        group: string;
        groupBy: string;
        noGrouping: string;
    };
    search: {
        placeholder: string;
        empty: string;
    };
    modal: {
        close: string;
    };
}
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
