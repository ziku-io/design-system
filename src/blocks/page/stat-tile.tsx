import * as React from "react"
import type { Icon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { SURFACE } from "@/lib/surfaces"
import { useStrings } from "@/lib/strings"
import { Skeleton } from "@/components/ui/skeleton"
import { errorTitle, type AsyncStateProps } from "@/blocks/page/error-state"

/**
 * One tracking value for every uppercase label in the library.
 *
 * The same treatment had drifted to five different letter-spacings across
 * fifteen places in one app, which is what a missing primitive looks like from
 * the outside. Small caps need the extra space; this is the amount.
 */
export const LABEL_CLASS = "text-xs font-medium tracking-wider text-muted-foreground uppercase"
const LABEL = LABEL_CLASS

export interface SectionLabelProps extends React.ComponentProps<"h2"> {
  /** `h2` by default. Pass the level the page's outline actually needs — a
   *  heading that is only styled small is still a heading to a screen reader. */
  as?: "h2" | "h3" | "h4" | "div"
}

/** The small uppercase heading above a group of fields or cards. */
export function SectionLabel({ as: Tag = "h2", className, ...props }: SectionLabelProps) {
  return <Tag data-slot="section-label" className={cn(LABEL, className)} {...props} />
}

export interface StatTileProps extends Omit<React.ComponentProps<"div">, "title">, TileState {
  label: React.ReactNode
  value: React.ReactNode
  /** A line under the value: a comparison, a period, a breakdown. */
  hint?: React.ReactNode
  icon?: Icon
  /** Percent change against the previous period: `12.5` reads "+12.5%" in the
   *  dictionary's number format, ahead of the hint. Sets `trend` from its sign. */
  change?: number
  /** Which way is up. Only colours the hint; the value stays readable. Pass it
   *  with `change` when falling is the good direction, e.g. churn or cost. */
  trend?: "up" | "down" | "flat"
}

// No `onRetry`: a tile is too small for a button. The panel or page that
// fetched the row of tiles carries the retry.
type TileState = Pick<AsyncStateProps, "loading" | "error">

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
  change,
  trend,
  loading,
  error,
  className,
  ...props
}: StatTileProps) {
  const strings = useStrings()
  const t = strings.dashboard
  const tone = trend ?? (change === undefined || change === 0 ? "flat" : change > 0 ? "up" : "down")
  return (
    <div data-slot="stat-tile" className={cn(SURFACE, "p-4", className)} {...props}>
      <div className="flex items-center justify-between gap-2">
        <span className={LABEL}>{label}</span>
        {TileIcon && <TileIcon aria-hidden className="size-4 shrink-0 text-muted-foreground" />}
      </div>
      {/* `tabular-nums`: a column of these should not shuffle sideways when a
       *  digit changes, and a dashboard that polls changes them constantly. */}
      {loading ? (
        // The same two lines the tile will have, so the row does not jump.
        <div role="status" aria-label={strings.common.loading}>
          <Skeleton className="mt-2 h-8 w-24" />
          <Skeleton className="mt-1.5 h-3 w-32" />
        </div>
      ) : error ? (
        <>
          <div className="mt-2 text-2xl font-semibold text-muted-foreground" aria-hidden>
            —
          </div>
          <div className="mt-1 text-xs text-danger-fg">
            {errorTitle(error) ?? strings.common.loadFailed}
          </div>
        </>
      ) : (
        <div className="mt-2 text-2xl font-semibold tabular-nums">{value}</div>
      )}
      {!loading && !error && (hint || change !== undefined) && (
        <div className={cn("mt-1 flex flex-wrap gap-x-1 text-xs", TREND[tone])}>
          {change !== undefined && (
            <span className="font-medium tabular-nums">{t.change(change)}</span>
          )}
          {hint && <span>{hint}</span>}
        </div>
      )}
    </div>
  )
}
