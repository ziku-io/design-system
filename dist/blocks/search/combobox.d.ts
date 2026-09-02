import * as React from "react";
export interface ComboboxItem {
    id: string;
    label: string;
    /** A second line: an email, a reference, a department. */
    hint?: string;
}
export interface ComboboxProps {
    items: ComboboxItem[];
    onSelect: (item: ComboboxItem) => void;
    /** The field's accessible name. Required: a search box with no name is read
     *  out as "combobox" and nothing else. */
    label: string;
    placeholder?: string;
    /** Controlled query, for a caller that fetches its own results. */
    query?: string;
    onQueryChange?: (query: string) => void;
    /** Shown in place of the list when `items` is empty and something was typed. */
    empty?: React.ReactNode;
    /** Keeps the list open and the empty message away while a fetch is in flight. */
    loading?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    className?: string;
}
/**
 * A search box with its results underneath, inside a form.
 *
 * `CommandMenu` is the ⌘K dialog; this is the field. Every app that needed one
 * hand-rolled it and re-did the APG work badly — the bug is always the same, and
 * it is not cosmetic: Enter took `items[0]` however many matched, so typing
 * "Sil" for Ana Silva assigned the work to António Silvestre. Here Enter takes
 * what is highlighted, and the highlight is clamped when the list shrinks under
 * it rather than pointing past the end.
 *
 * ponytail: the list is absolutely positioned, not portalled. It is a field in
 * a form, so it scrolls with the form; a portal would need collision detection
 * and would take focus management away from the input, which is the one thing a
 * combobox cannot delegate.
 */
export declare function Combobox({ items, onSelect, label, placeholder, query, onQueryChange, empty, loading, autoFocus, disabled, className, }: ComboboxProps): React.JSX.Element;
