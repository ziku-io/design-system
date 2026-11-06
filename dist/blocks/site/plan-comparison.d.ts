import * as React from "react";
/** `true` is a tick, `false` a dash, a string says how much: "5 seats", "24/7". */
export type PlanValue = boolean | string;
export interface ComparisonRow {
    feature: string;
    /** A line under the feature saying what it means. */
    hint?: string;
    /** One value per plan, keyed by plan `id`. Every plan, no others. */
    values: Record<string, PlanValue>;
}
export interface ComparisonGroup {
    /** "Support", "Security", "Limits". */
    title: string;
    rows: ComparisonRow[];
}
export interface PlanComparisonProps extends React.ComponentProps<"div"> {
    /** The same plans `PricingTable` takes; only `id`, `name` and
     *  `highlighted` are read, so pass that array as it is. */
    plans: {
        id: string;
        name: string;
        highlighted?: boolean;
    }[];
    groups: ComparisonGroup[];
}
/**
 * Every plan side by side, feature by feature: the page under the pricing
 * cards, for the reader who needs to know whether SSO is in the middle plan.
 * The feature column sticks while the plans scroll sideways on a phone; the
 * highlighted plan's column is tinted.
 */
export declare function PlanComparison(props: PlanComparisonProps): React.JSX.Element;
