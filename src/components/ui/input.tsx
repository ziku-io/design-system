import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { FIELD_VARIANTS } from "@/lib/field-variants"

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
        ghost: FIELD_VARIANTS.ghost,
        cell: `h-8 px-2 ${FIELD_VARIANTS.cell}`,
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
