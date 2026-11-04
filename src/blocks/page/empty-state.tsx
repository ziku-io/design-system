import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export interface EmptyStateProps extends Omit<React.ComponentProps<"div">, "title"> {
  icon?: Icon
  title: React.ReactNode
  /** `h2` by default: an empty state is usually the only heading under the
   *  page's `h1`. Pass `h3` when it sits inside a titled panel. */
  as?: "h2" | "h3" | "h4"
  /** `danger` tints the icon for a screen that failed. Without it a failed
   *  read and an empty list were the same grey box. */
  tone?: "neutral" | "danger"
  description?: React.ReactNode
  /** Call to action, usually a Button */
  action?: React.ReactNode
}

export function EmptyState({
  icon: Icon,
  title,
  as: Heading = "h2",
  tone = "neutral",
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12",
        className,
      )}
      {...props}
    >
      {Icon && (
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            tone === "danger" ? "bg-danger-subtle" : "bg-muted",
          )}
        >
          <Icon
            aria-hidden
            className={cn("size-6", tone === "danger" ? "text-danger-fg" : "text-muted-foreground")}
          />
        </div>
      )}
      <Heading className="text-base font-semibold">{title}</Heading>
      {description && <p className="max-w-sm text-sm text-muted-foreground">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
