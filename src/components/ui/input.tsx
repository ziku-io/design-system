import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { UploadSimpleIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { FIELD_DEFAULT, FIELD_VARIANTS } from "@/lib/field-variants"
import { useStrings } from "@/lib/strings"

const inputVariants = cva(
  cn(
    "w-full min-w-0 rounded-md py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
  ),
  {
    variants: {
      variant: {
        default: FIELD_DEFAULT,
        ghost: FIELD_VARIANTS.ghost,
        cell: `px-2 ${FIELD_VARIANTS.cell}`,
      },
      // The same two heights as Button, SelectTrigger and Toggle, so a toolbar
      // row of mixed controls lines up without a height override on any of them.
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2.5",
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
  if (type === "file")
    return <FileInput className={className} variant={variant} size={size} {...props} />
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

/**
 * `type="file"` as a field rather than the browser's grey button and "No file
 * chosen", which looked like nothing else on the form and could not be styled.
 *
 * The real input is still there, visually hidden inside the label: the label
 * makes the whole box open the picker, the keyboard and a screen reader reach
 * the native control, and `FormControl`, `ref`, `name` and `onChange` land on
 * it unchanged. The box takes the field's focus and invalid states from it.
 *
 * ponytail: the shown name comes from the last change event, so a form reset
 * leaves it until the next pick. A controlled `files` prop is the upgrade path.
 */
function FileInput({
  className,
  variant,
  size,
  onChange,
  disabled,
  ...props
}: Omit<InputProps, "type">) {
  const t = useStrings().ui
  const [names, setNames] = React.useState<string[]>([])
  const label =
    names.length === 0 ? t.chooseFile : names.length === 1 ? names[0] : t.filesChosen(names.length)
  return (
    <label
      data-slot="input"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      data-disabled={disabled || undefined}
      className={cn(
        inputVariants({ variant, size }),
        "flex cursor-pointer items-center gap-2 pl-1.5",
        "focus-within:border-ring focus-within:ring-[1.5px] focus-within:ring-ring/80",
        "has-[[aria-invalid=true]]:border-destructive",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
    >
      {/* Brand-tinted, so the box reads as "pick something" before its text does. */}
      <span
        aria-hidden
        className={cn(
          "flex shrink-0 items-center justify-center rounded-sm bg-primary-button text-primary-button-foreground",
          size === "sm" ? "size-5" : "size-6",
        )}
      >
        <UploadSimpleIcon className="size-3.5" />
      </span>
      <span
        className={cn("min-w-0 truncate text-sm", names.length === 0 && "text-muted-foreground")}
      >
        {label}
      </span>
      <input
        type="file"
        className="sr-only"
        disabled={disabled}
        onChange={(event) => {
          setNames(Array.from(event.target.files ?? [], (file) => file.name))
          onChange?.(event)
        }}
        {...props}
      />
    </label>
  )
}

export { Input, inputVariants }
