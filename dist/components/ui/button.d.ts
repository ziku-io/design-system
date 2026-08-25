import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "default" | "danger" | "warning" | "success" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;
export { Button, buttonVariants };
