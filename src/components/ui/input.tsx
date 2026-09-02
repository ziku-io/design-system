import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  cn(
    "h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  ),
  {
    variants: {
      variant: {
        default:
          "border border-input bg-transparent shadow-xs focus-visible:border-ring dark:bg-input/30",
        /**
         * No chrome until it is pointed at or focused. For a field that sits
         * inside something already bordered — a picker's trigger, a toolbar —
         * where a second box around it reads as a second control.
         */
        ghost:
          "border border-transparent bg-transparent hover:border-input focus-visible:border-ring",
        /**
         * A table cell that happens to be editable: no border, no rounding, and
         * the cell's own padding. It fills the cell, so the grid does not move
         * when a row goes from reading to editing.
         */
        cell: "h-8 rounded-none border-0 bg-transparent px-2 shadow-none hover:bg-accent/40 focus-visible:bg-background focus-visible:ring-inset",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

export type InputProps = React.ComponentProps<"input"> & VariantProps<typeof inputVariants>

function Input({ className, type, variant, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant ?? "default"}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
