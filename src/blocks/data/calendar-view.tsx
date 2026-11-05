import * as React from "react"
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"
import { addDays, dayKey, diffDays, sameDay, spanOf, startOfDay, startOfWeek } from "./days"
import { shiftSpan, useReschedule, type DatedRows } from "./timeline"
import { NONE } from "./types"

/** Chips a day shows before the rest fold into "+N more". Three fit a 6rem
 *  cell; more and a busy week pushes the month off a laptop screen. */
const VISIBLE = 3
/** A month card in the year view lists this many before folding. */
const VISIBLE_IN_MONTH = 5

/** `month` is a grid of days, for this month's deadlines. `year` is twelve
 *  month cards, for deadlines spread over years: a filing calendar, a
 *  five-year contract, renewals. */
export type CalendarScale = "month" | "year"
export const CALENDAR_SCALES: CalendarScale[] = ["month", "year"]

// A type alias for the same reason as `Entry` below: the literal scan.
export type CalendarViewProps<T> = DatedRows<T> & {
  /** The scale it opens on. The reader can switch; this is only the start. */
  defaultScale?: CalendarScale
}

/** What a dragged chip carries, under our own type so a link or a board card
 *  dropped on a day is not mistaken for one. */
const DRAG_TYPE = "application/x-ziku-calendar-item"

type Span = { from: Date; to: Date }
// A type alias, not an interface: the literal scan reads the text between two
// generics (`interface X<T> { … }` up to the next `<T>`) as JSX text, and the
// `=` is what marks it as code.
type Entry<T> = {
  row: T
  key: string
  /** The row's own dates. */
  own: Span
  /** Where it is drawn: `own`, or a drop the page has not saved yet. */
  shown: Span
  point: boolean
}

/**
 * A month grid with each row on the day it is due. For deadlines, where what
 * matters is which day something lands on.
 *
 * One day per row: its end, or its start when it has none. A row repeated on
 * every day of its span buried the deadlines under the long-running work, and
 * that is what the timeline is for. Opens on the month holding today; the
 * arrows move a month at a time.
 *
 * With `onReschedule` a chip can be dragged to another day, or moved with the
 * arrow keys once focused (a day sideways, a week up or down). The whole span
 * moves and keeps its length, the same as dragging a bar's body on the
 * timeline. In the year view a chip dropped on another month keeps its day of
 * the month, or that month's last day when it has fewer.
 */
export function CalendarView<T>({
  items,
  itemKey,
  start,
  end,
  label,
  onItemClick,
  onReschedule,
  today,
  defaultScale = "month",
}: CalendarViewProps<T>) {
  const t = useStrings()
  const weekStartsOn = t.datePicker.locale.options?.weekStartsOn ?? 0
  const now = startOfDay(today ?? new Date())
  const [month, setMonth] = React.useState(() => new Date(now.getFullYear(), now.getMonth(), 1))
  const [scale, setScale] = React.useState<CalendarScale>(defaultScale)
  const { pending, commit } = useReschedule(onReschedule, itemKey)
  const [over, setOver] = React.useState<string | null>(null)
  const hintId = React.useId()
  const gridRef = React.useRef<HTMLOListElement>(null)
  // A chip moved by keyboard is re-rendered in another cell, which drops the
  // focus; this puts it back on the same row once it has landed.
  const refocus = React.useRef<string | null>(null)
  React.useEffect(() => {
    const key = refocus.current
    if (!key) return
    const el = gridRef.current?.querySelector<HTMLElement>(`[data-item-key="${CSS.escape(key)}"]`)
    if (el) {
      el.focus()
      refocus.current = null
    }
  })

  const gridStart = startOfWeek(month, weekStartsOn)
  const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0)
  // Only the weeks the month touches: five most months, six when it straddles.
  const weeks = Math.ceil((diffDays(gridStart, monthEnd) + 1) / 7)
  const days = Array.from({ length: weeks * 7 }, (_, i) => addDays(gridStart, i))
  const gridEnd = days[days.length - 1]

  const byDay = new Map<string, Entry<T>[]>()
  const entries = new Map<string, Entry<T>>()
  let undated = 0
  for (const row of items) {
    const endDate = end?.(row)
    // `spanOf` for its guards: an end before the start is refused here too.
    const own = spanOf(start(row), endDate)
    if (!own) {
      undated++
      continue
    }
    const key = itemKey(row)
    const entry: Entry<T> = { row, key, own, shown: pending[key] ?? own, point: !endDate }
    entries.set(key, entry)
    const day = entry.shown.to
    if (day < gridStart || day > gridEnd) continue
    const list = byDay.get(dayKey(day))
    if (list) list.push(entry)
    else byDay.set(dayKey(day), [entry])
  }

  /** Moves a row so it lands on `day`, keeping its length. */
  const moveTo = (entry: Entry<T>, day: Date) =>
    commit(
      entry.row,
      entry.own,
      shiftSpan(entry.shown, "move", diffDays(entry.shown.to, day)),
      entry.point,
    )

  const step = scale === "year" ? 12 : 1
  const shift = (n: number) =>
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n * step, 1))

  // The year view's months: every row landing in the year on screen, in date
  // order, by month. Built from `entries`, not the day grid, which only holds
  // the weeks of one month.
  const byMonth: Entry<T>[][] = Array.from({ length: 12 }, () => [])
  if (scale === "year")
    for (const entry of entries.values())
      if (entry.shown.to.getFullYear() === month.getFullYear())
        byMonth[entry.shown.to.getMonth()].push(entry)
  for (const list of byMonth) list.sort((a, b) => a.shown.to.getTime() - b.shown.to.getTime())

  /** Drop-target props for a day or a month. `land` says where a chip goes. */
  const dropTarget = (k: string, land: (entry: Entry<T>) => Date) =>
    onReschedule && {
      onDragOver: (e: React.DragEvent) => {
        // Only our own chips: anything else dragged over the grid (a file, a
        // link) must not light up a place it cannot land on.
        if (!e.dataTransfer.types.includes(DRAG_TYPE)) return
        e.preventDefault()
        e.dataTransfer.dropEffect = "move"
        if (over !== k) setOver(k)
      },
      onDragLeave: (e: React.DragEvent) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOver(null)
      },
      onDrop: (e: React.DragEvent) => {
        e.preventDefault()
        setOver(null)
        const entry = entries.get(e.dataTransfer.getData(DRAG_TYPE))
        if (entry) moveTo(entry, land(entry))
      },
    }

  const chip = ({ row, key, shown, ...entry }: Entry<T>, lead?: React.ReactNode) => {
    const name = label(row)
    const text = (
      <>
        {lead}
        {name}
      </>
    )
    const className =
      "block w-full truncate rounded-sm bg-accent px-1.5 py-0.5 text-left text-xs text-accent-foreground"
    if (!onItemClick && !onReschedule)
      return (
        <div title={name} className={className}>
          {text}
        </div>
      )
    return (
      <button
        type="button"
        data-item-key={key}
        onClick={onItemClick ? () => onItemClick(row) : undefined}
        title={name}
        className={cn(
          className,
          "outline-none hover:brightness-95 focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
          onReschedule && "cursor-grab active:cursor-grabbing",
        )}
        {...(onReschedule && {
          draggable: true,
          "aria-describedby": hintId,
          onDragStart: (e: React.DragEvent) => {
            e.dataTransfer.setData(DRAG_TYPE, key)
            e.dataTransfer.effectAllowed = "move"
          },
          onKeyDown: (e: React.KeyboardEvent) => {
            const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key]
            if (step === undefined) return
            e.preventDefault()
            const day = addDays(shown.to, step)
            refocus.current = key
            // Follow the row into the next month rather than let it vanish
            // from under the keyboard.
            if (day.getMonth() !== month.getMonth() || day.getFullYear() !== month.getFullYear())
              setMonth(new Date(day.getFullYear(), day.getMonth(), 1))
            moveTo({ row, key, shown, ...entry }, day)
          },
        })}
      >
        {text}
      </button>
    )
  }

  return (
    <div data-slot="calendar-view" className="flex flex-col">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <h3 className="min-w-0 flex-1 truncate text-sm font-medium" aria-live="polite">
          {scale === "year" ? month.getFullYear() : t.format.month(month)}
        </h3>
        {/* The count gives way first on a phone; the controls never wrap. */}
        {undated > 0 && (
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {t.dataTable.undated(undated)}
          </span>
        )}
        <div className="flex shrink-0 items-center gap-1">
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={scale}
            aria-label={t.dataTable.calendarScale}
            onValueChange={(v) => v && setScale(v as CalendarScale)}
          >
            {CALENDAR_SCALES.map((s) => (
              <ToggleGroupItem key={s} value={s} className="px-3">
                {t.dataTable.calendarScales[s]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMonth(new Date(now.getFullYear(), now.getMonth(), 1))}
          >
            {t.datePicker.today}
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={scale === "year" ? t.dataTable.previousYear : t.dataTable.previousMonth}
            onClick={() => shift(-1)}
          >
            <CaretLeftIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={scale === "year" ? t.dataTable.nextYear : t.dataTable.nextMonth}
            onClick={() => shift(1)}
          >
            <CaretRightIcon />
          </Button>
        </div>
      </div>

      {onReschedule && (
        <p id={hintId} className="sr-only">
          {t.dataTable.calendarRescheduleHint}
        </p>
      )}

      {scale === "year" ? (
        <ol ref={gridRef} className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {byMonth.map((list, m) => {
            const first = new Date(month.getFullYear(), m, 1)
            const k = dayKey(first)
            const current = m === now.getMonth() && month.getFullYear() === now.getFullYear()
            const rest = list.length - VISIBLE_IN_MONTH
            const day = (entry: Entry<T>) => (
              <span
                aria-hidden
                className="mr-1.5 inline-block w-4 text-right tabular-nums opacity-70"
              >
                {entry.shown.to.getDate()}
              </span>
            )
            return (
              <li
                key={k}
                {...dropTarget(k, (entry) => {
                  // Same day of the month, or the last one when this month is
                  // shorter: 31 January dropped on February is the 28th.
                  const last = new Date(month.getFullYear(), m + 1, 0).getDate()
                  return new Date(month.getFullYear(), m, Math.min(entry.shown.to.getDate(), last))
                })}
                className={cn(
                  "flex min-h-36 min-w-0 flex-col gap-1 rounded-lg border p-2",
                  over === k && "bg-accent/60 ring-1 ring-ring/80 ring-inset",
                )}
              >
                <div className="flex items-center justify-between gap-2 pb-1">
                  {/* Opens that month's grid: the way from "March is busy"
                   *  to which days. */}
                  <button
                    type="button"
                    onClick={() => {
                      setMonth(first)
                      setScale("month")
                    }}
                    className={cn(
                      "truncate rounded-sm text-sm font-medium outline-none hover:underline focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
                      current && "text-link",
                    )}
                  >
                    {t.format.monthName(first)}
                  </button>
                  {list.length > 0 && (
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {t.format.number(list.length)}
                    </span>
                  )}
                </div>
                {list.length === 0 && <span className="text-xs text-muted-foreground">{NONE}</span>}
                {list.slice(0, VISIBLE_IN_MONTH).map((entry) => (
                  <React.Fragment key={entry.key}>{chip(entry, day(entry))}</React.Fragment>
                ))}
                {rest > 0 && (
                  <Popover>
                    <PopoverTrigger className="truncate rounded-sm px-1.5 text-left text-xs whitespace-nowrap text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80">
                      {t.dataTable.moreItems(rest)}
                    </PopoverTrigger>
                    <PopoverContent className="grid max-h-80 w-64 gap-1 overflow-y-auto p-2">
                      {list.map((entry) => (
                        <React.Fragment key={entry.key}>{chip(entry, day(entry))}</React.Fragment>
                      ))}
                    </PopoverContent>
                  </Popover>
                )}
              </li>
            )
          })}
        </ol>
      ) : (
        <>
          <div className="grid grid-cols-7 border-b">
            {days.slice(0, 7).map((d) => (
              <div
                key={d.getDay()}
                className="px-2 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {t.format.weekday(d)}
              </div>
            ))}
          </div>

          <ol ref={gridRef} className="grid grid-cols-7">
            {days.map((d) => {
              const list = byDay.get(dayKey(d)) ?? []
              const outside = d.getMonth() !== month.getMonth()
              const isToday = sameDay(d, now)
              const rest = list.length - VISIBLE
              const k = dayKey(d)
              return (
                <li
                  key={k}
                  {...dropTarget(k, () => d)}
                  className={cn(
                    // min-w-0: a grid track defaults to `auto` and a long title
                    // would widen its column instead of truncating.
                    "flex min-h-20 min-w-0 flex-col gap-1 border-r border-b p-1 sm:min-h-24 [&:nth-child(7n)]:border-r-0",
                    outside && "bg-muted/40",
                    over === k && "bg-accent/60 ring-1 ring-ring/80 ring-inset",
                  )}
                >
                  <time
                    dateTime={dayKey(d)}
                    aria-label={t.format.date(d)}
                    className={cn(
                      "flex size-6 items-center justify-center self-end rounded-full text-xs tabular-nums",
                      isToday
                        ? "bg-primary font-medium text-primary-foreground"
                        : outside
                          ? "text-muted-foreground"
                          : "text-foreground",
                    )}
                  >
                    {d.getDate()}
                  </time>
                  {list.slice(0, VISIBLE).map((entry) => (
                    <React.Fragment key={entry.key}>{chip(entry)}</React.Fragment>
                  ))}
                  {rest > 0 && (
                    <Popover>
                      <PopoverTrigger className="truncate rounded-sm px-1.5 text-left whitespace-nowrap text-xs text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80">
                        {t.dataTable.moreItems(rest)}
                      </PopoverTrigger>
                      <PopoverContent className="grid w-56 gap-1 p-2">
                        <div className="px-1.5 pb-1 text-xs font-medium text-muted-foreground">
                          {t.format.date(d)}
                        </div>
                        {list.map((entry) => (
                          <React.Fragment key={entry.key}>{chip(entry)}</React.Fragment>
                        ))}
                      </PopoverContent>
                    </Popover>
                  )}
                </li>
              )
            })}
          </ol>
        </>
      )}
    </div>
  )
}
