import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface SectionLabelProps extends React.ComponentProps<"h2"> {
    /** `h2` by default. Pass the level the page's outline actually needs — a
     *  heading that is only styled small is still a heading to a screen reader. */
    as?: "h2" | "h3" | "h4" | "div";
}
/** The small uppercase heading above a group of fields or cards. */
export declare function SectionLabel({ as: Tag, className, ...props }: SectionLabelProps): React.JSX.Element;
export interface StatTileProps extends Omit<React.ComponentProps<"div">, "title"> {
    label: React.ReactNode;
    value: React.ReactNode;
    /** A line under the value: a comparison, a period, a breakdown. */
    hint?: React.ReactNode;
    icon?: Icon;
    /** Which way is up. Only colours the hint; the value stays readable. */
    trend?: "up" | "down" | "flat";
}
/**
 * A number with its name over it, on the same card as every other number.
 *
 * Not a `Card`: a row of these is a row of tiles, and `CardHeader`'s padding
 * makes each one twice the height it needs.
 */
export declare function StatTile({ label, value, hint, icon: TileIcon, trend, className, ...props }: StatTileProps): React.JSX.Element;
