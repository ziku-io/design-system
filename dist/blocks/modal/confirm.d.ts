import * as React from "react";
export interface ConfirmOptions {
    title: React.ReactNode;
    /** A line under the title, for the consequence the title cannot hold. */
    description?: React.ReactNode;
    /** Overrides the dictionary's "Confirm" with the verb, which is what a
     *  confirmation should read as: "Delete", "Archive", "Send". */
    confirmLabel?: React.ReactNode;
    cancelLabel?: React.ReactNode;
    /** Draws the confirming button destructive. Nothing else: it does not add a
     *  typed word to match, or a delay, or a second dialog. */
    danger?: boolean;
}
export interface PromptOptions extends ConfirmOptions {
    /** The field's own label. Falls back to the title. */
    label?: React.ReactNode;
    defaultValue?: string;
    placeholder?: string;
}
export interface Confirmations {
    /** Resolves false on Cancel, Escape and the backdrop. */
    confirm: (options: ConfirmOptions) => Promise<boolean>;
    /** Resolves null when dismissed, the typed string otherwise. */
    prompt: (options: PromptOptions) => Promise<string | null>;
}
/**
 * `Modal` renders a dialog; this answers a question.
 *
 * ```tsx
 * const { confirm, prompt } = useConfirm()
 * if (await confirm({ title: t.deleteClient, danger: true })) remove()
 * ```
 *
 * Wrap the app once, inside `UIStringsProvider`. Calls queue: a second one
 * while the first is still open waits its turn rather than replacing it, so
 * neither caller is left awaiting a promise that never settles.
 */
export declare function ConfirmProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
/** The two questions, from the nearest `ConfirmProvider`. */
export declare function useConfirm(): Confirmations;
