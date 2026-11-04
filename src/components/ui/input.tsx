import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { FIELD_VARIANTS } from "@/lib/field-variants"

const inputVariants = cva(
  cn(
    "w-full min-w-0 rounded-md py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
  ),
  {
    variants: {
      variant: {
        default: "border border-input bg-transparent shadow-xs focus-visible:border-ring",
        ghost: FIELD_VARIANTS.ghost,
        cell: `px-2 ${FIELD_VARIANTS.cell}`,
      },
      // The same two heights as Button, SelectTrigger and Toggle, so a toolbar
      // row of mixed controls lines up without a height override on any of them.
      size: {
        default: "h-9 px-3 file:h-7",
        sm: "h-8 px-2.5 file:h-6",
      },
    },
    compoundVariants: [
      // A table cell is the row's height whatever size it was given.
      { variant: "cell", className: "h-8 px-2" },
    ],
    defaultVariants: { variant: "default", size: "default" },
  },
)

/**
 * `size` is the control height, as on Button and SelectTrigger, not the HTML
 * attribute (a width in characters). Width here always comes from CSS, and one
 * word meaning two things on neighbouring controls is the bug this avoids.
 */
export type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>

function Input({ className, type, variant, size, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
