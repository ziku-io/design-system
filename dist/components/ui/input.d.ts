import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const inputVariants: (props?: ({
    variant?: "default" | "cell" | "ghost" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/**
 * `size` is the control height, as on Button and SelectTrigger, not the HTML
 * attribute (a width in characters). Width here always comes from CSS, and one
 * word meaning two things on neighbouring controls is the bug this avoids.
 */
export type InputProps = Omit<React.ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants>;
declare function Input({ className, type, variant, size, ...props }: InputProps): React.JSX.Element;
export { Input, inputVariants };
