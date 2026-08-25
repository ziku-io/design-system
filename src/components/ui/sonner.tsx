import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "@/lib/icons"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"

import { useTheme } from "@/hooks/use-theme"

const Toaster = ({ theme, ...props }: ToasterProps) => {
  // Follows the .light/.dark class, not the OS: this library is class-driven.
  const resolved = useTheme()

  return (
    <Sonner
      theme={theme ?? resolved}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster, toast }
