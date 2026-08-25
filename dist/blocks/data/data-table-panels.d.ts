import { Icon } from '@phosphor-icons/react';
import { SortingState } from '@tanstack/react-table';
import { isBlankFilter, DataTableColumn, FilterValue } from './types';
import * as React from "react";
export declare function ViewIcon({ name, className }: {
    name: string;
    className?: string;
}): React.JSX.Element;
/** A popover whose body gets a `close` it can call after picking something. */
export declare function PopoverPanel({ trigger, className, align, width, children, }: {
    trigger: React.ReactNode;
    className?: string;
    align?: "start" | "center" | "end";
    width?: string;
    children: React.ReactNode | ((close: () => void) => React.ReactNode);
}): React.JSX.Element;
/** A toolbar icon button that opens a panel, dotted while what it controls is on. */
export declare function Control({ icon: Ic, label, active, width, children, }: {
    icon: Icon;
    label: string;
    active?: boolean;
    width?: string;
    children: React.ReactNode | ((close: () => void) => React.ReactNode);
}): React.JSX.Element;
/** The searchable list of columns behind "+ Filter" and "Group by". */
export declare function ColumnPicker<T>({ columns, onPick, empty, }: {
    columns: DataTableColumn<T>[];
    onPick: (key: string) => void;
    /** An extra "none" row at the top, e.g. "No grouping". */
    empty?: {
        label: string;
        onPick: () => void;
    };
}): React.JSX.Element;
/** A chip's popover: checkboxes on a facet column, a text box on any other. */
export declare function FilterPanel<T>({ col, options, value, onChange, onRemove, }: {
    col: DataTableColumn<T>;
    options: {
        value: string;
        label: string;
    }[];
    value: FilterValue;
    onChange: (value: FilterValue) => void;
    onRemove: () => void;
}): React.JSX.Element;
/** The stack of sorts, applied in order — one column is rarely the whole answer. */
export declare function SortPanel<T>({ sorting, sortable, byKey, onChange, }: {
    sorting: SortingState;
    sortable: DataTableColumn<T>[];
    byKey: Record<string, DataTableColumn<T>>;
    onChange: (sorting: SortingState) => void;
}): React.JSX.Element;
/** Which named columns are on show. */
export declare function ColumnToggles<T>({ columns, visibility, onToggle, }: {
    columns: DataTableColumn<T>[];
    visibility: Record<string, boolean>;
    onToggle: (key: string, visible: boolean) => void;
}): React.JSX.Element;
/** Naming a view, in the popover its trigger opens. */
export declare function NameForm({ trigger, className, title, align, defaultValue, confirmLabel, onSubmit, }: {
    trigger: React.ReactNode;
    className?: string;
    title?: string;
    align?: "start" | "center" | "end";
    defaultValue: string;
    confirmLabel: string;
    onSubmit: (name: string) => void;
}): React.JSX.Element;
export interface SettingsRow {
    key: string;
    icon: Icon;
    label: string;
    value?: string;
    panel: React.ReactNode;
}
/** The view's own settings: one panel that drills into sub-panels rather than
 *  a menu of popovers opening popovers. */
export declare function ViewSettings({ name, icon, onIcon, onRename, rows, footer, onClose, }: {
    name: string;
    icon: string;
    onIcon: (icon: string) => void;
    onRename: (name: string) => void;
    rows: SettingsRow[];
    footer?: React.ReactNode;
    onClose: () => void;
}): React.JSX.Element;
export { isBlankFilter };
