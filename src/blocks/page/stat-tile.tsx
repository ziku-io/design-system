import * as React from "react"
import type { Icon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

/**
 * One tracking value for every uppercase label in the library.
 *
 * The same treatment had drifted to five different letter-spacings across
 * fifteen places in one app, which is what a missing primitive looks like from
 * the outside. Small caps need the extra space; this is the amount.
 */
const LABEL = "text-xs font-medium tracking-wider text-muted-foreground uppercase"

export interface SectionLabelProps extends React.ComponentProps<"h2"> {
  /** `h2` by default. Pass the level the page's outline actually needs — a
   *  heading that is only styled small is still a heading to a screen reader. */
  as?: "h2" | "h3" | "h4" | "div"
}

/** The small uppercase heading above a group of fields or cards. */
export function SectionLabel({ as: Tag = "h2", className, ...props }: SectionLabelProps) {
  return <Tag data-slot="section-label" className={cn(LABEL, className)} {...props} />
}

export interface StatTileProps extends Omit<React.ComponentProps<"div">, "title"> {
  label: React.ReactNode
  value: React.ReactNode
  /** A line under the value: a comparison, a period, a breakdown. */
  hint?: React.ReactNode
  icon?: Icon
  /** Which way is up. Only colours the hint; the value stays readable. */
  trend?: "up" | "down" | "flat"
}

const TREND = {
  up: "text-success-fg",
  down: "text-danger-fg",
  flat: "text-muted-foreground",
} as const

/**
 * A number with its name over it, on the same card as every other number.
 *
 * Not a `Card`: a row of these is a row of tiles, and `CardHeader`'s padding
 * makes each one twice the height it needs.
 */
export function StatTile({
  label,
  value,
  hint,
  icon: TileIcon,
  trend = "flat",
  className,
  ...props
}: StatTileProps) {
  return (
    <div
      data-slot="stat-tile"
      className={cn("rounded-lg border bg-card p-4", className)}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        <span className={LABEL}>{label}</span>
        {TileIcon && <TileIcon className="size-4 shrink-0 text-muted-foreground" />}
      </div>
      {/* `tabular-nums`: a column of these should not shuffle sideways when a
       *  digit changes, and a dashboard that polls changes them constantly. */}
      <div className="mt-2 text-2xl font-semibold tabular-nums">{value}</div>
      {hint && <div className={cn("mt-1 text-xs", TREND[trend])}>{hint}</div>}
    </div>
  )
}
