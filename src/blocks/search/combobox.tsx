import * as React from "react"

import { Input } from "@/components/ui/input"
import { Popover, PopoverAnchor, PopoverContent } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"

export interface ComboboxItem {
  id: string
  label: string
  /** A second line: an email, a reference, a department. */
  hint?: string
}

export interface ComboboxProps {
  items: ComboboxItem[]
  onSelect: (item: ComboboxItem) => void
  /** The field's accessible name. Required: a search box with no name is read
   *  out as "combobox" and nothing else. */
  label: string
  placeholder?: string
  /** Controlled query, for a caller that fetches its own results. */
  query?: string
  onQueryChange?: (query: string) => void
  /** Shown in place of the list when `items` is empty and something was typed. */
  empty?: React.ReactNode
  /** Keeps the list open and the empty message away while a fetch is in flight. */
  loading?: boolean
  autoFocus?: boolean
  disabled?: boolean
  className?: string
}

/**
 * A search box with its results underneath, inside a form.
 *
 * `CommandMenu` is the ⌘K dialog; this is the field. Every app that needed one
 * hand-rolled it and re-did the APG work badly — the bug is always the same, and
 * it is not cosmetic: Enter took `items[0]` however many matched, so typing
 * "Sil" for Ana Silva assigned the work to António Silvestre. Here Enter takes
 * what is highlighted, and the highlight is clamped when the list shrinks under
 * it rather than pointing past the end.
 *
 * The list is a portalled `Popover` anchored to the input. It used to be
 * absolutely positioned inside the field, which any `overflow` ancestor (a
 * card, a modal body, a scrolling form) clipped, so the results sat below the
 * fold of their own container. The popover opens below, flips above when there
 * is no room, and caps its height to what is on screen. Focus never leaves the
 * input: the popover is told not to take it, and the options are reached
 * through `aria-activedescendant`, as before.
 */
export function Combobox({
  items,
  onSelect,
  label,
  placeholder,
  query,
  onQueryChange,
  empty,
  loading = false,
  autoFocus,
  disabled,
  className,
}: ComboboxProps) {
  const t = useStrings().common
  const id = React.useId()
  const [own, setOwn] = React.useState("")
  const text = query ?? own
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(0)
  const listRef = React.useRef<HTMLUListElement>(null)

  // The list shrinking under the highlight is what produces the wrong-person
  // bug: an index of 3 into a list of one still reads as "something is
  // selected", and Enter then takes whatever the renderer put there.
  const activeIndex = items.length === 0 ? -1 : Math.min(active, items.length - 1)
  const activeId = activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined

  React.useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" })
  }, [activeIndex, open])

  const setText = (next: string) => {
    if (query === undefined) setOwn(next)
    onQueryChange?.(next)
    setActive(0)
    setOpen(true)
  }

  const choose = (item: ComboboxItem) => {
    onSelect(item)
    setOpen(false)
  }

  const showList = open && (loading || items.length > 0 || text.length > 0)

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false)
      return
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      if (!open) {
        setOpen(true)
        return
      }
      if (items.length === 0) return
      // Wrapping, because a list this short makes the alternative — a key that
      // silently stops working at the end — feel like a broken control.
      const step = event.key === "ArrowDown" ? 1 : -1
      setActive((i) => (Math.min(i, items.length - 1) + step + items.length) % items.length)
      return
    }
    if (event.key === "Home" || event.key === "End") {
      if (!open || items.length === 0) return
      event.preventDefault()
      setActive(event.key === "Home" ? 0 : items.length - 1)
      return
    }
    if (event.key === "Enter") {
      const item = activeIndex >= 0 ? items[activeIndex] : undefined
      if (!open || !item) return
      // Only when it is taking the key: an Enter that falls through here would
      // submit the form the field is sitting in.
      event.preventDefault()
      choose(item)
    }
  }

  return (
    <Popover open={showList} onOpenChange={(next) => !next && setOpen(false)}>
      <PopoverAnchor asChild>
        <div className={className}>
          <Input
            id={id}
            role="combobox"
            type="text"
            autoComplete="off"
            aria-label={label}
            aria-expanded={showList}
            aria-controls={`${id}-list`}
            aria-autocomplete="list"
            aria-activedescendant={showList ? activeId : undefined}
            value={text}
            placeholder={placeholder}
            autoFocus={autoFocus}
            disabled={disabled}
            onChange={(event) => setText(event.target.value)}
            onFocus={() => setOpen(true)}
            // After a pick the field keeps focus, so a second click fires no
            // focus event; without this it would not reopen.
            onClick={() => setOpen(true)}
            // The list never takes focus (every mousedown in it is cancelled), so
            // a blur means the user went somewhere else.
            onBlur={() => setOpen(false)}
            onKeyDown={onKeyDown}
          />
        </div>
      </PopoverAnchor>
      <PopoverContent
        asChild
        // The input keeps focus; the popover would otherwise move it into the
        // list on open and every keystroke after that would be lost.
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
        // A click back in the field is not a click outside the list.
        onInteractOutside={(event) => {
          if (event.target instanceof Node && document.getElementById(id)?.contains(event.target))
            event.preventDefault()
        }}
        // Matches the field's width; 16rem tall at most, less when the screen
        // has less room on the side it opened.
        className="w-(--radix-popover-trigger-width) max-h-[min(16rem,var(--radix-popover-content-available-height))] overscroll-contain p-1"
      >
        <ul
          ref={listRef}
          id={`${id}-list`}
          role="listbox"
          aria-label={label}
          aria-busy={loading || undefined}
          // A mousedown anywhere in the list, the scrollbar included, would
          // blur the input and close it mid-scroll.
          onMouseDown={(event) => event.preventDefault()}
        >
          {items.map((item, i) => (
            <li
              key={item.id}
              id={`${id}-option-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              data-active={i === activeIndex}
              // `onMouseDown`, not `onClick`: click fires after blur, and the
              // blur has already been told to close the list.
              onMouseDown={(event) => {
                event.preventDefault()
                choose(item)
              }}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "cursor-pointer rounded-sm px-2 py-1.5 text-sm",
                i === activeIndex && "bg-accent text-accent-foreground",
              )}
            >
              <div className="truncate">{item.label}</div>
              {item.hint && (
                <div className="truncate text-xs text-muted-foreground">{item.hint}</div>
              )}
            </li>
          ))}
          {/* The prop existed and drew nothing: a slow search looked like one
           *  with no results until the first item arrived. */}
          {loading && items.length === 0 && (
            <li className="px-2 py-1.5 text-sm text-muted-foreground">{t.loading}</li>
          )}
          {!loading && items.length === 0 && (
            <li className="px-2 py-1.5 text-sm text-muted-foreground">{empty ?? t.noResults}</li>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
