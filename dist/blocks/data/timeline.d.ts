import * as React from "react";
/** How a dated row is read: when it starts, when it ends, what it is called. */
export interface DatedRows<T> {
    items: T[];
    itemKey: (row: T) => string;
    /** A row with no start is left off and counted under the view. */
    start: (row: T) => Date | null | undefined;
    /** Absent, or returning nothing, makes the row a single day: a deadline. */
    end?: (row: T) => Date | null | undefined;
    label: (row: T) => string;
    onItemClick?: (row: T) => void;
    /**
     * Timeline only: present → bars can be dragged. The body moves the whole
     * span, either edge moves that end, a milestone moves its day. Arrow keys do
     * the same for a focused bar: ← → move by a day, with Shift they move the end.
     *
     * `end` is undefined for a milestone. Return a promise and the bar holds its
     * new place until it settles; reject and it goes back. The table never moves
     * the row itself: the new dates arrive through `items`.
     */
    onReschedule?: (row: T, span: {
        start: Date;
        end: Date | undefined;
    }) => void | Promise<void>;
    /** "Now", fixed for stories and tests. Defaults to the real today. */
    today?: Date;
}
export type TimelineScale = "week" | "month" | "quarter";
export declare const TIMELINE_SCALES: TimelineScale[];
export type DragEdge = "move" | "start" | "end";
/**
 * A span after its `edge` is dragged by `days`. An edge is stopped at the
 * other one rather than passing it: a bar dragged past its own start would
 * otherwise become an end before its start, which `spanOf` refuses.
 */
export declare function shiftSpan(span: {
    from: Date;
    to: Date;
}, edge: DragEdge, days: number): {
    from: Date;
    to: Date;
};
type Span = {
    from: Date;
    to: Date;
};
/**
 * Hands a move to `onReschedule` and holds the row at its new place while the
 * page saves it. Shared by the timeline and the calendar so a drop means the
 * same thing in both.
 */
export declare function useReschedule<T>(onReschedule: DatedRows<T>["onReschedule"], itemKey: (row: T) => string): {
    pending: Record<string, Span>;
    commit: (row: T, own: Span, next: Span, point: boolean) => void;
};
/**
 * A Gantt chart: one row per item, a bar from its start to its end, and a line
 * for today. For planning, where what matters is how long things take and what
 * overlaps.
 *
 * The scale changes pixels per day, not the data; the range is always the data
 * plus some slack, widened to include today so "where are we" is never off the
 * edge. A row with no end is a milestone, drawn as a diamond.
 */
export declare function Timeline<T>({ items, itemKey, start, end, label, onItemClick, onReschedule, today, }: DatedRows<T>): React.JSX.Element;
export {};
