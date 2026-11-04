import * as React from "react"
import {
  CheckCircleIcon,
  InfoIcon,
  SpinnerIcon,
  WarningIcon,
  XCircleIcon,
} from "@phosphor-icons/react"
import { Toaster as Sonner, toast as sonnerToast, type ToasterProps } from "sonner"

/**
 * Toasts in the Alert's five types and colours: `toast()` is the neutral one,
 * and `toast.success`, `.info`, `.warning` and `.danger` take the same tinted
 * ground, border and `-fg` text as `<Alert variant>`. One status vocabulary
 * across the page and the corner.
 *
 * Sonner draws its own stylesheet, unlayered, so its colours are set through
 * the variables it reads rather than with utility classes, which would lose.
 */
const Toaster = ({ theme: _theme, ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      // The corner, away from whatever was clicked: a toast is a report on
      // something that happened, and it must not cover the control the reader
      // is still looking at.
      position="bottom-right"
      offset={16}
      mobileOffset={16}
      richColors
      closeButton
      className="toaster group"
      icons={{
        success: <CheckCircleIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <WarningIcon className="size-4" />,
        error: <XCircleIcon className="size-4" />,
        loading: <SpinnerIcon className="size-4 animate-spin" />,
      }}
      style={
        {
          // Sonner sets its own system font stack; this is the library's.
          fontFamily: "var(--font-sans)",
          "--border-radius": "var(--radius-lg)",
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "var(--success-subtle)",
          "--success-text": "var(--success-fg)",
          "--success-border": "var(--toast-success-border)",
          "--info-bg": "var(--info-subtle)",
          "--info-text": "var(--info-fg)",
          "--info-border": "var(--toast-info-border)",
          "--warning-bg": "var(--warning-subtle)",
          "--warning-text": "var(--warning-fg)",
          "--warning-border": "var(--toast-warning-border)",
          "--error-bg": "var(--danger-subtle)",
          "--error-text": "var(--danger-fg)",
          "--error-border": "var(--danger-border)",
          // The close button inside the top-right corner, not straddling the
          // top-left one where it sat on the border.
          "--toast-close-button-start": "unset",
          "--toast-close-button-end": "0.375rem",
          "--toast-close-button-transform": "translateY(0.375rem)",
        } as React.CSSProperties
      }
      toastOptions={{
        // A floating surface, so the overlay shadow rather than sonner's own.
        style: { boxShadow: "var(--shadow-overlay)" },
        classNames: {
          // Room on the right for the close button, so a long title wraps
          // before it instead of running under the X.
          toast: "!pr-9",
          closeButton: "!border-0 !bg-transparent !text-current opacity-60 hover:opacity-100",
        },
      }}
      {...props}
    />
  )
}

/**
 * Sonner's `toast`, plus `danger`: the Alert calls it `danger`, Sonner calls it
 * `error`, and an app should not have to remember which word goes where.
 * `toast.error` still works.
 */
const toast: typeof sonnerToast & { danger: typeof sonnerToast.error } = Object.assign(
  (...args: Parameters<typeof sonnerToast>) => sonnerToast(...args),
  sonnerToast,
  { danger: sonnerToast.error },
)

export { Toaster, toast }
