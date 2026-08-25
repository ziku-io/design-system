import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"

export interface CommandMenuItem {
  /** Stable id, also used as the cmdk value when `label` is ambiguous */
  id: string
  label: string
  icon?: Icon
  /** Rendered right-aligned, e.g. "⌘P" */
  shortcut?: string
  /** Extra words to match on that aren't shown */
  keywords?: string[]
  onSelect?: () => void
}

export interface CommandMenuGroup {
  heading?: string
  items: CommandMenuItem[]
}

export interface CommandMenuProps {
  groups: CommandMenuGroup[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placeholder?: string
  emptyMessage?: string
  /** Fires as the query changes — use it to load results from the server */
  onQueryChange?: (query: string) => void
  /** Disable the built-in ⌘K / Ctrl+K binding */
  disableShortcut?: boolean
}

/**
 * Command palette (cmdk). Opens on ⌘K / Ctrl+K, or control it with `open`.
 * This is the standard search surface for every app — don't hand-roll another.
 */
export function CommandMenu({
  groups,
  open,
  onOpenChange,
  placeholder = "Search…",
  emptyMessage = "No results found.",
  onQueryChange,
  disableShortcut,
}: CommandMenuProps) {
  const [uncontrolled, setUncontrolled] = React.useState(false)
  const isOpen = open ?? uncontrolled
  const setOpen = onOpenChange ?? setUncontrolled

  React.useEffect(() => {
    if (disableShortcut) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!isOpen)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [disableShortcut, isOpen, setOpen])

  return (
    <CommandDialog open={isOpen} onOpenChange={setOpen} showCloseButton={false}>
      <CommandInput placeholder={placeholder} onValueChange={onQueryChange} />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        {groups.map((group, i) => (
          <React.Fragment key={group.heading ?? i}>
            {i > 0 && <CommandSeparator />}
            <CommandGroup heading={group.heading}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={`${item.label} ${item.keywords?.join(" ") ?? ""}`}
                  onSelect={() => {
                    item.onSelect?.()
                    setOpen(false)
                  }}
                >
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
                  {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                </CommandItem>
              ))}
            </CommandGroup>
          </React.Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  )
}

export interface SearchTriggerProps extends React.ComponentProps<"button"> {
  placeholder?: string
  /** Hint shown on the right. Set to null to hide it. */
  shortcut?: string | null
}

/** The search field in the app header. Looks like an input, behaves like a button. */
export function SearchTrigger({
  placeholder = "Search…",
  shortcut = "⌘K",
  className,
  ...props
}: SearchTriggerProps) {
  return (
    <button
      type="button"
      data-slot="search-trigger"
      className={cn(
        "inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56",
        "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      <MagnifyingGlassIcon className="size-4 shrink-0" />
      <span className="flex-1 text-left">{placeholder}</span>
      {shortcut && (
        <kbd className="pointer-events-none hidden h-5 items-center gap-1 rounded border border-border px-1.5 font-sans text-[10px] font-medium sm:inline-flex">
          {shortcut}
        </kbd>
      )}
    </button>
  )
}
