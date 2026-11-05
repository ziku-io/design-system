import * as React from "react"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"
import { addDays, diffDays, sameDay, spanOf, startOfDay, startOfWeek } from "./days"

/** How a dated row is read: when it starts, when it ends, what it is called. */
export interface DatedRows<T> {
  items: T[]
  itemKey: (row: T) => string
  /** A row with no start is left off and counted under the view. */
  start: (row: T) => Date | null | undefined
  /** Absent, or returning nothing, makes the row a single day: a deadline. */
  end?: (row: T) => Date | null | undefined
  label: (row: T) => string
  onItemClick?: (row: T) => void
  /**
   * Timeline only: present → bars can be dragged. The body moves the whole
   * span, either edge moves that end, a milestone moves its day. Arrow keys do
   * the same for a focused bar: ← → move by a day, with Shift they move the end.
   *
   * `end` is undefined for a milestone. Return a promise and the bar holds its
   * new place until it settles; reject and it goes back. The table never moves
   * the row itself: the new dates arrive through `items`.
   */
  onReschedule?: (row: T, span: { start: Date; end: Date | undefined }) => void | Promise<void>
  /** "Now", fixed for stories and tests. Defaults to the real today. */
  today?: Date
}

export type TimelineScale = "week" | "month" | "quarter"
export const TIMELINE_SCALES: TimelineScale[] = ["week", "month", "quarter"]

/** Pixels per day. Week reads every day by name, quarter fits ~3 months on a
 *  laptop. */
const DAY_WIDTH: Record<TimelineScale, number> = { week: 44, month: 22, quarter: 8 }
/** Days of slack either side of the data, so the first bar is not glued to
 *  the label column and there is room to read past the last one. */
const PAD: Record<TimelineScale, number> = { week: 7, month: 14, quarter: 30 }
const LABEL_W = "w-40 sm:w-52"
const ROW_H = "h-9"

export type DragEdge = "move" | "start" | "end"

/**
 * A span after its `edge` is dragged by `days`. An edge is stopped at the
 * other one rather than passing it: a bar dragged past its own start would
 * otherwise become an end before its start, which `spanOf` refuses.
 */
export function shiftSpan(
  span: { from: Date; to: Date },
  edge: DragEdge,
  days: number,
): { from: Date; to: Date } {
  if (edge === "move") return { from: addDays(span.from, days), to: addDays(span.to, days) }
  if (edge === "start") {
    const from = addDays(span.from, days)
    return { from: from > span.to ? span.to : from, to: span.to }
  }
  const to = addDays(span.to, days)
  return { from: span.from, to: to < span.from ? span.from : to }
}

type Span = { from: Date; to: Date }

/**
 * Hands a move to `onReschedule` and holds the row at its new place while the
 * page saves it. Shared by the timeline and the calendar so a drop means the
 * same thing in both.
 */
export function useReschedule<T>(
  onReschedule: DatedRows<T>["onReschedule"],
  itemKey: (row: T) => string,
) {
  const [pending, setPending] = React.useState<Record<string, Span>>({})
  const commit = React.useCallback(
    (row: T, own: Span, next: Span, point: boolean) => {
      if (!onReschedule || (sameDay(next.from, own.from) && sameDay(next.to, own.to))) return
      const key = itemKey(row)
      const result = onReschedule(row, { start: next.from, end: point ? undefined : next.to })
      // A synchronous handler has already updated the rows; holding a pending
      // place would only flash the old one for a frame.
      if (!(result instanceof Promise)) return
      setPending((p) => ({ ...p, [key]: next }))
      // Not caught: a rejection is the page's to report. The row goes back
      // either way.
      void result.finally(() => setPending(({ [key]: _, ...rest }) => rest))
    },
    [onReschedule, itemKey],
  )
  return { pending, commit }
}

/** Pixels a pointer travels before a press becomes a drag; under it, a click. */
const DRAG_SLOP = 4

/** Rows placed on the days they cover, and the count that had no date. */
function place<T>({ items, start, end }: Pick<DatedRows<T>, "items" | "start" | "end">) {
  const placed: { row: T; from: Date; to: Date; point: boolean }[] = []
  let undated = 0
  for (const row of items) {
    const endDate = end?.(row)
    const span = spanOf(start(row), endDate)
    if (!span) undated++
    else placed.push({ row, ...span, point: !endDate })
  }
  return { placed, undated }
}

/**
 * A Gantt chart: one row per item, a bar from its start to its end, and a line
 * for today. For planning, where what matters is how long things take and what
 * overlaps.
 *
 * The scale changes pixels per day, not the data; the range is always the data
 * plus some slack, widened to include today so "where are we" is never off the
 * edge. A row with no end is a milestone, drawn as a diamond.
 */
export function Timeline<T>({
  items,
  itemKey,
  start,
  end,
  label,
  onItemClick,
  onReschedule,
  today,
}: DatedRows<T>) {
  const t = useStrings()
  const weekStartsOn = t.datePicker.locale.options?.weekStartsOn ?? 0
  const [scale, setScale] = React.useState<TimelineScale>("month")
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const now = startOfDay(today ?? new Date())
  const { placed, undated } = place({ items, start, end })
  const hintId = React.useId()

  // Where a bar is drawn while it is being dragged, and after a drop whose
  // promise has not settled. Both win over the row's own dates.
  const [preview, setPreview] = React.useState<{ key: string; span: Span } | null>(null)
  const { pending, commit: reschedule } = useReschedule(onReschedule, itemKey)
  const press = React.useRef<{
    key: string
    edge: DragEdge
    x0: number
    span: Span
    moved: boolean
  } | null>(null)
  // A drag ends in a click on the bar it started on; that click is not one.
  const swallowClick = React.useRef(false)

  const dw = DAY_WIDTH[scale]
  const first = placed.reduce((min, p) => (p.from < min ? p.from : min), now)
  const last = placed.reduce((max, p) => (p.to > max ? p.to : max), now)
  const origin = startOfWeek(addDays(first, -PAD[scale]), weekStartsOn)
  const total = diffDays(origin, addDays(last, PAD[scale])) + 1
  const days = React.useMemo(
    () => Array.from({ length: total }, (_, i) => addDays(origin, i)),
    // `origin` is a fresh Date each render; its time is the identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [origin.getTime(), total],
  )
  const x = (d: Date) => diffDays(origin, d) * dw
  const todayX = x(now)

  // Months for the top header row: each one spans the days it has in range.
  const months: { key: string; date: Date; days: number }[] = []
  for (const d of days) {
    const key = `${d.getFullYear()}-${d.getMonth()}`
    const tail = months[months.length - 1]
    if (tail?.key === key) tail.days++
    else months.push({ key, date: d, days: 1 })
  }

  const scrollToToday = React.useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // A third in, not centred: what is coming matters more than what is past.
    el.scrollLeft = Math.max(0, todayX - el.clientWidth / 3)
  }, [todayX])
  React.useLayoutEffect(scrollToToday, [scale, scrollToToday])

  const weekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6
  const tick = (d: Date) => (scale === "quarter" ? d.getDay() === weekStartsOn : true)
  const shading = scale !== "quarter" && (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {days.map((d, i) =>
        weekend(d) ? (
          <div
            key={i}
            className="absolute inset-y-0 bg-muted/60"
            style={{ left: i * dw, width: dw }}
          />
        ) : null,
      )}
    </div>
  )
  const todayLine = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 z-[1] w-px bg-danger"
      style={{ left: todayX + dw / 2 }}
    />
  )

  return (
    <div data-slot="timeline" className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2 border-b px-3 py-2">
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          value={scale}
          aria-label={t.dataTable.timelineScale}
          onValueChange={(v) => v && setScale(v as TimelineScale)}
        >
          {TIMELINE_SCALES.map((s) => (
            <ToggleGroupItem key={s} value={s} className="px-3">
              {t.dataTable.scales[s]}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Button variant="outline" size="sm" onClick={scrollToToday}>
          {t.datePicker.today}
        </Button>
        {undated > 0 && (
          <span className="ml-auto text-xs text-muted-foreground">
            {t.dataTable.undated(undated)}
          </span>
        )}
      </div>

      <div ref={scrollRef} className="max-h-[70dvh] overflow-auto overscroll-x-contain">
        <div className="relative w-max min-w-full">
          {/* Header: months over days. Sticky to the top, and its first cell
           *  to the left, so the corner stays put both ways. */}
          <div className="sticky top-0 z-20 flex border-b bg-card">
            <div className={cn(LABEL_W, "sticky left-0 z-10 shrink-0 border-r bg-card")} />
            <div className="relative" style={{ width: total * dw }}>
              <div className="flex h-7 items-end border-b">
                {months.map((m) => (
                  <div
                    key={m.key}
                    className="h-full shrink-0 truncate border-l px-2 pt-1.5 text-xs font-medium first:border-l-0"
                    style={{ width: m.days * dw }}
                  >
                    {t.format.month(m.date)}
                  </div>
                ))}
              </div>
              <div className="relative flex h-7">
                {days.map((d, i) => (
                  <div
                    key={i}
                    className={cn(
                      "shrink-0 pt-1.5 text-center text-xs tabular-nums",
                      sameDay(d, now) ? "font-semibold text-danger-fg" : "text-muted-foreground",
                    )}
                    style={{ width: dw }}
                  >
                    {/* Quarter: one label a week, starting on that week's
                     *  first day and running over the next six. */}
                    {tick(d) && (
                      <span className={scale === "quarter" ? "block w-14 text-left" : undefined}>
                        {d.getDate()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {onReschedule && (
            <p id={hintId} className="sr-only">
              {t.dataTable.rescheduleHint}
            </p>
          )}
          <ul>
            {placed.map(({ row, from: ownFrom, to: ownTo, point }) => {
              const key = itemKey(row)
              const shown =
                preview?.key === key ? preview.span : (pending[key] ?? { from: ownFrom, to: ownTo })
              const { from, to } = shown
              const left = x(from)
              const width = (diffDays(from, to) + 1) * dw
              const name = label(row)
              const when =
                point || sameDay(from, to)
                  ? t.format.date(from)
                  : `${t.format.date(from)}${t.datePicker.rangeSeparator}${t.format.date(to)}`
              const interactive = Boolean(onItemClick || onReschedule)
              const Mark = interactive ? "button" : "div"

              const commit = (next: Span) =>
                reschedule(row, { from: ownFrom, to: ownTo }, next, point)

              const drag = onReschedule && {
                onPointerDown: (e: React.PointerEvent<HTMLElement>) => {
                  if (e.button !== 0) return
                  const edge = ((e.target as HTMLElement).dataset.edge as DragEdge) ?? "move"
                  e.currentTarget.setPointerCapture(e.pointerId)
                  press.current = { key, edge, x0: e.clientX, span: shown, moved: false }
                },
                onPointerMove: (e: React.PointerEvent<HTMLElement>) => {
                  const p = press.current
                  if (!p || p.key !== key) return
                  const dx = e.clientX - p.x0
                  if (!p.moved && Math.abs(dx) < DRAG_SLOP) return
                  p.moved = true
                  setPreview({ key, span: shiftSpan(p.span, p.edge, Math.round(dx / dw)) })
                },
                onPointerUp: (e: React.PointerEvent<HTMLElement>) => {
                  const p = press.current
                  press.current = null
                  if (!p || !p.moved) return
                  swallowClick.current = true
                  setPreview(null)
                  commit(shiftSpan(p.span, p.edge, Math.round((e.clientX - p.x0) / dw)))
                },
                onPointerCancel: () => {
                  press.current = null
                  setPreview(null)
                },
                onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
                  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
                  e.preventDefault()
                  commit(
                    shiftSpan(
                      shown,
                      e.shiftKey && !point ? "end" : "move",
                      e.key === "ArrowLeft" ? -1 : 1,
                    ),
                  )
                },
                "aria-describedby": hintId,
              }
              const click = interactive
                ? () => {
                    if (swallowClick.current) {
                      swallowClick.current = false
                      return
                    }
                    onItemClick?.(row)
                  }
                : undefined
              // A resize grip on each end of a bar. Inside the bar, so its
              // pointerdown reaches the bar's handler with `data-edge` set.
              const grip = (edge: "start" | "end") => (
                <span
                  aria-hidden
                  data-edge={edge}
                  className={cn(
                    "absolute inset-y-0 w-2 cursor-ew-resize",
                    edge === "start" ? "left-0" : "right-0",
                  )}
                />
              )
              return (
                <li key={key} className={cn("flex border-b last:border-b-0", ROW_H)}>
                  <div
                    className={cn(
                      LABEL_W,
                      "sticky left-0 z-10 flex shrink-0 items-center border-r bg-card px-3 text-sm",
                    )}
                  >
                    <span className="truncate">{name}</span>
                  </div>
                  <div className="relative" style={{ width: total * dw }}>
                    {shading}
                    {todayLine}
                    {point ? (
                      <Mark
                        type={interactive ? "button" : undefined}
                        onClick={click}
                        {...drag}
                        title={`${name} · ${when}`}
                        aria-label={`${name}, ${when}`}
                        className={cn(
                          "absolute top-1/2 z-[2] flex -translate-y-1/2 items-center gap-2 rounded-sm outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
                          onReschedule &&
                            "cursor-grab touch-none select-none active:cursor-grabbing",
                        )}
                        style={{ left: left + dw / 2 - 6 }}
                      >
                        <span aria-hidden className="size-3 rotate-45 rounded-[2px] bg-primary" />
                        <span className="text-xs whitespace-nowrap text-muted-foreground">
                          {name}
                        </span>
                      </Mark>
                    ) : (
                      <Mark
                        type={interactive ? "button" : undefined}
                        onClick={click}
                        {...drag}
                        title={`${name} · ${when}`}
                        aria-label={`${name}, ${when}`}
                        className={cn(
                          "absolute inset-y-1.5 z-[2] flex items-center overflow-hidden rounded-md border border-ring/40 bg-accent px-2 text-left text-xs text-accent-foreground outline-none",
                          onItemClick && "cursor-pointer hover:brightness-95",
                          // touch-none: on a phone the drag would otherwise
                          // scroll the chart instead of moving the bar.
                          onReschedule &&
                            "cursor-grab touch-none select-none active:cursor-grabbing",
                          preview?.key === key && "z-[3] shadow-md",
                          "focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
                        )}
                        style={{ left, width }}
                      >
                        <span className="pointer-events-none truncate">{name}</span>
                        {onReschedule && grip("start")}
                        {onReschedule && grip("end")}
                      </Mark>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
