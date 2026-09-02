import * as React from "react"
import { DesktopIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ZOOM_STEPS, useThemePreference, useZoom, type ThemePreference } from "@/lib/preferences"
import { useStrings } from "@/lib/strings"

const THEME_ICONS = {
  system: DesktopIcon,
  light: SunIcon,
  dark: MoonIcon,
} as const

export interface PreferenceMenuProps {
  /** Where the panel opens, for a trigger in a footer rather than a top bar. */
  side?: React.ComponentProps<typeof DropdownMenuContent>["side"]
  align?: React.ComponentProps<typeof DropdownMenuContent>["align"]
  className?: string
}

/**
 * System, light, dark — the three-item menu every app was writing over
 * `useThemePreference`.
 *
 * `system` is the default and the first item, because a machine set to light is
 * the case this library's dark default gets wrong.
 */
export function ThemeMenu({ side, align = "end", className }: PreferenceMenuProps) {
  const t = useStrings().preferences
  const { theme, setTheme } = useThemePreference()
  const Icon = THEME_ICONS[theme]
  const labels: Record<ThemePreference, string> = {
    system: t.system,
    light: t.light,
    dark: t.dark,
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={t.appearance} className={className}>
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align={align} className="min-w-40">
        <DropdownMenuLabel>{t.appearance}</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value as ThemePreference)}
        >
          {(Object.keys(labels) as ThemePreference[]).map((key) => {
            const ItemIcon = THEME_ICONS[key]
            return (
              <DropdownMenuRadioItem key={key} value={key}>
                <ItemIcon />
                {labels[key]}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * The root font-size multiplier, as a short list rather than a slider.
 *
 * Browser zoom scales the viewport too, which turns a desktop layout into the
 * phone one. This scales the type and the spacing and leaves the breakpoints
 * where they are, which is what someone asking for bigger text meant.
 */
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
