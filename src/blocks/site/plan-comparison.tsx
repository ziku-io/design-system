import * as React from "react"
import { CheckIcon, MinusIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { LABEL_CLASS } from "@/blocks/page/stat-tile"
import { useStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"
import { assertAnchors } from "./sections"

/** `true` is a tick, `false` a dash, a string says how much: "5 seats", "24/7". */
export type PlanValue = boolean | string

export interface ComparisonRow {
  feature: string
  /** A line under the feature saying what it means. */
  hint?: string
  /** One value per plan, keyed by plan `id`. Every plan, no others. */
  values: Record<string, PlanValue>
}

export interface ComparisonGroup {
  /** "Support", "Security", "Limits". */
  title: string
  rows: ComparisonRow[]
}

export interface PlanComparisonProps extends React.ComponentProps<"div"> {
  /** The same plans `PricingTable` takes; only `id`, `name` and
   *  `highlighted` are read, so pass that array as it is. */
  plans: { id: string; name: string; highlighted?: boolean }[]
  groups: ComparisonGroup[]
}

function assertComparison({ plans, groups }: PlanComparisonProps) {
  if (plans.length < 2 || plans.length > 4) {
    throw new Error("PlanComparison: compares 2 to 4 plans, got " + plans.length)
  }
  assertAnchors(
    "PlanComparison",
    plans.map((p) => p.id),
  )
  if (plans.filter((p) => p.highlighted).length > 1) {
    throw new Error("PlanComparison: at most one plan is highlighted")
  }
  if (groups.length === 0) throw new Error("PlanComparison: needs at least one group")
  const ids = plans.map((p) => p.id)
  for (const group of groups) {
    if (group.rows.length === 0)
      throw new Error("PlanComparison: group " + JSON.stringify(group.title) + " has no rows")
    for (const row of group.rows) {
      // A missing value would render as an empty cell, which reads as "not
      // included" and is a claim nobody made. An extra one is a typo'd id.
      const keys = Object.keys(row.values)
      const missing = ids.filter((id) => !keys.includes(id))
      const unknown = keys.filter((k) => !ids.includes(k))
      if (missing.length || unknown.length) {
        throw new Error(
          "PlanComparison: row " +
            JSON.stringify(row.feature) +
            " needs a value for exactly " +
            ids.join(", ") +
            (missing.length ? "; missing " + missing.join(", ") : "") +
            (unknown.length ? "; unknown " + unknown.join(", ") : ""),
        )
      }
    }
  }
}

/**
 * Every plan side by side, feature by feature: the page under the pricing
 * cards, for the reader who needs to know whether SSO is in the middle plan.
 * The feature column sticks while the plans scroll sideways on a phone; the
 * highlighted plan's column is tinted.
 */
export function PlanComparison(props: PlanComparisonProps) {
  assertComparison(props)
  const { plans, groups, className, ...rest } = props
  const t = useStrings().site
  const tint = (plan: { highlighted?: boolean }) => plan.highlighted && "bg-accent/50"

  return (
    <div data-slot="plan-comparison" className={cn("min-w-0", className)} {...rest}>
      <Table className="min-w-[36rem] table-fixed">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="sticky left-0 z-10 w-[40%] bg-background">
              <span className="sr-only">{t.feature}</span>
            </TableHead>
            {plans.map((plan) => (
              <TableHead
                key={plan.id}
                scope="col"
                className={cn("text-center text-sm font-semibold text-foreground", tint(plan))}
              >
                <span className="inline-flex flex-wrap items-center justify-center gap-2">
                  {plan.name}
                  {plan.highlighted && <Badge>{t.recommended}</Badge>}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {groups.map((group) => (
          <TableBody key={group.title}>
            <TableRow className="hover:bg-transparent">
              <TableHead
                scope="colgroup"
                colSpan={plans.length + 1}
                className={cn(LABEL_CLASS, "sticky left-0 bg-background pt-6")}
              >
                {group.title}
              </TableHead>
            </TableRow>
            {group.rows.map((row) => (
              <TableRow key={row.feature} className="hover:bg-transparent">
                <TableHead
                  scope="row"
                  className="sticky left-0 z-10 h-auto bg-background py-3 align-top font-normal whitespace-normal text-foreground"
                >
                  {row.feature}
                  {row.hint && (
                    <span className="block text-xs text-muted-foreground">{row.hint}</span>
                  )}
                </TableHead>
                {plans.map((plan) => {
                  const value = row.values[plan.id]
                  return (
                    <TableCell
                      key={plan.id}
                      className={cn("py-3 text-center align-top whitespace-normal", tint(plan))}
                    >
                      {value === true ? (
                        <>
                          <CheckIcon aria-hidden className="mx-auto size-4 text-success-fg" />
                          <span className="sr-only">{t.included}</span>
                        </>
                      ) : value === false ? (
                        <>
                          <MinusIcon aria-hidden className="mx-auto size-4 text-muted-foreground" />
                          <span className="sr-only">{t.notIncluded}</span>
                        </>
                      ) : (
                        <span className="tabular-nums">{value}</span>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        ))}
      </Table>
    </div>
  )
}
