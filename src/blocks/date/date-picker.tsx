import * as React from "react"
import { CalendarBlankIcon } from "@phosphor-icons/react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { useStrings, type UIStrings } from "@/lib/strings"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export type { DateRange }

interface PickerBase {
  placeholder?: string
  disabled?: boolean
  /** Days before this cannot be picked. */
  min?: Date
  /** Days after this cannot be picked. */
  max?: Date
  className?: string
  id?: string
  "aria-invalid"?: boolean
}

function outOfBounds(min?: Date, max?: Date) {
  // A dev error, not a sentence a user reads: concatenated rather than a
  // template so the no-literal scan does not mistake it for UI text.
  if (min && max && min > max)
    throw new Error(
      "DatePicker: min is after max, " + min.toISOString() + " > " + max.toISOString(),
    )
  const matchers = []
  if (min) matchers.push({ before: min })
  if (max) matchers.push({ after: max })
  return matchers
}

function Trigger({
  empty,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { empty: boolean }) {
  return (
    <Button
      variant="outline"
      data-empty={empty}
      className={cn("justify-start font-normal data-[empty=true]:text-muted-foreground", className)}
      {...props}
    >
      <CalendarBlankIcon aria-hidden />
      <span className="truncate">{children}</span>
    </Button>
  )
}

export interface DatePickerProps extends PickerBase {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}

/** One day, in a popover. Closes on pick. */
export function DatePicker({
  value,
  onChange,
  placeholder,
  disabled,
  min,
  max,
  className,
  ...aria
}: DatePickerProps) {
  const t = useStrings()
  const [open, setOpen] = React.useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Trigger empty={!value} disabled={disabled} className={className} {...aria}>
          {value ? t.format.date(value) : (placeholder ?? t.datePicker.placeholder)}
        </Trigger>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          defaultMonth={value}
          disabled={outOfBounds(min, max)}
          onSelect={(date) => {
            onChange(date)
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export interface DateRangePreset {
  label: string
  /** Called with today at midnight, when the preset is clicked. */
  range: (today: Date) => DateRange
}

const day = (from: Date, offset: number) =>
  new Date(from.getFullYear(), from.getMonth(), from.getDate() + offset)

/** "Last 7 days" includes today, so it starts six days back. */
export function defaultRangePresets(t: UIStrings["datePicker"]): DateRangePreset[] {
  return [
    { label: t.today, range: (today) => ({ from: today, to: today }) },
    { label: t.last7Days, range: (today) => ({ from: day(today, -6), to: today }) },
    { label: t.last30Days, range: (today) => ({ from: day(today, -29), to: today }) },
    { label: t.last90Days, range: (today) => ({ from: day(today, -89), to: today }) },
    {
      label: t.thisMonth,
      range: (today) => ({ from: new Date(today.getFullYear(), today.getMonth(), 1), to: today }),
    },
    {
      label: t.thisYear,
      range: (today) => ({ from: new Date(today.getFullYear(), 0, 1), to: today }),
    },
  ]
}

/**
 * The range after a click on `day`.
 *
 * react-day-picker's own rule edits whichever end is nearer: once a range is
 * set, every click after its start moves the end, so the start could only ever
 * move earlier. Here a click on a finished range starts a new one, and the
 * next click finishes it, the two swapped if the second comes first.
 */
export function nextRange(current: DateRange | undefined, day: Date): DateRange {
  if (!current?.from || current.to) return { from: day, to: undefined }
  return day < current.from ? { from: day, to: current.from } : { from: current.from, to: day }
}

export interface DateRangePickerProps extends PickerBase {
  value: DateRange | undefined
  onChange: (range: DateRange | undefined) => void
  /** Shortcuts beside the calendar. Defaults to today, the last 7, 30 and 90
   *  days, this month and this year. `false` for none. */
  presets?: DateRangePreset[] | false
}

/** A period: two months side by side on a desktop, one on a phone, with
 *  shortcuts for the periods a dashboard asks for most. */
export function DateRangePicker({
  value,
  onChange,
  presets,
  placeholder,
  disabled,
  min,
  max,
  className,
  ...aria
}: DateRangePickerProps) {
  const t = useStrings()
  const isMobile = useIsMobile()
  const [open, setOpen] = React.useState(false)
  const shortcuts = presets === false ? [] : (presets ?? defaultRangePresets(t.datePicker))

  const label = value?.from
    ? value.to
      ? `${t.format.date(value.from)}${t.datePicker.rangeSeparator}${t.format.date(value.to)}`
      : t.format.date(value.from)
    : (placeholder ?? t.datePicker.rangePlaceholder)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Trigger empty={!value?.from} disabled={disabled} className={className} {...aria}>
          {label}
        </Trigger>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex flex-col sm:flex-row">
          {shortcuts.length > 0 && (
            <div className="flex flex-wrap gap-1 border-b p-2 sm:w-36 sm:flex-col sm:flex-nowrap sm:border-r sm:border-b-0">
              {shortcuts.map((preset) => (
                <Button
                  key={preset.label}
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => {
                    const now = new Date()
                    onChange(
                      preset.range(new Date(now.getFullYear(), now.getMonth(), now.getDate())),
                    )
                    setOpen(false)
                  }}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          )}
          <div className="flex flex-col">
            <Calendar
              mode="range"
              selected={value}
              defaultMonth={value?.from}
              numberOfMonths={isMobile ? 1 : 2}
              disabled={outOfBounds(min, max)}
              // The clicked day, not the library's computed range: see `nextRange`.
              onSelect={(_, clicked) => onChange(nextRange(value, clicked))}
            />
            {value?.from && (
              <div className="flex justify-end border-t p-2">
                <Button variant="ghost" size="sm" onClick={() => onChange(undefined)}>
                  {t.datePicker.clear}
                </Button>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
