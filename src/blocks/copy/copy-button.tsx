import * as React from "react"
import { CheckIcon, CopyIcon, WarningIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

/** How long the check (or the warning) stays before the copy icon returns. */
export const COPY_FEEDBACK_MS = 2_000

type CopyState = "idle" | "copied" | "failed"

export interface CopyButtonProps {
  /** The exact text that lands on the clipboard. An empty value disables the
   *  button: there is nothing to copy, and a click that "succeeds" would lie. */
  value: string
  /** Names what is copied, for the label and tooltip: "IBAN" → "Copy IBAN". */
  label?: string
  /** `icon-sm` (32px) beside a control row, `icon-xs` (24px) inline in text. */
  size?: "icon-xs" | "icon-sm" | "icon"
  /** Called after the value reached the clipboard. */
  onCopy?: (value: string) => void
  /** Called with the clipboard's refusal. The button already shows it. */
  onError?: (error: unknown) => void
  className?: string
}

/**
 * An icon button that copies a value. The copy icon turns into a check for two
 * seconds, and a screen reader hears "Copied"; if the clipboard refuses, a
 * warning says to select the text by hand rather than failing silently.
 */
export function CopyButton({
  value,
  label,
  size = "icon-sm",
  onCopy,
  onError,
  className,
}: CopyButtonProps) {
  const t = useStrings().copy
  const [state, setState] = React.useState<CopyState>("idle")
  // Controlled throughout: the tooltip follows hover and focus, and stays open
  // while the result shows, so a mouse reader sees "Copied" without moving.
  const [hovered, setHovered] = React.useState(false)

  React.useEffect(() => {
    if (state === "idle") return
    const timeout = window.setTimeout(() => setState("idle"), COPY_FEEDBACK_MS)
    return () => window.clearTimeout(timeout)
  }, [state])

  async function copy() {
    try {
      // Undefined outside a secure context (plain http on a LAN address), so
      // checked rather than assumed: that is a refusal, not a crash.
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable in this context")
      await navigator.clipboard.writeText(value)
      setState("copied")
      onCopy?.(value)
    } catch (error) {
      setState("failed")
      onError?.(error)
    }
  }

  const name = t.copy(label)
  const tip = state === "copied" ? t.copied : state === "failed" ? t.failed : name

  return (
    <>
      <Tooltip open={hovered || state !== "idle"} onOpenChange={setHovered}>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size={size}
            aria-label={name}
            disabled={value === ""}
            onClick={copy}
            className={cn("text-muted-foreground hover:text-foreground", className)}
          >
            <StateIcon state={state} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tip}</TooltipContent>
      </Tooltip>
      {/* The tooltip is not announced on its own; this is what a screen reader hears. */}
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? t.copied : state === "failed" ? t.failed : ""}
      </span>
    </>
  )
}

function StateIcon({ state }: { state: CopyState }) {
  switch (state) {
    case "idle":
      return <CopyIcon aria-hidden />
    case "copied":
      return <CheckIcon aria-hidden className="text-success-fg" />
    case "failed":
      return <WarningIcon aria-hidden className="text-danger-fg" />
    default: {
      const never: never = state
      throw new Error("CopyButton: unknown state " + JSON.stringify(never))
    }
  }
}

export interface CopyFieldProps {
  /** The term: "IBAN", "Reference". Also names the button: "Copy IBAN". */
  label: string
  value: string
  /** Monospace for codes a reader compares character by character: IBAN, reference. */
  mono?: boolean
  /** `false` renders the row without a button, so a list of details lines up
   *  when some of them are not worth copying. */
  copy?: boolean
  className?: string
}

/**
 * One term and its value with a copy button, for the details a reader has to
 * paste somewhere else: bank details, a reference, an API key. Render it inside
 * a `<dl>`; it is a `dt`/`dd` pair. The value wraps rather than truncates, so
 * nothing copied is hidden from the person checking it.
 */
export function CopyField({ label, value, mono = false, copy = true, className }: CopyFieldProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-3 py-1.5 text-sm", className)}>
      <dt className="w-28 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="flex min-w-0 flex-1 items-center gap-1">
        <span className={cn("min-w-0 break-words font-medium", mono && "font-mono")}>{value}</span>
        {copy && <CopyButton value={value} label={label} size="icon-xs" />}
      </dd>
    </div>
  )
}
