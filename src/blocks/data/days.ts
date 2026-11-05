/**
 * Calendar-day arithmetic in local time.
 *
 * Built on `new Date(y, m, d + n)` and never on adding 86 400 000 ms: across a
 * DST change a day is 23 or 25 hours long, and millisecond arithmetic lands an
 * hour off midnight, which then rounds onto the wrong day.
 */
export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

export const addDays = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)

/** Whole days from `a` to `b`, negative when `b` is earlier. */
export const diffDays = (a: Date, b: Date) =>
  // Rounded: a DST day is 23 or 25 hours, so the raw quotient is off by 1/24.
  Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / 86_400_000)

/** The first day of the week holding `d`, where weeks start on `weekStartsOn`
 *  (0 Sunday, 1 Monday), as the dictionary's locale says. */
export const startOfWeek = (d: Date, weekStartsOn: number) =>
  addDays(startOfDay(d), -((d.getDay() - weekStartsOn + 7) % 7))

/** `yyyy-mm-dd` in local time: a map key for a day, never `toISOString`, which
 *  is UTC and puts an evening in Lisbon on the next day in Tokyo. */
export const dayKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`

export const sameDay = (a: Date, b: Date) => diffDays(a, b) === 0

/**
 * Where a dated row sits: its first day and its last, both midnight.
 *
 * No end, or an end on the start day, is a single day: a deadline. An end
 * before the start is refused rather than drawn as a bar of negative width
 * somewhere off the left edge, which is how a swapped pair of fields goes
 * unnoticed.
 */
export function spanOf(
  start: Date | null | undefined,
  end: Date | null | undefined,
): { from: Date; to: Date } | null {
  if (!start) return null
  if (Number.isNaN(start.getTime())) throw new Error("dates.start returned an invalid Date")
  const from = startOfDay(start)
  if (!end) return { from, to: from }
  if (Number.isNaN(end.getTime())) throw new Error("dates.end returned an invalid Date")
  const to = startOfDay(end)
  if (to < from)
    throw new Error("dates.end is before dates.start (" + dayKey(to) + " < " + dayKey(from) + ")")
  return { from, to }
}
