import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from "react";
declare function Avatar({ className, size, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root> & {
    size?: "default" | "sm" | "lg";
}): React.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): React.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): React.JSX.Element;
declare function AvatarBadge({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function AvatarGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
export interface UserAvatarProps extends React.ComponentProps<typeof Avatar> {
    name: string;
    src?: string;
    /** Overrides the two letters, for an app whose fallback is a domain thing —
     *  a ticker, a case number — rather than a person's name. */
    fallback?: React.ReactNode;
}
/**
 * A person, drawn as their picture or as their initials.
 *
 * The three lines underneath are the ones every app was writing again: the
 * image, the fallback, and `alt` equal to the name so a screen reader reads a
 * person rather than "image".
 */
declare function UserAvatar({ name, src, fallback, className, ...props }: UserAvatarProps): React.JSX.Element;
export interface AvatarStackProps extends React.ComponentProps<"div"> {
    people: {
        name: string;
        src?: string;
    }[];
    /** How many faces before the rest become "+N". */
    max?: number;
    size?: React.ComponentProps<typeof Avatar>["size"];
}
/**
 * Overlapping faces with a "+N" for the rest.
 *
 * The count carries the names it stands for in its `title`, because "+4" on its
 * own tells a reader there are four more people and nothing about who.
 */
declare function AvatarStack({ people, max, size, className, ...props }: AvatarStackProps): React.JSX.Element;
export { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount, UserAvatar, AvatarStack, };
