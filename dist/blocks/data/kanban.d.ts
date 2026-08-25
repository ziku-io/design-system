import * as React from "react";
export interface KanbanColumn<T> {
    key: string;
    title: string;
    items: T[];
    /** Line under the title, e.g. the sum of the deals in it. */
    subtitle?: string;
}
export interface KanbanProps<T> {
    columns: KanbanColumn<T>[];
    renderCard: (item: T) => React.ReactNode;
    /** Stable key per item; also what the drag carries. */
    itemKey: (item: T) => string;
    onDrop?: (item: T, columnKey: string) => void;
    /** Items returning false are pinned (no permission to move them). */
    canDrag?: (item: T) => boolean;
    /** How tall a column may get before it scrolls on its own. */
    maxHeight?: number;
    className?: string;
}
/**
 * Board layout with native HTML5 drag and drop.
 * ponytail: no DnD library — fine for desktop mouse use; add one only if touch
 * dragging is needed.
 */
export declare function Kanban<T>({ columns, renderCard, itemKey, onDrop, canDrag, maxHeight, className, }: KanbanProps<T>): React.JSX.Element;
