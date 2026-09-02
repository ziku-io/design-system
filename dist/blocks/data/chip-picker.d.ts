import * as React from "react";
export interface ChipOption {
    value: string;
    label: string;
}
export interface ChipPickerProps {
    options: ChipOption[];
    value: string[];
    onChange: (value: string[]) => void;
    /** What the trigger says when nothing is picked, and its accessible name. */
    placeholder: string;
    /** Chips before the rest collapse into a "+N". */
    max?: number;
    disabled?: boolean;
    className?: string;
}
/**
 * Several values from a small fixed set, with the picked ones visible.
 *
 * `Select` takes one and closes on pick, so a tag field or a status filter had
 * to be built over `Popover` again in every app — and the one that did styled
 * its trigger with an app-level class, which is a consumer reaching into this
 * library's territory. That class is now `Input variant="ghost"` and this is
 * the picker over it.
 *
 * ponytail: no search box inside. It is for a fixed set short enough to read,
 * and a set long enough to need searching wants `DataTable`'s facet panel.
 */
export declare function ChipPicker({ options, value, onChange, placeholder, max, disabled, className, }: ChipPickerProps): React.JSX.Element;
