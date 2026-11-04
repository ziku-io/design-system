import * as React from "react"
import { CheckIcon, PlusIcon, SpinnerIcon, XIcon } from "@phosphor-icons/react"

import { TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useStrings } from "@/lib/strings"
import type { DataTableColumn } from "./types"

/** What `onAddRow` receives: one string per fillable column, by `key`. A facet
 *  with an `order` gives the stored key, the same value a chip carries. */
export type NewRowValues = Record<string, string>

/** The part of a column the new row reads. A `DataTableColumn` is one, so a
 *  plain `Table` can describe its columns the same way without the rest. */
export type AddRowColumn = Pick<
  DataTableColumn<unknown>,
  "key" | "header" | "order" | "facetLabel" | "addable"
>

// No header means furniture (a checkbox, a row menu): nothing to type there.
const fillable = (col: AddRowColumn) => Boolean(col.header) && col.addable !== false

/**
 * The row `DataTable` opens under its last row: a field per column, and a
 * check and a cross in the last cell. Enter saves, Escape cancels, and nothing
 * saves on blur, for the same reason as `EditableText`.
 */
export function NewRow({
  columns,
  onSave,
  onClose,
}: {
  /** The visible columns, in order, one per cell. */
  columns: AddRowColumn[]
  onSave: (values: NewRowValues) => void | Promise<void>
  onClose: () => void
}) {
  const strings = useStrings()
  const t = strings.dataTable
  const [values, setValues] = React.useState<NewRowValues>(() =>
    Object.fromEntries(columns.filter(fillable).map((c) => [c.key, ""])),
  )
  const [saving, setSaving] = React.useState(false)
  const [failed, setFailed] = React.useState(false)
  const errorId = React.useId()

  async function save() {
    setSaving(true)
    setFailed(false)
    try {
      // Trimmed, like EditableText: a stray space is never what anyone meant.
      await onSave(Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()])))
      onClose()
    } catch (cause) {
      console.error(cause)
      setFailed(true)
    } finally {
      setSaving(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTableRowElement>) {
    // React bubbles through portals, so an open Select's list sends its keys
    // here too: Escape there closes the list, not the row.
    if (!e.currentTarget.contains(e.target as Node)) return
    // Enter saves from a text field only. On the Select it opens the list, and
    // on the check or the cross the button's own click already runs.
    if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
      e.preventDefault()
      void save()
    } else if (e.key === "Escape") {
      e.stopPropagation()
      onClose()
    }
  }

  const set = (key: string) => (v: string) => {
    setValues((old) => ({ ...old, [key]: v }))
    if (failed) setFailed(false)
  }
  const first = columns.findIndex(fillable)

  return (
    <>
      <TableRow
        data-slot="new-row"
        className="bg-accent/40 hover:bg-accent/40"
        onKeyDown={onKeyDown}
      >
        {columns.map((col, i) => {
          const last = i === columns.length - 1
          const field = !fillable(col) ? null : col.order ? (
            <Select
              value={values[col.key] || undefined}
              onValueChange={set(col.key)}
              disabled={saving}
            >
              <SelectTrigger
                size="sm"
                aria-label={col.header}
                autoFocus={i === first}
                className="w-full min-w-28"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {col.order.map((key) => (
                  <SelectItem key={key} value={key}>
                    {col.facetLabel ? col.facetLabel(key) : key}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              size="sm"
              aria-label={col.header}
              aria-describedby={failed ? errorId : undefined}
              autoFocus={i === first}
              disabled={saving}
              value={values[col.key]}
              onChange={(e) => set(col.key)(e.target.value)}
              className="min-w-28"
            />
          )
          return (
            // The column's own classes would carry its alignment and
            // whitespace into a cell that now holds a field; only the padding
            // is kept, tightened so the h-8 field fits the row.
            <TableCell key={col.key} className="py-1.5">
              <div className="flex items-center gap-1">
                {field && <div className="min-w-0 flex-1">{field}</div>}
                {last && (
                  <div className="ml-auto flex shrink-0 items-center gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={t.saveRow}
                      disabled={saving}
                      onClick={() => void save()}
                      className="text-success-fg hover:text-success-fg"
                    >
                      {saving ? <SpinnerIcon className="animate-spin" /> : <CheckIcon />}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={strings.common.cancel}
                      disabled={saving}
                      onClick={onClose}
                      className="text-muted-foreground"
                    >
                      <XIcon />
                    </Button>
                  </div>
                )}
              </div>
            </TableCell>
          )
        })}
      </TableRow>
      {failed && (
        <TableRow className="hover:bg-transparent">
          <TableCell
            id={errorId}
            role="alert"
            colSpan={columns.length}
            className="py-1.5 text-xs text-danger-fg"
          >
            {t.addRowFailed}
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

/**
 * "Add row" for a plain `Table`: the button, and on click the same row of
 * fields `DataTable` opens. Goes last in `TableBody`. `columns` lists every
 * column of the table in order, header-less ones included, so the cells line
 * up; `onAdd` gets one trimmed string per fillable column, by `key`.
 */
export function TableAddRow({
  columns,
  onAdd,
}: {
  columns: AddRowColumn[]
  onAdd: (values: NewRowValues) => void | Promise<void>
}) {
  const t = useStrings().dataTable
  const [adding, setAdding] = React.useState(false)
  const button = React.useRef<HTMLButtonElement>(null)
  if (adding)
    return (
      <NewRow
        columns={columns}
        onSave={onAdd}
        onClose={() => {
          setAdding(false)
          // Back to the button that opened it, not to the top of the page.
          requestAnimationFrame(() => button.current?.focus())
        }}
      />
    )
  return (
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={columns.length} className="py-1">
        <Button
          ref={button}
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setAdding(true)}
          className="text-muted-foreground"
        >
          <PlusIcon />
          {t.addRow}
        </Button>
      </TableCell>
    </TableRow>
  )
}
