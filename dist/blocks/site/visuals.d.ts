import * as React from "react";
/**
 * The pictures on a public page are the product itself: a window holding real
 * components (a chart, a table of nodes, a status badge) or a terminal
 * session. Built from the library's own parts, so they follow the theme, stay
 * sharp at any width and never go stale the way a screenshot does.
 */
export interface WindowFrameProps extends Omit<React.ComponentProps<"div">, "title"> {
    /** In the title bar, set in mono: a host, a path, a command. */
    title: string;
    /** The right end of the title bar: a status badge, a region. */
    meta?: React.ReactNode;
}
/** An app window with a title bar. Put real components in it. */
export declare function WindowFrame({ title, meta, className, children, ...props }: WindowFrameProps): React.JSX.Element;
/** What a terminal line is. The tone says how it reads; never colour alone,
 *  so `ok`, `warn` and `error` lines should say so in their text too. */
export type TerminalLineKind = "command" | "output" | "ok" | "warn" | "error" | "comment";
export interface TerminalLine {
    kind: TerminalLineKind;
    text: string;
}
export interface TerminalProps extends Omit<React.ComponentProps<"div">, "title"> {
    /** The title bar: the host or the shell, "jay@node-1". */
    title: string;
    lines: TerminalLine[];
    /** Type the session out once it scrolls into view. The whole session is
     *  shown at once to a reader who asked for reduced motion, and is always
     *  readable in full by a screen reader. */
    play?: boolean;
    meta?: React.ReactNode;
}
/** A shell session: commands with a `$`, then what they printed. */
export declare function Terminal({ title, lines, play, meta, className, ...props }: TerminalProps): React.JSX.Element;
