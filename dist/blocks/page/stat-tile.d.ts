import { Icon } from '@phosphor-icons/react';
import { AsyncStateProps } from './error-state';
import * as React from "react";
/**
 * One tracking value for every uppercase label in the library.
 *
 * The same treatment had drifted to five different letter-spacings across
 * fifteen places in one app, which is what a missing primitive looks like from
 * the outside. Small caps need the extra space; this is the amount.
 */
export declare const LABEL_CLASS = "text-xs font-medium tracking-wider text-muted-foreground uppercase";
export interface SectionLabelProps extends React.ComponentProps<"h2"> {
    /** `h2` by default. Pass the level the page's outline actually needs — a
     *  heading that is only styled small is still a heading to a screen reader. */
    as?: "h2" | "h3" | "h4" | "div";
}
/** The small uppercase heading above a group of fields or cards. */
export declare function SectionLabel({ as: Tag, className, ...props }: SectionLabelProps): React.JSX.Element;
export interface StatTileProps extends Omit<React.ComponentProps<"div">, "title">, TileState {
    label: React.ReactNode;
    value: React.ReactNode;
    /** A line under the value: a comparison, a period, a breakdown. */
    hint?: React.ReactNode;
    icon?: Icon;
    /** Percent change against the previous period: `12.5` reads "+12.5%" in the
     *  dictionary's number format, ahead of the hint. Sets `trend` from its sign. */
    change?: number;
    /** Which way is up. Only colours the hint; the value stays readable. Pass it
     *  with `change` when falling is the good direction, e.g. churn or cost. */
    trend?: "up" | "down" | "flat";
    /**
     * The tile as a toggle, for a row of tiles that filters the table under it.
     * Needs `onPressedChange`: a pressed state nothing can change is a caller bug.
     */
    pressed?: boolean;
    /** Given → the tile is a `<button aria-pressed>`, disabled while it is
     *  loading or failed. Absent → a plain tile, the markup unchanged. */
    onPressedChange?: (pressed: boolean) => void;
}
type TileState = Pick<AsyncStateProps, "loading" | "error">;
/**
 * A number with its name over it, on the same card as every other number.
 *
 * Not a `Card`: a row of these is a row of tiles, and `CardHeader`'s padding
 * makes each one twice the height it needs.
 */
export declare function StatTile({ label, value, hint, icon: TileIcon, change, trend, loading, error, pressed, onPressedChange, className, ...props }: StatTileProps): React.JSX.Element;
export {};
