import * as React from "react"
import type { Icon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { SURFACE } from "@/lib/surfaces"
import { useStrings } from "@/lib/strings"
import { PageHeader } from "@/blocks/page/page-header"
import { ErrorState, errorTitle, type AsyncStateProps } from "@/blocks/page/error-state"
import { Skeleton } from "@/components/ui/skeleton"

export interface DashboardProps extends Omit<React.ComponentProps<"div">, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  /** Right of the title: a period select, an export, the primary action. */
  actions?: React.ReactNode
  /** A row of `StatTile`s. Any count: the row fits as many as the width allows
   *  and wraps the rest, so four tiles and seven tiles need no layout change. */
  stats?: React.ReactNode
  /** `DashboardPanel`s, laid out on a two-column grid from `lg` up. */
  children?: React.ReactNode
}

/**
 * The home screen of an app: a header, a row of numbers, and panels under it.
 *
 * Layout only. The page fetches its own data and passes finished tiles and
 * panels in, the same contract as every other block.
 */
export function Dashboard({
  title,
  description,
  actions,
  stats,
  children,
  className,
  ...props
}: DashboardProps) {
  return (
    <div data-slot="dashboard" className={cn("flex flex-col gap-6", className)} {...props}>
      <PageHeader title={title} description={description} actions={actions} />
      {stats && (
        // `min(11rem, 100%)`: at 320px a plain 11rem minimum plus the page
        // gutter is wider than the screen, and the row would scroll sideways.
        <div
          data-slot="dashboard-stats"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(11rem,100%),1fr))] gap-3"
        >
          {stats}
        </div>
      )}
      {children && (
        <div data-slot="dashboard-panels" className="grid gap-4 lg:grid-cols-2">
          {children}
        </div>
      )}
    </div>
  )
}

export interface DashboardPanelProps
  extends Omit<React.ComponentProps<"section">, "title">, AsyncStateProps {
  title: React.ReactNode
  description?: React.ReactNode
  /** Right of the title, usually a "View all" link. */
  action?: React.ReactNode
  /** `full` takes both columns of the grid: a work queue table, a wide chart. */
  span?: "half" | "full"
}

/** One titled section of a dashboard. A `section` with its own heading, so the
 *  page outline reads as the list of panels. */
export function DashboardPanel({
  title,
  description,
  action,
  span = "half",
  loading,
  error,
  onRetry,
  className,
  children,
  ...props
}: DashboardPanelProps) {
  const id = React.useId()
  const t = useStrings()
  return (
    <section
      data-slot="dashboard-panel"
      aria-labelledby={id}
      className={cn(
        SURFACE,
        "flex min-w-0 flex-col gap-3 p-4",
        span === "full" && "lg:col-span-2",
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="grid gap-1">
          <h2 id={id} className="text-sm font-semibold">
            {title}
          </h2>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {action && <div className="text-sm">{action}</div>}
      </div>
      {/* The title stays in every state: the reader still needs to know which
       *  panel is loading or which one failed. */}
      {loading ? (
        <div role="status" aria-label={t.common.loading} className="grid gap-2.5">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ) : error ? (
        <ErrorState variant="alert" title={errorTitle(error)} onRetry={onRetry} />
      ) : (
        children
      )}
    </section>
  )
}

export interface ActivityItem {
  id: string
  /** What happened: "Ana approved dossier 214". */
  title: React.ReactNode
  description?: React.ReactNode
  at: Date
  icon?: Icon
}

export interface ActivityListProps extends React.ComponentProps<"ol">, AsyncStateProps {
  /** `undefined` only while `loading` or with an `error`: a list that has
   *  arrived and is empty is `[]`, and says so. */
  items: ActivityItem[] | undefined
}

/** What happened lately, newest first as given. The caller sorts. */
export function ActivityList({
  items,
  loading,
  error,
  onRetry,
  className,
  ...props
}: ActivityListProps) {
  const t = useStrings()
  if (loading)
    return (
      <div role="status" aria-label={t.common.loading} className={cn("grid gap-4", className)}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-4 shrink-0" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-3 w-20 shrink-0" />
          </div>
        ))}
      </div>
    )
  if (error)
    return (
      <ErrorState
        variant="alert"
        title={errorTitle(error)}
        onRetry={onRetry}
        className={className}
      />
    )
  // Neither loading nor failed, and still nothing: the caller dropped the data.
  if (items === undefined)
    throw new Error("ActivityList: items is undefined but the list is neither loading nor failed")
  if (items.length === 0)
    return <p className="py-4 text-sm text-muted-foreground">{t.dashboard.noActivity}</p>
  return (
    <ol data-slot="activity-list" className={cn("flex flex-col divide-y", className)} {...props}>
      {items.map(({ id, title, description, at, icon: ItemIcon }) => (
        <li key={id} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
          {ItemIcon && (
            <ItemIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          )}
          <div className="grid min-w-0 flex-1 gap-0.5">
            <span className="text-sm">{title}</span>
            {description && (
              <span className="truncate text-xs text-muted-foreground">{description}</span>
            )}
          </div>
          <time
            dateTime={at.toISOString()}
            className="shrink-0 text-xs text-muted-foreground tabular-nums"
          >
            {t.format.dateTime(at)}
          </time>
        </li>
      ))}
    </ol>
  )
}
