import { toast as sonnerToast, ToasterProps } from 'sonner';
import * as React from "react";
/**
 * Toasts in the Alert's five types and colours: `toast()` is the neutral one,
 * and `toast.success`, `.info`, `.warning` and `.danger` take the same tinted
 * ground, border and `-fg` text as `<Alert variant>`. One status vocabulary
 * across the page and the corner.
 *
 * Sonner draws its own stylesheet, unlayered, so its colours are set through
 * the variables it reads rather than with utility classes, which would lose.
 */
declare const Toaster: ({ theme: _theme, ...props }: ToasterProps) => React.JSX.Element;
/**
 * Sonner's `toast`, plus `danger`: the Alert calls it `danger`, Sonner calls it
 * `error`, and an app should not have to remember which word goes where.
 * `toast.error` still works.
 */
declare const toast: typeof sonnerToast & {
    danger: typeof sonnerToast.error;
};
export { Toaster, toast };
