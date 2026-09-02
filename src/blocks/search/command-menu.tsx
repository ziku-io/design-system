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
import { useStrings } from "@/lib/strings"

export interface CommandMenuItem {
  /** Stable id, also used as the cmdk value when `label` is ambiguous */
  id: string
  label: string
  icon?: Icon
  /**
   * The second line, for what tells two identical labels apart.
   *
   * A palette searching more than one kind of thing will return rows whose
   * labels collide: three tasks all called "Redigir NDA" are three different
   * tasks, and the label alone cannot say which. Put the thing that
   * distinguishes them here, usually what the row belongs to.
   */
  description?: string
  /**
   * Right-aligned identifier, set in mono: a reference, a number, an id.
   *
   * Separate from `shortcut` because it is not one. `shortcut` is letter-spaced
   * for "⌘P", which is exactly wrong for a code read one character at a time.
   */
  meta?: string
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
  placeholder,
  emptyMessage,
  onQueryChange,
  disableShortcut,
}: CommandMenuProps) {
  const t = useStrings().search
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
      <CommandInput placeholder={placeholder ?? t.placeholder} onValueChange={onQueryChange} />
      <CommandList>
        <CommandEmpty>{emptyMessage ?? t.empty}</CommandEmpty>
        {groups.map((group, i) => (
          <React.Fragment key={group.heading ?? i}>
            {i > 0 && <CommandSeparator />}
            <CommandGroup heading={group.heading}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.id}
                  // Everything shown is matchable. cmdk filters on this string,
                  // so a reference or a client name that the eye can see in the
                  // row has to narrow the list when it is typed.
                  value={[item.label, item.description, item.meta, ...(item.keywords ?? [])]
                    .filter(Boolean)
                    .join(" ")}
                  onSelect={() => {
                    item.onSelect?.()
                    setOpen(false)
                  }}
                >
                  {item.icon && <item.icon />}
                  {/* min-w-0 so a long description truncates instead of pushing
                      the meta off the row. */}
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate">{item.label}</span>
                    {item.description && (
                      <span className="truncate text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </span>
                  {item.meta && (
                    <span className="ml-auto shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                      {item.meta}
                    </span>
                  )}
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
  /** Hint shown on the right. Omitted takes the dictionary's; null hides it. */
  shortcut?: string | null
}

/** The search field in the app header. Looks like an input, behaves like a button. */
export function SearchTrigger({ placeholder, shortcut, className, ...props }: SearchTriggerProps) {
  const t = useStrings().search
  // Not a default parameter: the key is a word the app gets to change, and the
  // prop still has to be able to say "no hint at all".
  const hint = shortcut === undefined ? t.shortcut : shortcut
  return (
    <button
      type="button"
      data-slot="search-trigger"
      className={cn(
        "inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56",
        "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    >
      <MagnifyingGlassIcon className="size-4 shrink-0" />
      <span className="flex-1 text-left">{placeholder ?? t.placeholder}</span>
      {hint && (
        <kbd className="pointer-events-none hidden h-5 items-center gap-1 rounded border border-border px-1.5 font-sans text-[10px] font-medium sm:inline-flex">
          {hint}
        </kbd>
      )}
    </button>
  )
}
