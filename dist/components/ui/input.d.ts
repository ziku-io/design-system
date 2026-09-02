import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const inputVariants: (props?: ({
    variant?: "default" | "cell" | "ghost" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputProps = React.ComponentProps<"input"> & VariantProps<typeof inputVariants>;
declare function Input({ className, type, variant, ...props }: InputProps): React.JSX.Element;
export { Input, inputVariants };
