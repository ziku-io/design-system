import * as React from "react"
import {
  ArrowCounterClockwiseIcon,
  DesktopIcon,
  GearSixIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  type Icon,
} from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  THEMES,
  ZOOM_DEFAULT,
  ZOOM_MAX,
  ZOOM_MIN,
  ZOOM_STEPS,
  useTheme,
  useZoom,
  type ThemePreference,
} from "@/lib/preferences"
import { useStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"

/**
 * `− [110] % +` and a reset. The field takes any whole number in range; minus
 * and plus step through `ZOOM_STEPS`; the reset (back to 100%) shows only when
 * there is something to reset.
 */
export function ZoomStepper({ className }: { className?: string }) {
  const t = useStrings().preferences
  const { zoom, setZoom } = useZoom()
  // What is in the field while the reader types. Committed on Enter or blur,
  // not per keystroke: "1" on the way to "125" would zoom the page to 75%.
  const [draft, setDraft] = React.useState(String(zoom))
  React.useEffect(() => setDraft(String(zoom)), [zoom])

  const commit = () => {
    const n = Number.parseInt(draft, 10)
    // Not a number puts the last good value back; a number out of range is
    // clamped by `setZoom`, and the field then shows what was applied.
    if (Number.isNaN(n)) setDraft(String(zoom))
    else {
      setZoom(n)
      setDraft(String(Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, n))))
    }
  }

  // The nearest step past the current zoom, not index ± 1: a typed 105 is not
  // one of the steps.
  const down = [...ZOOM_STEPS].reverse().find((s) => s < zoom)
  const up = ZOOM_STEPS.find((s) => s > zoom)

  return (
    <div className={cn("flex w-fit items-center gap-1", className)}>
      <div role="group" aria-label={t.zoom} className="flex items-center rounded-md border">
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-r-none"
          aria-label={t.zoomOut}
          disabled={down === undefined}
          onClick={() => down !== undefined && setZoom(down)}
        >
          <MinusIcon />
        </Button>
        <label className="flex h-8 items-center border-x px-2 text-sm tabular-nums focus-within:ring-[1.5px] focus-within:ring-ring/80 focus-within:ring-inset">
          <input
            type="text"
            inputMode="numeric"
            aria-label={t.zoomPercent}
            value={draft}
            onChange={(e) => setDraft(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit()
              if (e.key === "Escape") setDraft(String(zoom))
            }}
            onFocus={(e) => e.currentTarget.select()}
            className="w-8 bg-transparent text-right outline-none"
          />
          <span aria-hidden className="text-muted-foreground">
            {t.percentSign}
          </span>
        </label>
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-l-none"
          aria-label={t.zoomIn}
          disabled={up === undefined}
          onClick={() => up !== undefined && setZoom(up)}
        >
          <PlusIcon />
        </Button>
      </div>
      {zoom !== ZOOM_DEFAULT && (
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={t.resetZoom}
          title={t.resetZoom}
          onClick={() => setZoom(ZOOM_DEFAULT)}
          className="text-muted-foreground"
        >
          <ArrowCounterClockwiseIcon />
        </Button>
      )}
    </div>
  )
}

const THEME_ICONS: Record<ThemePreference, Icon> = {
  light: SunIcon,
  dark: MoonIcon,
  system: DesktopIcon,
}

/** Light, dark, or whatever the OS says. */
export function ThemePicker({ className }: { className?: string }) {
  const t = useStrings().preferences
  const { theme, setTheme } = useTheme()
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      size="sm"
      value={theme}
      aria-label={t.appearance}
      // A single toggle group hands back "" when the pressed item is clicked
      // again; there is always a theme, so that click changes nothing.
      onValueChange={(v) => v && setTheme(v as ThemePreference)}
      className={className}
    >
      {THEMES.map((value) => {
        const Ic = THEME_ICONS[value]
        return (
          <ToggleGroupItem key={value} value={value} className="gap-1.5 px-2.5">
            <Ic />
            {t.themes[value]}
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}

export interface LanguageOption {
  /** What the app keys its dictionaries on: "en", "pt-PT". */
  code: string
  /** The language's own name, "Português", not this dictionary's word for
   *  it: a reader who cannot read the current language still finds theirs. */
  label: string
}

export interface LanguagePickerProps {
  options: LanguageOption[]
  value: string
  /** The app swaps its dictionary (`UIStringsProvider`) and anything else it
   *  keys on the language; the library holds no language of its own. */
  onChange: (code: string) => void
  className?: string
}

export function LanguagePicker({ options, value, onChange, className }: LanguagePickerProps) {
  const t = useStrings().preferences
  if (!options.some((o) => o.code === value))
    // Concatenated, not templated: the literal scan reads a template's words
    // as UI copy, and this is a developer's error.
    throw new Error(
      "LanguagePicker: value " +
        JSON.stringify(value) +
        " is not one of " +
        options.map((o) => o.code).join(", "),
    )
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger size="sm" aria-label={t.language} className={className}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.code} value={o.code} lang={o.code}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export interface PreferencesMenuProps {
  /** Present → a Language row. Absent for an app with one language. */
  language?: Omit<LanguagePickerProps, "className">
  /** Where the panel opens, for a trigger in a footer rather than a top bar. */
  side?: React.ComponentProps<typeof PopoverContent>["side"]
  align?: React.ComponentProps<typeof PopoverContent>["align"]
  className?: string
}

/**
 * Appearance, language and zoom, behind one icon in the top bar.
 *
 * A popover, not a dropdown menu: a menu moves focus item to item with the
 * arrows and closes on a pick, which suits a list of actions and fights a
 * panel of controls. Here Tab walks the controls and the panel stays open
 * while the reader tries a zoom level or two.
 */
export function PreferencesMenu({
  language,
  side,
  align = "end",
  className,
}: PreferencesMenuProps) {
  const t = useStrings().preferences
  const row = (label: string, control: React.ReactNode) => (
    <div className="grid gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {control}
    </div>
  )
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={t.title} className={className}>
          <GearSixIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent side={side} align={align} className="grid w-auto gap-4 p-3">
        {row(t.appearance, <ThemePicker />)}
        {language && row(t.language, <LanguagePicker {...language} className="w-full" />)}
        {row(t.zoom, <ZoomStepper />)}
      </PopoverContent>
    </Popover>
  )
}
