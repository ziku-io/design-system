import { Progress as ProgressPrimitive } from 'radix-ui';
import * as React from "react";
/** Fill and track per tone. The status fills are the same `--x` as a badge's
 *  dot; the track is that hue faded, so an empty bar still says which it is. */
declare const TONES: {
    readonly default: {
        readonly fill: "bg-primary";
        readonly track: "bg-primary/15";
        readonly stroke: "stroke-primary";
    };
    readonly success: {
        readonly fill: "bg-success";
        readonly track: "bg-success/15";
        readonly stroke: "stroke-success";
    };
    readonly info: {
        readonly fill: "bg-info";
        readonly track: "bg-info/15";
        readonly stroke: "stroke-info";
    };
    readonly warning: {
        readonly fill: "bg-warning";
        readonly track: "bg-warning/20";
        readonly stroke: "stroke-warning";
    };
    readonly danger: {
        readonly fill: "bg-danger";
        readonly track: "bg-danger/15";
        readonly stroke: "stroke-danger";
    };
};
export type ProgressVariant = keyof typeof TONES;
declare const HEIGHTS: {
    readonly sm: "h-1";
    readonly default: "h-2";
    readonly lg: "h-3";
};
export interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
    variant?: ProgressVariant;
    size?: keyof typeof HEIGHTS;
    /** A band of light passing along the fill: the job is alive, not just
     *  partway. Off once it settles. */
    shimmer?: boolean;
    /** A line above the bar, on the left: "Uploading invoices". */
    label?: React.ReactNode;
    /** The percentage above the bar, on the right. Ignored while indeterminate. */
    showValue?: boolean;
}
/**
 * A bar out of 100. `value={null}` (or left out) is indeterminate: a short bar
 * sweeps the track until there is a number to show. Changes in value slide
 * rather than jump.
 */
declare function Progress({ className, value, variant, size, shimmer, label, showValue, ...props }: ProgressProps): React.JSX.Element;
export interface ProgressRingProps extends Omit<React.ComponentProps<"div">, "children"> {
    /** Out of 100. `null` or absent spins an arc instead. */
    value?: number | null;
    variant?: ProgressVariant;
    /** Diameter in px. The number inside shows from 40 up. */
    size?: number;
    /** Stroke width in px. */
    thickness?: number;
    showValue?: boolean;
}
/**
 * The same progress as a ring, for a tile, an avatar slot or a card corner
 * where a bar has no room to run.
 */
declare function ProgressRing({ value, variant, size, thickness, showValue, className, style, ...props }: ProgressRingProps): React.JSX.Element;
export { Progress, ProgressRing };
