import * as React from "react"

import { cn } from "@/lib/utils"

export interface WordmarkProps extends React.ComponentProps<"span"> {
  /** The product name, as it should read. Case is kept: "ziku" stays lowercase. */
  children: string
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
// ponytail: text only, a drawn mark goes in `brand`/`logo` as a node instead.
export function Wordmark({ children, className, ...props }: WordmarkProps) {
  if (children.trim() === "") throw new Error("Wordmark: children must be a non-empty name")
  return (
    <span
      data-slot="wordmark"
      className={cn(
        "inline-block text-xl leading-none font-semibold tracking-[-0.05em] whitespace-nowrap text-foreground select-none",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
