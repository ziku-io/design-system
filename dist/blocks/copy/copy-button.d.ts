import * as React from "react";
/** How long the check (or the warning) stays before the copy icon returns. */
export declare const COPY_FEEDBACK_MS = 2000;
export interface CopyButtonProps {
    /** The exact text that lands on the clipboard. An empty value disables the
     *  button: there is nothing to copy, and a click that "succeeds" would lie. */
    value: string;
    /** Names what is copied, for the label and tooltip: "IBAN" → "Copy IBAN". */
    label?: string;
    /** `icon-sm` (32px) beside a control row, `icon-xs` (24px) inline in text. */
    size?: "icon-xs" | "icon-sm" | "icon";
    /** Called after the value reached the clipboard. */
    onCopy?: (value: string) => void;
    /** Called with the clipboard's refusal. The button already shows it. */
    onError?: (error: unknown) => void;
    className?: string;
}
/**
 * An icon button that copies a value. The copy icon turns into a check for two
 * seconds, and a screen reader hears "Copied"; if the clipboard refuses, a
 * warning says to select the text by hand rather than failing silently.
 */
export declare function CopyButton({ value, label, size, onCopy, onError, className, }: CopyButtonProps): React.JSX.Element;
export interface CopyFieldProps {
    /** The term: "IBAN", "Reference". Also names the button: "Copy IBAN". */
    label: string;
    value: string;
    /** Monospace for codes a reader compares character by character: IBAN, reference. */
    mono?: boolean;
    /** `false` renders the row without a button, so a list of details lines up
     *  when some of them are not worth copying. */
    copy?: boolean;
    className?: string;
}
/**
 * One term and its value with a copy button, for the details a reader has to
 * paste somewhere else: bank details, a reference, an API key. Render it inside
 * a `<dl>`; it is a `dt`/`dd` pair. The value wraps rather than truncates, so
 * nothing copied is hidden from the person checking it.
 */
export declare function CopyField({ label, value, mono, copy, className }: CopyFieldProps): React.JSX.Element;
