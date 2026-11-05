import * as React from "react"
import { CheckIcon, PencilSimpleIcon, SpinnerIcon, XIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export interface EditableTextProps {
  value: string
  /** Called with the new text, trimmed, only when it changed. Return a promise
   *  and the field waits for it; reject and the field stays open with the
   *  reader's text in it. */
  onSave: (value: string) => void | Promise<void>
  /** Shown, muted, in place of an empty value. */
  placeholder?: string
  /** Rejects a blank value instead of saving it. */
  required?: boolean
  /** Which keyboard a phone opens: `decimal` for a quota, `numeric` for a
   *  tax number. The value stays a string either way. */
  inputMode?: "text" | "numeric" | "decimal"
  disabled?: boolean
  /** The reading text's classes, e.g. `text-2xl font-semibold` for a title
   *  that renames in place. The field always uses the control size. */
  className?: string
  /** Names the field for a screen reader: "Project name". */
  "aria-label"?: string
}

/**
 * Text that edits in place: the value with a pencil beside it, and on click a
 * field with a check and a cross. Enter saves, Escape cancels.
 *
 * Nothing saves on blur. A blur-to-save field commits half a thought when the
 * reader clicks away to check something, and races the check button, whose
 * click arrives after the blur.
 */
export function EditableText({
  value,
  onSave,
  placeholder,
  required,
  inputMode,
  disabled,
  className,
  "aria-label": ariaLabel,
}: EditableTextProps) {
  const t = useStrings().editable
  const common = useStrings().common
  const [editing, setEditing] = React.useState(false)
  const [draft, setDraft] = React.useState(value)
  const [error, setError] = React.useState<string | null>(null)
  const [saving, setSaving] = React.useState(false)
  const pencil = React.useRef<HTMLButtonElement>(null)
  const errorId = React.useId()

  function open() {
    setDraft(value)
    setError(null)
    setEditing(true)
  }

  function close() {
    setEditing(false)
    setError(null)
    // Back to where the reader started, not to the top of the page.
    requestAnimationFrame(() => pencil.current?.focus())
  }

  async function save() {
    const next = draft.trim()
    if (required && next === "") return setError(t.required)
    if (next === value) return close()
    setSaving(true)
    setError(null)
    try {
      await onSave(next)
      close()
    } catch (cause) {
      // Said on screen rather than swallowed, and logged for whoever debugs it.
      console.error(cause)
      setError(t.saveFailed)
    } finally {
      setSaving(false)
    }
  }

  if (!editing) {
    return (
      <span
        data-slot="editable-text"
        className="group/editable inline-flex max-w-full items-center gap-1"
      >
        <span className={cn("min-w-0 truncate", !value && "text-muted-foreground", className)}>
          {value || placeholder}
        </span>
        <Button
          ref={pencil}
          type="button"
          variant="ghost"
          size="icon-xs"
          disabled={disabled}
          aria-label={t.edit(ariaLabel ?? value)}
          onClick={open}
          className="shrink-0 text-muted-foreground"
        >
          <PencilSimpleIcon className="size-3.5" />
        </Button>
      </span>
    )
  }

  return (
    <span data-slot="editable-text" data-editing className="inline-grid max-w-full gap-1">
      <span className="flex items-center gap-1">
        <Input
          size="sm"
          autoFocus
          inputMode={inputMode}
          value={draft}
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          disabled={saving}
          onFocus={(e) => e.currentTarget.select()}
          onChange={(e) => {
            setDraft(e.target.value)
            if (error) setError(null)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              void save()
            } else if (e.key === "Escape") {
              // Stops a dialog around this from closing on the same key.
              e.stopPropagation()
              close()
            }
          }}
          className="min-w-40"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={t.save}
          disabled={saving}
          onClick={() => void save()}
          className="shrink-0 text-success-fg hover:text-success-fg"
        >
          {saving ? <SpinnerIcon className="animate-spin" /> : <CheckIcon />}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={common.cancel}
          disabled={saving}
          onClick={close}
          className="shrink-0 text-muted-foreground"
        >
          <XIcon />
        </Button>
      </span>
      {error && (
        <span id={errorId} role="alert" className="text-xs text-danger-fg">
          {error}
        </span>
      )}
    </span>
  )
}
