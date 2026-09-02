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
        "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
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
      className={cn("aspect-square size-full", className)}
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
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
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
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
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
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
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
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
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
function UserAvatar({ name, src, fallback, className, ...props }: UserAvatarProps) {
  return (
    <Avatar className={className} {...props}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback>{fallback ?? initials(name)}</AvatarFallback>
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
