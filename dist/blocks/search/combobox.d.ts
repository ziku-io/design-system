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
 * The list is a portalled `Popover` anchored to the input. It used to be
 * absolutely positioned inside the field, which any `overflow` ancestor (a
 * card, a modal body, a scrolling form) clipped, so the results sat below the
 * fold of their own container. The popover opens below, flips above when there
 * is no room, and caps its height to what is on screen. Focus never leaves the
 * input: the popover is told not to take it, and the options are reached
 * through `aria-activedescendant`, as before.
 */
export declare function Combobox({ items, onSelect, label, placeholder, query, onQueryChange, empty, loading, autoFocus, disabled, className, }: ComboboxProps): React.JSX.Element;
