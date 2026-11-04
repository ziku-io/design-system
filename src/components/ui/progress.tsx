import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"

/** Fill and track per tone. The status fills are the same `--x` as a badge's
 *  dot; the track is that hue faded, so an empty bar still says which it is. */
const TONES = {
  default: { fill: "bg-primary", track: "bg-primary/15", stroke: "stroke-primary" },
  success: { fill: "bg-success", track: "bg-success/15", stroke: "stroke-success" },
  info: { fill: "bg-info", track: "bg-info/15", stroke: "stroke-info" },
  warning: { fill: "bg-warning", track: "bg-warning/20", stroke: "stroke-warning" },
  danger: { fill: "bg-danger", track: "bg-danger/15", stroke: "stroke-danger" },
} as const
export type ProgressVariant = keyof typeof TONES

const HEIGHTS = { sm: "h-1", default: "h-2", lg: "h-3" } as const

// A soft band of the card colour (the theme has no raw white) passing along
// the fill. Clipped to the fill by the indicator's overflow, so it never runs
// over the empty track.
const SHIMMER =
  "after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:bg-linear-to-r after:from-transparent after:via-card/20 after:to-transparent after:animate-progress-shimmer motion-reduce:after:hidden"

const clamp = (value: number) => Math.min(100, Math.max(0, value))

export interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  variant?: ProgressVariant
  size?: keyof typeof HEIGHTS
  /** A band of light passing along the fill: the job is alive, not just
   *  partway. Off once it settles. */
  shimmer?: boolean
  /** A line above the bar, on the left: "Uploading invoices". */
  label?: React.ReactNode
  /** The percentage above the bar, on the right. Ignored while indeterminate. */
  showValue?: boolean
}

/**
 * A bar out of 100. `value={null}` (or left out) is indeterminate: a short bar
 * sweeps the track until there is a number to show. Changes in value slide
 * rather than jump.
 */
function Progress({
  className,
  value,
  variant = "default",
  size = "default",
  shimmer,
  label,
  showValue,
  ...props
}: ProgressProps) {
  const format = useStrings().format
  const tone = TONES[variant]
  const known = value != null
  const bar = (
    <ProgressPrimitive.Root
      data-slot="progress"
      data-variant={variant}
      value={known ? clamp(value) : null}
      className={cn(
        "relative w-full overflow-hidden rounded-full",
        HEIGHTS[size],
        tone.track,
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full rounded-full",
          tone.fill,
          known
            ? // Sized by width rather than slid in from the left, so the
              // fill's box is the visible part and the shimmer crosses only that.
              "transition-[width] duration-500 ease-settle"
            : "w-1/3 animate-progress-indeterminate motion-reduce:w-full motion-reduce:animate-none motion-reduce:opacity-60",
          shimmer && known && cn("relative overflow-hidden", SHIMMER),
        )}
        style={known ? { width: `${clamp(value)}%` } : undefined}
      />
    </ProgressPrimitive.Root>
  )
  if (!label && !showValue) return bar
  return (
    <div data-slot="progress-field" className="grid w-full gap-1.5">
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="min-w-0 truncate font-medium">{label}</span>
        {showValue && known && (
          <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
            {format.percent(clamp(value))}
          </span>
        )}
      </div>
      {bar}
    </div>
  )
}

export interface ProgressRingProps extends Omit<React.ComponentProps<"div">, "children"> {
  /** Out of 100. `null` or absent spins an arc instead. */
  value?: number | null
  variant?: ProgressVariant
  /** Diameter in px. The number inside shows from 40 up. */
  size?: number
  /** Stroke width in px. */
  thickness?: number
  showValue?: boolean
}

/**
 * The same progress as a ring, for a tile, an avatar slot or a card corner
 * where a bar has no room to run.
 */
function ProgressRing({
  value,
  variant = "default",
  size = 40,
  thickness = 4,
  showValue,
  className,
  style,
  ...props
}: ProgressRingProps) {
  const format = useStrings().format
  const tone = TONES[variant]
  const known = value != null
  const r = (size - thickness) / 2
  const length = 2 * Math.PI * r
  const shown = known ? clamp(value) : 25
  return (
    <div
      data-slot="progress-ring"
      data-variant={variant}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={known ? clamp(value) : undefined}
      className={cn("relative inline-grid shrink-0 place-items-center", className)}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className={cn(
          "absolute inset-0 -rotate-90",
          !known && "animate-spin [animation-duration:1.1s] motion-reduce:animate-none",
        )}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={thickness}
          className={cn(tone.stroke, "opacity-15")}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={length}
          strokeDashoffset={length * (1 - shown / 100)}
          className={cn(tone.stroke, "transition-[stroke-dashoffset] duration-500 ease-settle")}
        />
      </svg>
      {showValue && known && size >= 40 && (
        <span className="relative text-[0.65rem] font-medium tabular-nums">
          {format.percent(clamp(value))}
        </span>
      )}
    </div>
  )
}

export { Progress, ProgressRing }
