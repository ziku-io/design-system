import * as React from "react";
export interface WordmarkProps extends React.ComponentProps<"span"> {
    /** The product name, as it should read. Case is kept: "ziku" stays lowercase. */
    children: string;
}
/**
 * A logo set from the product name, for an app that has no drawn one yet.
 *
 * Tight negative tracking at the heaviest weight the house rules allow (600),
 * the recipe of the Stripe and Venmo wordmarks: one typeface, no icon,
 * recognisable from its shape alone. Foreground, not the brand colour: the
 * rules keep `text-primary` off text, and `text-link` would make a logo that
 * goes nowhere look clickable. Size it with a text class; the tracking is in
 * `em`, so it scales.
 */
export declare function Wordmark({ children, className, ...props }: WordmarkProps): React.JSX.Element;
