import * as React from "react"

import { cn } from "@/lib/utils"

/** What the drag carries, under our own type so a link's own `text/plain`
 *  (its URL) cannot be mistaken for a card. */
const DRAG_TYPE = "application/x-ziku-card"

export interface KanbanColumn<T> {
  key: string
  title: string
  items: T[]
  /** Line under the title, e.g. the sum of the deals in it. */
  subtitle?: string
}

export interface KanbanProps<T> {
  columns: KanbanColumn<T>[]
  renderCard: (item: T) => React.ReactNode
  /** Stable key per item; also what the drag carries. */
  itemKey: (item: T) => string
  onDrop?: (item: T, columnKey: string) => void
  /** Items returning false are pinned (no permission to move them). */
  canDrag?: (item: T) => boolean
  /** How tall a column may get before it scrolls on its own. */
  maxHeight?: number
  className?: string
}

/**
 * Board layout with native HTML5 drag and drop.
 * ponytail: no DnD library — fine for desktop mouse use; add one only if touch
 * dragging is needed.
 */
export function Kanban<T>({
  columns,
  renderCard,
  itemKey,
  onDrop,
  canDrag,
  maxHeight,
  className,
}: KanbanProps<T>) {
  const [dragKey, setDragKey] = React.useState<string | null>(null)
  const [overCol, setOverCol] = React.useState<string | null>(null)
  const all = columns.flatMap((c) => c.items)
  const dragging = dragKey !== null

  // Three states, so a card in the air says where it can go and where it lands.
  const state = (key: string) => (overCol === key ? "over" : dragging ? "ready" : "idle")

  const dropProps = (key: string) => ({
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => {
      if (!onDrop) return
      e.preventDefault()
      // Must match `effectAllowed` on the card, or the browser silently
      // refuses the drop.
      e.dataTransfer.dropEffect = "move"
      setOverCol(key)
    },
    onDragLeave: () => setOverCol(null),
    onDrop: (e: React.DragEvent<HTMLDivElement>) => {
      if (!onDrop) return
      e.preventDefault()
      setOverCol(null)
      setDragKey(null)
      // Read from the drag itself, not from state set in dragstart: that would
      // only be visible here once a re-render had landed in between.
      const id = e.dataTransfer.getData(DRAG_TYPE)
      const item = all.find((i) => itemKey(i) === id)
      if (item) onDrop(item, key)
    },
  })

  return (
    <div className={cn("flex items-start gap-4 overflow-x-auto pb-4", className)}>
      {columns.map((col) => (
        <div
          key={col.key}
          {...dropProps(col.key)}
          // ponytail: a runtime number, so it cannot be a Tailwind class
          style={{ maxHeight }}
          className={cn(
            "flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors",
            {
              idle: "border-border bg-muted/50",
              // The border carries the signal and the fill stays quiet.
              ready: "border-ring/50 bg-muted/50",
              over: "border-ring bg-accent",
            }[state(col.key)],
          )}
        >
          <div className="flex items-baseline justify-between px-2 py-1.5">
            <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {col.title}
            </span>
            <span className="text-xs text-muted-foreground">
              {col.subtitle ? `${col.items.length} · ${col.subtitle}` : col.items.length}
            </span>
          </div>
          {/* Each column scrolls on its own — dozens of cards don't stretch the page. */}
          <div className="min-h-10 space-y-2 overflow-y-auto">
            {col.items.map((item) => {
              const id = itemKey(item)
              const draggable = Boolean(onDrop) && (canDrag ? canDrag(item) : true)
              return (
                <div
                  key={id}
                  draggable={draggable}
                  onDragStart={(e) => {
                    if (!draggable) return
                    setDragKey(id)
                    e.dataTransfer.setData(DRAG_TYPE, id)
                    e.dataTransfer.effectAllowed = "move"
                    // A card containing a link would otherwise be dragged as
                    // that link, showing the browser's own chip. Hand it the
                    // card instead, held where the cursor grabbed it.
                    const box = e.currentTarget.getBoundingClientRect()
                    e.dataTransfer.setDragImage(
                      e.currentTarget,
                      e.clientX - box.left,
                      e.clientY - box.top,
                    )
                  }}
                  onDragEnd={() => {
                    setDragKey(null)
                    setOverCol(null)
                  }}
                  className={cn(
                    "transition-opacity",
                    draggable ? "cursor-grab active:cursor-grabbing" : "cursor-default",
                    // The card left behind: a faint outline of where it was.
                    dragKey === id && "opacity-30",
                  )}
                >
                  {renderCard(item)}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
