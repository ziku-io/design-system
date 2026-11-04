import { EdgeSide } from '../../lib/surfaces';
import * as React from "react";
/** Widths for a side drawer. On a phone it is the full width whatever this is. */
declare const SIZES: {
    readonly sm: "sm:max-w-sm";
    readonly md: "sm:max-w-md";
    readonly lg: "sm:max-w-xl";
};
export interface DrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: React.ReactNode;
    /** A line under the title. Also what a screen reader announces for it. */
    description?: React.ReactNode;
    /** Buttons, on the bar at the bottom. Right-aligned; `mr-auto` moves one left. */
    footer?: React.ReactNode;
    /** `right` for details and filters, `left` for navigation, `bottom` for a
     *  short list of actions on a phone. */
    side?: EdgeSide;
    /** Width of a `right` or `left` drawer from `sm` up. Ignored at the bottom. */
    size?: keyof typeof SIZES;
    /** Classes for the panel itself. */
    className?: string;
    children?: React.ReactNode;
}
/**
 * A panel that slides in from an edge, with a title bar, a body that scrolls
 * and a footer that does not. `Modal`'s shape, against a side of the screen:
 * use it when the content is a whole panel (a record's details, a dozen
 * filters) rather than one question.
 *
 * Controlled only, like `Modal`: the page owns `open`, because it owns what the
 * drawer is showing.
 */
export declare function Drawer({ open, onOpenChange, title, description, footer, side, size, className, children, }: DrawerProps): React.JSX.Element;
export {};
