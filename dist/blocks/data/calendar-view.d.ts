import { DatedRows } from './timeline';
import * as React from "react";
/** `month` is a grid of days, for this month's deadlines. `year` is twelve
 *  month cards, for deadlines spread over years: a filing calendar, a
 *  five-year contract, renewals. */
export type CalendarScale = "month" | "year";
export declare const CALENDAR_SCALES: CalendarScale[];
export type CalendarViewProps<T> = DatedRows<T> & {
    /** The scale it opens on. The reader can switch; this is only the start. */
    defaultScale?: CalendarScale;
};
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
export declare function CalendarView<T>({ items, itemKey, start, end, label, onItemClick, onReschedule, today, defaultScale, }: CalendarViewProps<T>): React.JSX.Element;
