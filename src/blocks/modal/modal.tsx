import * as React from "react"
import { XIcon } from "@phosphor-icons/react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"

const SIZES = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-lg",
  lg: "sm:max-w-3xl",
  xl: "sm:max-w-5xl",
} as const

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: React.ReactNode
  /** A line under the title. Also what screen readers announce for the dialog. */
  description?: React.ReactNode
  /** Buttons, on the bar at the bottom. Right-aligned; `mr-auto` moves one left. */
  footer?: React.ReactNode
  size?: keyof typeof SIZES
  /** Classes for the dialog box itself, e.g. a width the four sizes do not cover. */
  className?: string
  children?: React.ReactNode
}

/**
 * A dialog with a title bar, a body that scrolls and a footer that does not.
 *
 * `Dialog` on its own is one padded box: a long form inside it grows past the
 * viewport and takes the buttons with it. This is the shape every app ends up
 * writing over it, so it lives here instead:
 *
 * - The height cap is unconditional, and in `dvh` rather than `vh`. On a phone
 *   the URL bar makes `vh` taller than what is actually on screen, and a cap
 *   dropped at `sm:` is keyed off *width* — a window wider than 640px but
 *   shorter than the form loses its buttons off the bottom either way.
 * - The body is `flex-1 min-h-0`, which is what lets a flex child shrink below
 *   its content and produce a scrollbar at all.
 * - The footer wraps: three buttons do not fit across a phone, and an
 *   unwrapped row pushes the `mr-auto` one off its left edge where it cannot
 *   be reached.
 *
 * Controlled only. `open` and `onOpenChange` come from the page, because what
 * the modal is editing lives there too.
 */
export function Modal({
  open,
  onOpenChange,
  title,
  description,
  footer,
  size = "md",
  className,
  children,
}: ModalProps) {
  const t = useStrings().modal
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        // gap-0 and p-0 undo DialogContent's own padded grid: the padding
        // belongs to the three sections, so only the middle one scrolls.
        className={cn("flex max-h-[92dvh] flex-col gap-0 p-0", SIZES[size], className)}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5">
          <div className="grid gap-1">
            <DialogTitle className="text-base">{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </div>
          <DialogClose
            aria-label={t.close}
            className="-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <XIcon className="size-4" weight="bold" />
          </DialogClose>
        </div>

        {children != null && (
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            {children}
          </div>
        )}

        {footer && (
          <div className="flex shrink-0 flex-wrap justify-end gap-2 border-t bg-muted/40 px-5 py-3">
            {footer}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
