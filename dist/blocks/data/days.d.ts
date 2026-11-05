/**
 * Calendar-day arithmetic in local time.
 *
 * Built on `new Date(y, m, d + n)` and never on adding 86 400 000 ms: across a
 * DST change a day is 23 or 25 hours long, and millisecond arithmetic lands an
 * hour off midnight, which then rounds onto the wrong day.
 */
export declare const startOfDay: (d: Date) => Date;
export declare const addDays: (d: Date, n: number) => Date;
/** Whole days from `a` to `b`, negative when `b` is earlier. */
export declare const diffDays: (a: Date, b: Date) => number;
/** The first day of the week holding `d`, where weeks start on `weekStartsOn`
 *  (0 Sunday, 1 Monday), as the dictionary's locale says. */
export declare const startOfWeek: (d: Date, weekStartsOn: number) => Date;
/** `yyyy-mm-dd` in local time: a map key for a day, never `toISOString`, which
 *  is UTC and puts an evening in Lisbon on the next day in Tokyo. */
export declare const dayKey: (d: Date) => string;
export declare const sameDay: (a: Date, b: Date) => boolean;
/**
 * Where a dated row sits: its first day and its last, both midnight.
 *
 * No end, or an end on the start day, is a single day: a deadline. An end
 * before the start is refused rather than drawn as a bar of negative width
 * somewhere off the left edge, which is how a swapped pair of fields goes
 * unnoticed.
 */
export declare function spanOf(start: Date | null | undefined, end: Date | null | undefined): {
    from: Date;
    to: Date;
} | null;
