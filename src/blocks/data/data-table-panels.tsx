import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import {
  CaretLeftIcon,
  CaretRightIcon,
  ClockIcon,
  EyeIcon,
  FunnelIcon,
  ListBulletsIcon,
  PlusIcon,
  ProhibitIcon,
  SquaresFourIcon,
  StarIcon,
  TableIcon,
  TagIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@phosphor-icons/react"
import type { SortingState } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

import { isBlankFilter, named, type DataTableColumn, type FilterValue } from "./types"
import { VIEW_ICON_NAMES } from "./use-data-table-views"

const VIEW_ICONS: Record<string, Icon> = {
  table: TableIcon,
  list: ListBulletsIcon,
  board: SquaresFourIcon,
  star: StarIcon,
  funnel: FunnelIcon,
  clock: ClockIcon,
  users: UsersIcon,
  tag: TagIcon,
  eye: EyeIcon,
}

export function ViewIcon({ name, className }: { name: string; className?: string }) {
  const I = VIEW_ICONS[name] ?? TableIcon
  return <I className={className} />
}

/** A popover whose body gets a `close` it can call after picking something. */
export function PopoverPanel({
  trigger,
  className,
  align = "start",
  width = "w-64",
  children,
}: {
  trigger: React.ReactNode
  className?: string
  align?: "start" | "center" | "end"
  width?: string
  children: React.ReactNode | ((close: () => void) => React.ReactNode)
}) {
  const [open, setOpen] = React.useState(false)
  const close = React.useCallback(() => setOpen(false), [])
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={className}>{trigger}</PopoverTrigger>
      <PopoverContent align={align} className={cn("p-1.5", width)}>
        {typeof children === "function" ? children(close) : children}
      </PopoverContent>
    </Popover>
  )
}

/** A toolbar icon button that opens a panel, dotted while what it controls is on. */
export function Control({
  icon: Ic,
  label,
  active,
  width,
  children,
}: {
  icon: Icon
  label: string
  active?: boolean
  width?: string
  children: React.ReactNode | ((close: () => void) => React.ReactNode)
}) {
  return (
    <PopoverPanel
      align="end"
      width={width}
      className={cn(
        "relative shrink-0 rounded-md p-1.5 outline-none transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50",
        active ? "text-link" : "text-muted-foreground hover:text-foreground"
      )}
      trigger={
        <span title={label} aria-label={label}>
          <Ic className="size-4" weight={active ? "bold" : "regular"} />
          {active && (
            <span className="absolute top-0.5 right-0.5 size-1.5 rounded-full bg-link" />
          )}
        </span>
      }
    >
      {children}
    </PopoverPanel>
  )
}

const ROW =
  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent"

/** The searchable list of columns behind "+ Filter" and "Group by". */
export function ColumnPicker<T>({
  columns,
  onPick,
  empty,
}: {
  columns: DataTableColumn<T>[]
  onPick: (key: string) => void
  /** An extra "none" row at the top, e.g. "No grouping". */
  empty?: { label: string; onPick: () => void }
}) {
  const [q, setQ] = React.useState("")
  const shown = columns.filter((c) => c.header.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <Input
        className="mb-1 h-8"
        placeholder="Find a column…"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {empty && (
        <button type="button" onClick={empty.onPick} className={cn(ROW, "text-muted-foreground")}>
          <ProhibitIcon className="size-3.5" /> {empty.label}
        </button>
      )}
      {shown.length === 0 && (
        <p className="px-2 py-1.5 text-sm text-muted-foreground">No results.</p>
      )}
      {shown.map((c) => {
        const Ic = c.icon ?? TableIcon
        return (
          <button type="button" key={c.key} onClick={() => onPick(c.key)} className={ROW}>
            <Ic className="size-3.5 shrink-0 text-muted-foreground" /> {c.header}
          </button>
        )
      })}
    </>
  )
}

/** A chip's popover: checkboxes on a facet column, a text box on any other. */
export function FilterPanel<T>({
  col,
  options,
  value,
  onChange,
  onRemove,
}: {
  col: DataTableColumn<T>
  options: { value: string; label: string }[]
  value: FilterValue
  onChange: (value: FilterValue) => void
  onRemove: () => void
}) {
  const [q, setQ] = React.useState("")
  const picked = Array.isArray(value) ? value : []
  const shown = options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase()))

  return (
    <>
      <div className="mb-1 flex items-center justify-between gap-2 border-b px-1 pb-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          {col.header} {col.facet ? "is" : "contains"}
        </span>
        <button
          type="button"
          onClick={onRemove}
          title="Remove filter"
          className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        >
          <TrashIcon className="size-3.5" />
        </button>
      </div>

      {!col.facet ? (
        <Input
          className="h-8"
          placeholder="Type a value…"
          autoFocus
          value={Array.isArray(value) ? "" : value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <>
          {options.length >= 8 && (
            <Input
              className="mb-1 h-8"
              placeholder="Search…"
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          )}
          {shown.length === 0 && (
            <p className="px-2 py-1.5 text-sm text-muted-foreground">No results.</p>
          )}
          {shown.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              <Checkbox
                checked={picked.includes(o.value)}
                onCheckedChange={() =>
                  onChange(
                    picked.includes(o.value)
                      ? picked.filter((p) => p !== o.value)
                      : [...picked, o.value]
                  )
                }
              />
              <span className="truncate">{o.label}</span>
            </label>
          ))}
          {picked.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="mt-1 w-full border-t px-2 pt-2 text-left text-xs text-link hover:underline"
            >
              Clear selection
            </button>
          )}
        </>
      )}
    </>
  )
}

/** The stack of sorts, applied in order — one column is rarely the whole answer. */
export function SortPanel<T>({
  sorting,
  sortable,
  byKey,
  onChange,
}: {
  sorting: SortingState
  sortable: DataTableColumn<T>[]
  byKey: Record<string, DataTableColumn<T>>
  onChange: (sorting: SortingState) => void
}) {
  const free = sortable.filter((c) => !sorting.some((s) => s.id === c.key))
  return (
    <>
      {sorting.map((s, i) => (
        <div key={s.id} className="mb-1 flex items-center gap-1">
          <Select
            value={s.id}
            onValueChange={(v) => onChange(sorting.map((x, n) => (n === i ? { ...x, id: v } : x)))}
          >
            <SelectTrigger className="h-8 min-w-0 flex-1 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[byKey[s.id], ...free].filter(Boolean).map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  {c.header}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={s.desc ? "desc" : "asc"}
            onValueChange={(v) =>
              onChange(sorting.map((x, n) => (n === i ? { ...x, desc: v === "desc" } : x)))
            }
          >
            <SelectTrigger className="h-8 w-28 shrink-0 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
          <button
            type="button"
            title="Remove"
            onClick={() => onChange(sorting.filter((_, n) => n !== i))}
            className="shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-destructive"
          >
            <XIcon className="size-3.5" weight="bold" />
          </button>
        </div>
      ))}
      {free.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([...sorting, { id: free[0].key, desc: false }])}
          className={cn(ROW, "text-muted-foreground")}
        >
          <PlusIcon className="size-3.5" weight="bold" /> Add sort
        </button>
      )}
      {sorting.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([])}
          className={cn(ROW, "text-destructive hover:bg-destructive/10")}
        >
          <TrashIcon className="size-3.5" /> Remove sorting
        </button>
      )}
    </>
  )
}

/** Which named columns are on show. */
export function ColumnToggles<T>({
  columns,
  visibility,
  onToggle,
}: {
  columns: DataTableColumn<T>[]
  visibility: Record<string, boolean>
  onToggle: (key: string, visible: boolean) => void
}) {
  return (
    <>
      {columns.filter(named).map((c) => {
        const visible = visibility[c.key] !== false
        const Ic = c.icon
        return (
          <label
            key={c.key}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent"
          >
            <Checkbox checked={visible} onCheckedChange={(v) => onToggle(c.key, v === true)} />
            {Ic && <Ic className="size-3.5 text-muted-foreground" />}
            {c.header}
          </label>
        )
      })}
    </>
  )
}

/** Naming a view, in the popover its trigger opens. */
export function NameForm({
  trigger,
  className,
  title,
  align = "start",
  defaultValue,
  confirmLabel,
  onSubmit,
}: {
  trigger: React.ReactNode
  className?: string
  title?: string
  align?: "start" | "center" | "end"
  defaultValue: string
  confirmLabel: string
  onSubmit: (name: string) => void
}) {
  return (
    <PopoverPanel
      align={align}
      width="w-64"
      className={className}
      trigger={<span title={title}>{trigger}</span>}
    >
      {(close) => (
        <form
          className="flex gap-1.5"
          onSubmit={(e) => {
            e.preventDefault()
            const name = String(new FormData(e.currentTarget).get("name") ?? "").trim()
            if (name) onSubmit(name)
            close()
          }}
        >
          <Input name="name" className="h-8" required autoFocus defaultValue={defaultValue} />
          <Button type="submit" size="sm" className="shrink-0">
            {confirmLabel}
          </Button>
        </form>
      )}
    </PopoverPanel>
  )
}

export interface SettingsRow {
  key: string
  icon: Icon
  label: string
  value?: string
  panel: React.ReactNode
}

/** The view's own settings: one panel that drills into sub-panels rather than
 *  a menu of popovers opening popovers. */
export function ViewSettings({
  name,
  icon,
  onIcon,
  onRename,
  rows,
  footer,
  onClose,
}: {
  name: string
  icon: string
  onIcon: (icon: string) => void
  onRename: (name: string) => void
  rows: SettingsRow[]
  footer?: React.ReactNode
  onClose: () => void
}) {
  const [openKey, setOpenKey] = React.useState<string | null>(null)
  const [pickingIcon, setPickingIcon] = React.useState(false)
  const open = rows.find((r) => r.key === openKey)

  if (open) {
    return (
      <>
        <div className="mb-1 flex items-center gap-1 border-b pb-1.5">
          <button
            type="button"
            onClick={() => setOpenKey(null)}
            aria-label="Back"
            className="rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <CaretLeftIcon className="size-3.5" weight="bold" />
          </button>
          <span className="text-xs font-medium text-muted-foreground">{open.label}</span>
        </div>
        {open.panel}
      </>
    )
  }

  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">View settings</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <XIcon className="size-3" weight="bold" />
        </button>
      </div>

      <div className="mb-2 flex items-center gap-2">
        <button
          type="button"
          title="Change the icon"
          onClick={() => setPickingIcon((p) => !p)}
          className={cn(
            "shrink-0 rounded-md border p-2 hover:bg-accent",
            pickingIcon ? "bg-accent text-link" : "text-muted-foreground"
          )}
        >
          <ViewIcon name={icon} className="size-4" />
        </button>
        {/* Renames as you type — no second button to press. */}
        <Input
          className="h-8 min-w-0 flex-1 font-medium"
          value={name}
          onChange={(e) => onRename(e.target.value)}
          aria-label="View name"
        />
      </div>
      {pickingIcon && (
        <div className="mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5">
          {VIEW_ICON_NAMES.map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => {
                onIcon(n)
                setPickingIcon(false)
              }}
              className={cn(
                "rounded-md p-1.5 hover:bg-card",
                n === icon ? "bg-card text-link" : "text-muted-foreground"
              )}
            >
              <ViewIcon name={n} className="size-4" />
            </button>
          ))}
        </div>
      )}

      {rows.map((r) => (
        <button type="button" key={r.key} onClick={() => setOpenKey(r.key)} className={ROW}>
          <r.icon className="size-4 shrink-0 text-muted-foreground" />
          <span className="flex-1 truncate">{r.label}</span>
          {r.value && (
            <span className="shrink-0 truncate text-xs text-muted-foreground">{r.value}</span>
          )}
          <CaretRightIcon className="size-3 shrink-0 text-muted-foreground" />
        </button>
      ))}

      {footer && <div className="mt-1 border-t pt-1">{footer}</div>}
    </>
  )
}

export { isBlankFilter }
