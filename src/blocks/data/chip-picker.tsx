import * as React from "react"
import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"

export interface ChipOption {
  value: string
  label: string
  /** Classes for this value's badge. A set whose members carry a colour — a
   *  service line, a stage, a tag — is read by shape before it is read by word,
   *  and one grey badge per value throws that away. */
  className?: string
}

export interface ChipPickerProps {
  options: ChipOption[]
  value: string[]
  onChange: (value: string[]) => void
  /** What the trigger says when nothing is picked, and its accessible name. */
  placeholder: string
  /** Chips before the rest collapse into a "+N". */
  max?: number
  disabled?: boolean
  className?: string
}

/**
 * Several values from a small fixed set, with the picked ones visible.
 *
 * `Select` takes one and closes on pick, so a tag field or a status filter had
 * to be built over `Popover` again in every app — and the one that did styled
 * its trigger with an app-level class, which is a consumer reaching into this
 * library's territory. That class is now `Input variant="ghost"` and this is
 * the picker over it.
 *
 * ponytail: no search box inside. It is for a fixed set short enough to read,
 * and a set long enough to need searching wants `DataTable`'s facet panel.
 */
export function ChipPicker({
  options,
  value,
  onChange,
  placeholder,
  max = 3,
  disabled,
  className,
}: ChipPickerProps) {
  const t = useStrings().common
  const picked = options.filter((option) => value.includes(option.value))
  const shown = picked.slice(0, max)
  const rest = picked.length - shown.length

  const toggle = (option: string) =>
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option])

  return (
    <Popover>
      <PopoverTrigger
        type="button"
        disabled={disabled}
        aria-label={placeholder}
        className={cn(
          "flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
      >
        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
          {shown.length === 0 ? (
            <span className="text-muted-foreground">{placeholder}</span>
          ) : (
            shown.map((option) => (
              <Badge
                key={option.value}
                variant="secondary"
                className={cn("max-w-40 truncate", option.className)}
              >
                {option.label}
              </Badge>
            ))
          )}
          {rest > 0 && <span className="text-xs text-muted-foreground">+{rest}</span>}
        </span>
        <CaretDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-56 p-1">
        <div role="listbox" aria-multiselectable aria-label={placeholder}>
          {options.length === 0 && (
            <p className="px-2 py-1.5 text-sm text-muted-foreground">{t.noResults}</p>
          )}
          {options.map((option) => {
            const on = value.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={on}
                onClick={() => toggle(option.value)}
                className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:outline-none"
              >
                {/* Decorative: the row is the control and carries the state in
                 *  `aria-selected`, so a second announcement would double it. */}
                <Checkbox checked={on} tabIndex={-1} aria-hidden className="pointer-events-none" />
                {option.className ? (
                  <Badge variant="secondary" className={cn("truncate", option.className)}>
                    {option.label}
                  </Badge>
                ) : (
                  <span className="min-w-0 flex-1 truncate">{option.label}</span>
                )}
                {option.className && <span className="min-w-0 flex-1" />}
                {on && <CheckIcon className="size-3.5 shrink-0" weight="bold" />}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
