import * as React from "react"

import { cn } from "@/lib/utils"
import { FIELD_VARIANTS, type FieldVariant } from "@/lib/field-variants"

export type TextareaProps = React.ComponentProps<"textarea"> & {
  /** `ghost` is the tinted field, `cell` the borderless one. Same two
   *  treatments as `Input` and `SelectTrigger`, from the same definition. */
  variant?: FieldVariant
}

function Textarea({ className, variant, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-variant={variant ?? "default"}
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:ring-destructive/40",
        variant
          ? FIELD_VARIANTS[variant]
          : "border border-input bg-transparent shadow-xs focus-visible:border-ring dark:bg-input/30",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
