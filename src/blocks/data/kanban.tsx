import * as React from "react"
import type { Icon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

/** What the drag carries, under our own type so a link's own `text/plain`
 *  (its URL) cannot be mistaken for a card. */
const DRAG_TYPE = "application/x-ziku-card"

/**
 * A column that is an ending rather than a stage: Won, Lost, Archived.
 *
 * It renders as a compact drop target showing the count and the subtitle, and
 * no cards. Two reasons, both learned from a real pipeline:
 *
 * - **Width.** A terminal column grows for the life of the install and nobody
 *   scrolls three hundred won deals. At full width it pushes the stages people
 *   actually work off the right edge of a laptop.
 * - **The drop is often the irreversible one.** Dropping on Won can create a
 *   record and move history onto it. A tile in a semantic tone is what says
 *   "this target is different" before any confirmation appears; an identical
 *   sixth column says nothing.
 *
 * A tone, not a class name: a caller passing raw classes could put any colour
 * on a board, which is how a design system stops being one.
 */
export interface KanbanTile {
  icon: Icon
  tone: "success" | "danger" | "warning"
}

export interface KanbanColumn<T> {
  key: string
  title: string
  items: T[]
  /** Line under the title, e.g. the sum of the deals in it. */
  subtitle?: string
  /** Render as an ending rather than a stage. See `KanbanTile`. */
  tile?: KanbanTile
}

/** Per tone, per drag state. Tokens only: no tile invents a colour. */
const TILE_TONES: Record<KanbanTile["tone"], { idle: string; over: string }> = {
  success: {
    idle: "border-success/60 bg-success-subtle text-success-fg",
    over: "border-success bg-success-subtle text-success-fg",
  },
  danger: {
    idle: "border-danger/60 bg-danger-subtle text-danger-fg",
    over: "border-danger bg-danger-subtle text-danger-fg",
  },
  warning: {
    idle: "border-warning/60 bg-warning-subtle text-warning-fg",
    over: "border-warning bg-warning-subtle text-warning-fg",
  },
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
      {columns.map((col) =>
        col.tile ? (
          <Tile key={col.key} col={col} state={state(col.key)} drop={dropProps(col.key)} />
        ) : (
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
        ),
      )}
    </div>
  )
}

/** A terminal column: the count, the subtitle, and nowhere to scroll. */
function Tile<T>({
  col,
  state,
  drop,
}: {
  col: KanbanColumn<T>
  state: "idle" | "ready" | "over"
  drop: Record<string, unknown>
}) {
  const tile = col.tile!
  const tone = TILE_TONES[tile.tone]
  return (
    <div
      {...drop}
      className={cn(
        "flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors",
        // Dashed while nothing is moving, so it reads as a target rather than
        // as a column somebody forgot to fill.
        state === "over" ? cn("border-solid", tone.over) : cn("border-dashed", tone.idle),
      )}
    >
      <tile.icon size={22} weight="duotone" />
      <span className="text-xs font-semibold tracking-wide uppercase">{col.title}</span>
      <span className="text-lg leading-none font-bold">{col.items.length}</span>
      {col.subtitle && <span className="text-xs opacity-80">{col.subtitle}</span>}
    </div>
  )
}
