import * as React from "react"
import { cn } from "@/lib/utils"

export interface AuthLayoutProps extends React.ComponentProps<"main"> {
  /** Brand mark shown above the card (logo, wordmark) */
  logo?: React.ReactNode
  /** Small text under the card, e.g. terms links */
  footer?: React.ReactNode
}

/** Centered single-column layout for login / register / reset pages. */
export function AuthLayout({ logo, footer, className, children, ...props }: AuthLayoutProps) {
  return (
    <main
      className={cn(
        "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10",
        className,
      )}
      {...props}
    >
      <div className="flex w-full max-w-sm flex-col gap-6">
        {logo && <div className="flex justify-center">{logo}</div>}
        {children}
        {footer && (
          <p className="text-balance px-6 text-center text-xs text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4">
            {footer}
          </p>
        )}
      </div>
    </main>
  )
}
