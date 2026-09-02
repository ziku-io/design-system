import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "@/blocks/modal/modal"
import { useStrings } from "@/lib/strings"

export interface ConfirmOptions {
  title: React.ReactNode
  /** A line under the title, for the consequence the title cannot hold. */
  description?: React.ReactNode
  /** Overrides the dictionary's "Confirm" with the verb, which is what a
   *  confirmation should read as: "Delete", "Archive", "Send". */
  confirmLabel?: React.ReactNode
  cancelLabel?: React.ReactNode
  /** Draws the confirming button destructive. Nothing else: it does not add a
   *  typed word to match, or a delay, or a second dialog. */
  danger?: boolean
}

export interface PromptOptions extends ConfirmOptions {
  /** The field's own label. Falls back to the title. */
  label?: React.ReactNode
  defaultValue?: string
  placeholder?: string
}

export interface Confirmations {
  /** Resolves false on Cancel, Escape and the backdrop. */
  confirm: (options: ConfirmOptions) => Promise<boolean>
  /** Resolves null when dismissed, the typed string otherwise. */
  prompt: (options: PromptOptions) => Promise<string | null>
}

type Pending =
  | { id: number; kind: "confirm"; options: ConfirmOptions; settle: (value: boolean) => void }
  | { id: number; kind: "prompt"; options: PromptOptions; settle: (value: string | null) => void }

let nextId = 0

/**
 * No provider answers no.
 *
 * Throwing here would take down a tree that only wanted to ask a question, and
 * "no" is the safe answer to every question worth confirming — a delete that
 * silently does not happen is recoverable, one that silently does is not.
 */
const ConfirmContext = React.createContext<Confirmations>({
  confirm: () => Promise.resolve(false),
  prompt: () => Promise.resolve(null),
})

/**
 * `Modal` renders a dialog; this answers a question.
 *
 * ```tsx
 * const { confirm, prompt } = useConfirm()
 * if (await confirm({ title: t.deleteClient, danger: true })) remove()
 * ```
 *
 * Wrap the app once, inside `UIStringsProvider`. Calls queue: a second one
 * while the first is still open waits its turn rather than replacing it, so
 * neither caller is left awaiting a promise that never settles.
 */
export function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = React.useState<Pending[]>([])
  const current = queue[0]

  const api = React.useMemo<Confirmations>(
    () => ({
      confirm: (options) =>
        new Promise<boolean>((resolve) => {
          setQueue((q) => [...q, { id: nextId++, kind: "confirm", options, settle: resolve }])
        }),
      prompt: (options) =>
        new Promise<string | null>((resolve) => {
          setQueue((q) => [...q, { id: nextId++, kind: "prompt", options, settle: resolve }])
        }),
    }),
    [],
  )

  const answer = React.useCallback((value: boolean | string | null) => {
    setQueue((q) => {
      const [head, ...rest] = q
      if (!head) return q
      // Cast: the two shapes differ only in what they resolve with, and each
      // call site below passes the one its own branch produced.
      ;(head.settle as (value: boolean | string | null) => void)(value)
      return rest
    })
  }, [])

  return (
    <ConfirmContext.Provider value={api}>
      {children}
      {current && (
        <ConfirmDialog
          // Per question, not per position: this remounts between two prompts
          // in a row — one open dialog, so nothing else clears the field — and
          // does not remount the open one when a third call queues behind it.
          key={current.id}
          pending={current}
          onAnswer={answer}
        />
      )}
    </ConfirmContext.Provider>
  )
}

function ConfirmDialog({
  pending,
  onAnswer,
}: {
  pending: Pending
  onAnswer: (value: boolean | string | null) => void
}) {
  const t = useStrings().common
  const { options } = pending
  const dismissed = pending.kind === "prompt" ? null : false
  const [value, setValue] = React.useState(
    pending.kind === "prompt" ? (pending.options.defaultValue ?? "") : "",
  )
  const id = React.useId()

  const accept = () => onAnswer(pending.kind === "prompt" ? value : true)

  return (
    <Modal
      open
      onOpenChange={(open) => {
        if (!open) onAnswer(dismissed)
      }}
      size="sm"
      title={options.title}
      description={options.description}
      footer={
        <>
          <Button variant="outline" onClick={() => onAnswer(dismissed)}>
            {options.cancelLabel ?? t.cancel}
          </Button>
          <Button variant={options.danger ? "danger" : "default"} onClick={accept}>
            {options.confirmLabel ?? t.confirm}
          </Button>
        </>
      }
    >
      {pending.kind === "prompt" && (
        <form
          className="grid gap-2"
          onSubmit={(event) => {
            event.preventDefault()
            accept()
          }}
        >
          <Label htmlFor={id}>{pending.options.label ?? options.title}</Label>
          <Input
            id={id}
            autoFocus
            value={value}
            placeholder={pending.options.placeholder}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
      )}
    </Modal>
  )
}

/** The two questions, from the nearest `ConfirmProvider`. */
export function useConfirm(): Confirmations {
  return React.useContext(ConfirmContext)
}
