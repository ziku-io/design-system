import { Icon } from '@phosphor-icons/react';
import * as React from "react";
/**
 * A column that is an ending rather than a stage: Won, Lost, Archived.
 *
 * It renders as a compact drop target showing the count and the subtitle, and
 * no cards. Two reasons, both learned from a real pipeline:
 *
 * - **Width.** A terminal column grows for the life of the install and nobody
 *   scrolls three hundred won deals. At full width it pushes the stages people
 *   actually work off the right edge of a laptop.
 * - **The drop is often the irreversible one.** Dropping on Won can create a
 *   record and move history onto it. A tile in a semantic tone is what says
 *   "this target is different" before any confirmation appears; an identical
 *   sixth column says nothing.
 *
 * A tone, not a class name: a caller passing raw classes could put any colour
 * on a board, which is how a design system stops being one.
 */
export interface KanbanTile {
    icon: Icon;
    tone: "success" | "danger" | "warning";
}
export interface KanbanColumn<T> {
    key: string;
    title: string;
    items: T[];
    /** Line under the title, e.g. the sum of the deals in it. */
    subtitle?: string;
    /** Render as an ending rather than a stage. See `KanbanTile`. */
    tile?: KanbanTile;
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
