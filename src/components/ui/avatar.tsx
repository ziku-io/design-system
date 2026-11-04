import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { initials } from "@/lib/initials"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        // No overflow-hidden here: it clipped the badge to a quarter circle.
        // The image and the fallback round themselves instead.
        "group/avatar relative flex size-8 shrink-0 rounded-full border border-border bg-muted select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full rounded-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground group-data-[size=lg]/avatar:text-sm group-data-[size=sm]/avatar:text-[0.625rem]",
        className,
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        // Sits over the edge, cut out of the avatar by a ring in the card's
        // colour, so it reads as a mark on the person rather than a stain.
        "absolute -right-0.5 -bottom-0.5 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-card select-none",
        "group-data-[size=sm]/avatar:size-2.5 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-3 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3.5 group-data-[size=lg]/avatar:[&>svg]:size-2.5",
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        // A card-coloured ring between overlapping faces. Against the page
        // colour the circles ran into one grey smear.
        "group/avatar-group flex -space-x-1.5 has-data-[size=sm]:-space-x-1 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-card",
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground tabular-nums ring-2 ring-card group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=lg]/avatar-group:text-sm group-has-data-[size=sm]/avatar-group:text-[0.625rem] group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3.5",
        className,
      )}
      {...props}
    />
  )
}

export interface UserAvatarProps extends React.ComponentProps<typeof Avatar> {
  name: string
  src?: string
  /** Overrides the two letters, for an app whose fallback is a domain thing —
   *  a ticker, a case number — rather than a person's name. */
  fallback?: React.ReactNode
}

/**
 * A person, drawn as their picture or as their initials.
 *
 * The three lines underneath are the ones every app was writing again: the
 * image, the fallback, and `alt` equal to the name so a screen reader reads a
 * person rather than "image".
 */
/**
 * The categorical slots, written out in full: Tailwind only ships a class it can
 * find as a literal, so `bg-slot-${n}-subtle` would not exist.
 */
const SLOT_TINTS = [
  "bg-slot-1-subtle text-slot-1",
  "bg-slot-2-subtle text-slot-2",
  "bg-slot-3-subtle text-slot-3",
  "bg-slot-4-subtle text-slot-4",
  "bg-slot-5-subtle text-slot-5",
] as const

/** The same name lands on the same tint on every screen and every load. */
function tintFor(name: string): string {
  let hash = 0
  for (const char of name) hash = (hash * 31 + char.codePointAt(0)!) | 0
  return SLOT_TINTS[Math.abs(hash) % SLOT_TINTS.length]
}

function UserAvatar({ name, src, fallback, className, ...props }: UserAvatarProps) {
  return (
    <Avatar className={className} {...props}>
      <AvatarImage src={src} alt={name} />
      {/* A tint per person, so five initials in a stack read as five people
       *  rather than five grey coins. Slots, not status colours: a name has no
       *  good or bad. */}
      <AvatarFallback className={tintFor(name)}>{fallback ?? initials(name)}</AvatarFallback>
    </Avatar>
  )
}

export interface AvatarStackProps extends React.ComponentProps<"div"> {
  people: { name: string; src?: string }[]
  /** How many faces before the rest become "+N". */
  max?: number
  size?: React.ComponentProps<typeof Avatar>["size"]
}

/**
 * Overlapping faces with a "+N" for the rest.
 *
 * The count carries the names it stands for in its `title`, because "+4" on its
 * own tells a reader there are four more people and nothing about who.
 */
function AvatarStack({ people, max = 4, size, className, ...props }: AvatarStackProps) {
  const shown = people.slice(0, max)
  const rest = people.slice(max)
  return (
    <AvatarGroup className={className} {...props}>
      {shown.map((person, i) => (
        <UserAvatar key={`${person.name}-${i}`} name={person.name} src={person.src} size={size} />
      ))}
      {rest.length > 0 && (
        <AvatarGroupCount title={rest.map((p) => p.name).join(", ")}>
          +{rest.length}
        </AvatarGroupCount>
      )}
    </AvatarGroup>
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
  UserAvatar,
  AvatarStack,
}
