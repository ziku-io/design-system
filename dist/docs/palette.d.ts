import * as React from "react";
export declare function Swatch({ token, size }: {
    token: string;
    size?: number;
}): React.JSX.Element;
export interface TokenRow {
    token: string;
    use: string;
    /** Render the swatch with this text on it, to show the pairing. */
    on?: string;
}
/**
 * A grid, not a `<table>`. Storybook's docs stylesheet stripes `tr` with
 * `!important`, which an inline style cannot beat, so the rows came out in the
 * chrome's colours instead of the tokens they document. Divs are not targeted.
 */
export declare function TokenTable({ rows }: {
    rows: TokenRow[];
}): React.JSX.Element;
/** The four status families, each shown doing all four of its jobs. */
export declare function StatusPalette(): React.JSX.Element;
/** The brand accent, doing each of its jobs. */
export declare function AccentPalette(): React.JSX.Element;
/** The data-visualisation ramp. */
export declare function ChartPalette(): React.JSX.Element;
