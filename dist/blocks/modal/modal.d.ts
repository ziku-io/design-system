import * as React from "react";
declare const SIZES: {
    readonly sm: "sm:max-w-sm";
    readonly md: "sm:max-w-lg";
    readonly lg: "sm:max-w-3xl";
    readonly xl: "sm:max-w-5xl";
};
export interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: React.ReactNode;
    /** A line under the title. Also what screen readers announce for the dialog. */
    description?: React.ReactNode;
    /** Buttons, on the bar at the bottom. Right-aligned; `mr-auto` moves one left. */
    footer?: React.ReactNode;
    size?: keyof typeof SIZES;
    /** Classes for the dialog box itself, e.g. a width the four sizes do not cover. */
    className?: string;
    children?: React.ReactNode;
}
/**
 * A dialog with a title bar, a body that scrolls and a footer that does not.
 *
 * `Dialog` on its own is one padded box: a long form inside it grows past the
 * viewport and takes the buttons with it. This is the shape every app ends up
 * writing over it, so it lives here instead:
 *
 * - The height cap is unconditional, and in `dvh` rather than `vh`. On a phone
 *   the URL bar makes `vh` taller than what is actually on screen, and a cap
 *   dropped at `sm:` is keyed off *width* — a window wider than 640px but
 *   shorter than the form loses its buttons off the bottom either way.
 * - The body is `flex-1 min-h-0`, which is what lets a flex child shrink below
 *   its content and produce a scrollbar at all.
 * - The footer wraps: three buttons do not fit across a phone, and an
 *   unwrapped row pushes the `mr-auto` one off its left edge where it cannot
 *   be reached.
 *
 * Controlled only. `open` and `onOpenChange` come from the page, because what
 * the modal is editing lives there too.
 */
export declare function Modal({ open, onOpenChange, title, description, footer, size, className, children, }: ModalProps): React.JSX.Element;
export {};
