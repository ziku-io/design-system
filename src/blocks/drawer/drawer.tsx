import * as React from "react"
import { XIcon } from "@phosphor-icons/react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { focusFirstField } from "@/lib/focus"
import { EDGE_PANEL, SCRIM, type EdgeSide } from "@/lib/surfaces"
import { buttonVariants } from "@/components/ui/button"

/** Widths for a side drawer. On a phone it is the full width whatever this is. */
const SIZES = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-xl",
} as const

export interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: React.ReactNode
  /** A line under the title. Also what a screen reader announces for it. */
  description?: React.ReactNode
  /** Buttons, on the bar at the bottom. Right-aligned; `mr-auto` moves one left. */
  footer?: React.ReactNode
  /** `right` for details and filters, `left` for navigation, `bottom` for a
   *  short list of actions on a phone. */
  side?: EdgeSide
  /** Width of a `right` or `left` drawer from `sm` up. Ignored at the bottom. */
  size?: keyof typeof SIZES
  /** Classes for the panel itself. */
  className?: string
  children?: React.ReactNode
}

/**
 * A panel that slides in from an edge, with a title bar, a body that scrolls
 * and a footer that does not. `Modal`'s shape, against a side of the screen:
 * use it when the content is a whole panel (a record's details, a dozen
 * filters) rather than one question.
 *
 * Controlled only, like `Modal`: the page owns `open`, because it owns what the
 * drawer is showing.
 */
export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  footer,
  side = "right",
  size = "md",
  className,
  children,
}: DrawerProps) {
  const t = useStrings().common
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay data-slot="drawer-overlay" className={SCRIM} />
        <DialogPrimitive.Content
          data-slot="drawer"
          data-side={side}
          onOpenAutoFocus={focusFirstField}
          className={cn(
            EDGE_PANEL.base,
            EDGE_PANEL[side],
            side !== "bottom" && cn("w-full", SIZES[size]),
            "outline-none",
            className,
          )}
          // Radix warns when a dialog has no description; without one, say so.
          {...(description ? {} : { "aria-describedby": undefined })}
        >
          <div className="flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5">
            <div className="grid gap-1">
              <DialogPrimitive.Title className="text-base leading-none font-semibold">
                {title}
              </DialogPrimitive.Title>
              {description && (
                <DialogPrimitive.Description className="text-sm text-muted-foreground">
                  {description}
                </DialogPrimitive.Description>
              )}
            </div>
            <DialogPrimitive.Close
              aria-label={t.close}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-xs" }),
                "-mr-1 text-muted-foreground",
              )}
            >
              <XIcon className="size-4" />
            </DialogPrimitive.Close>
          </div>

          {/* The body is the only thing that scrolls: `min-h-0` lets a flex
           *  child shrink below its content, and overscroll-contain stops the
           *  page behind from scrolling once this reaches its end. */}
          {children != null && (
            <div
              data-overlay-body
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4"
            >
              {children}
            </div>
          )}

          {footer && (
            <div className="mt-auto flex shrink-0 flex-wrap justify-end gap-2 border-t bg-muted/40 px-5 py-3">
              {footer}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
