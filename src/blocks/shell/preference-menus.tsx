import * as React from "react"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ZOOM_STEPS, useZoom } from "@/lib/preferences"
import { useStrings } from "@/lib/strings"

export interface PreferenceMenuProps {
  /** Where the panel opens, for a trigger in a footer rather than a top bar. */
  side?: React.ComponentProps<typeof DropdownMenuContent>["side"]
  align?: React.ComponentProps<typeof DropdownMenuContent>["align"]
  className?: string
}

/** The root font-size multiplier, as a short list rather than a slider. */
export function ZoomMenu({ side, align = "end", className }: PreferenceMenuProps) {
  const t = useStrings().preferences
  const { zoom, setZoom } = useZoom()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={t.zoom} className={className}>
          <MagnifyingGlassIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align={align} className="min-w-40">
        <DropdownMenuLabel>{t.zoom}</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={String(zoom)}
          onValueChange={(value) => setZoom(Number(value))}
        >
          {ZOOM_STEPS.map((step) => (
            <DropdownMenuRadioItem key={step} value={String(step)}>
              {t.zoomLevel(step)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
