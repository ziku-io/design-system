import * as React from "react";
export interface EditableTextProps {
    value: string;
    /** Called with the new text, trimmed, only when it changed. Return a promise
     *  and the field waits for it; reject and the field stays open with the
     *  reader's text in it. */
    onSave: (value: string) => void | Promise<void>;
    /** Shown, muted, in place of an empty value. */
    placeholder?: string;
    /** Rejects a blank value instead of saving it. */
    required?: boolean;
    /** Which keyboard a phone opens: `decimal` for a quota, `numeric` for a
     *  tax number. The value stays a string either way. */
    inputMode?: "text" | "numeric" | "decimal";
    disabled?: boolean;
    /** The reading text's classes, e.g. `text-2xl font-semibold` for a title
     *  that renames in place. The field always uses the control size. */
    className?: string;
    /** Names the field for a screen reader: "Project name". */
    "aria-label"?: string;
}
/**
 * Text that edits in place: the value with a pencil beside it, and on click a
 * field with a check and a cross. Enter saves, Escape cancels.
 *
 * Nothing saves on blur. A blur-to-save field commits half a thought when the
 * reader clicks away to check something, and races the check button, whose
 * click arrives after the blur.
 */
export declare function EditableText({ value, onSave, placeholder, required, inputMode, disabled, className, "aria-label": ariaLabel, }: EditableTextProps): React.JSX.Element;
