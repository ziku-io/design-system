import { DataTableColumn } from './types';
import * as React from "react";
/** What `onAddRow` receives: one string per fillable column, by `key`. A facet
 *  with an `order` gives the stored key, the same value a chip carries. */
export type NewRowValues = Record<string, string>;
/** The part of a column the new row reads. A `DataTableColumn` is one, so a
 *  plain `Table` can describe its columns the same way without the rest. */
export type AddRowColumn = Pick<DataTableColumn<unknown>, "key" | "header" | "order" | "facetLabel" | "addable">;
/**
 * The row `DataTable` opens under its last row: a field per column, and a
 * check and a cross in the last cell. Enter saves, Escape cancels, and nothing
 * saves on blur, for the same reason as `EditableText`.
 */
export declare function NewRow({ columns, onSave, onClose, }: {
    /** The visible columns, in order, one per cell. */
    columns: AddRowColumn[];
    onSave: (values: NewRowValues) => void | Promise<void>;
    onClose: () => void;
}): React.JSX.Element;
/**
 * "Add row" for a plain `Table`: the button, and on click the same row of
 * fields `DataTable` opens. Goes last in `TableBody`. `columns` lists every
 * column of the table in order, header-less ones included, so the cells line
 * up; `onAdd` gets one trimmed string per fillable column, by `key`.
 */
export declare function TableAddRow({ columns, onAdd, }: {
    columns: AddRowColumn[];
    onAdd: (values: NewRowValues) => void | Promise<void>;
}): React.JSX.Element;
