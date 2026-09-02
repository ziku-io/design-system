import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface CommandMenuItem {
    /** Stable id, also used as the cmdk value when `label` is ambiguous */
    id: string;
    label: string;
    icon?: Icon;
    /**
     * The second line, for what tells two identical labels apart.
     *
     * A palette searching more than one kind of thing will return rows whose
     * labels collide: three tasks all called "Redigir NDA" are three different
     * tasks, and the label alone cannot say which. Put the thing that
     * distinguishes them here, usually what the row belongs to.
     */
    description?: string;
    /**
     * Right-aligned identifier, set in mono: a reference, a number, an id.
     *
     * Separate from `shortcut` because it is not one. `shortcut` is letter-spaced
     * for "⌘P", which is exactly wrong for a code read one character at a time.
     */
    meta?: string;
    /** Rendered right-aligned, e.g. "⌘P" */
    shortcut?: string;
    /** Extra words to match on that aren't shown */
    keywords?: string[];
    onSelect?: () => void;
}
export interface CommandMenuGroup {
    heading?: string;
    items: CommandMenuItem[];
}
export interface CommandMenuProps {
    groups: CommandMenuGroup[];
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    placeholder?: string;
    emptyMessage?: string;
    /** Fires as the query changes — use it to load results from the server */
    onQueryChange?: (query: string) => void;
    /** Disable the built-in ⌘K / Ctrl+K binding */
    disableShortcut?: boolean;
}
/**
 * Command palette (cmdk). Opens on ⌘K / Ctrl+K, or control it with `open`.
 * This is the standard search surface for every app — don't hand-roll another.
 */
export declare function CommandMenu({ groups, open, onOpenChange, placeholder, emptyMessage, onQueryChange, disableShortcut, }: CommandMenuProps): React.JSX.Element;
export interface SearchTriggerProps extends React.ComponentProps<"button"> {
    placeholder?: string;
    /** Hint shown on the right. Omitted takes the dictionary's; null hides it. */
    shortcut?: string | null;
}
/** The search field in the app header. Looks like an input, behaves like a button. */
export declare function SearchTrigger({ placeholder, shortcut, className, ...props }: SearchTriggerProps): React.JSX.Element;
