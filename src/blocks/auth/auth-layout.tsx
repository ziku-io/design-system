import * as React from "react"
import { Wordmark } from "@/blocks/brand/wordmark"
import { cn } from "@/lib/utils"

export interface AuthLayoutProps extends React.ComponentProps<"main"> {
  /** Shown at the top of the form's card. A string is set as a `Wordmark`; pass
   *  a node for a drawn logo. */
  logo?: React.ReactNode
  /** Small print at the bottom of the form's card, e.g. terms links */
  footer?: React.ReactNode
}

// The layout owns the logo and the small print, the form owns the card. A
// context carries them into it, so the app passes both once and every form puts
// them in the same place without props of its own.
const AuthLayoutContext = React.createContext<{ logo?: React.ReactNode; footer?: React.ReactNode }>(
  {},
)

const present = (node: React.ReactNode) => node !== null && node !== undefined && node !== false

/** The layout's logo, for the top of a form's card. Nothing outside `AuthLayout`. */
export function AuthLogo() {
  const { logo } = React.useContext(AuthLayoutContext)
  if (!present(logo)) return null
  return (
    <div data-slot="auth-logo" className="flex justify-center">
      {typeof logo === "string" ? <Wordmark className="text-2xl">{logo}</Wordmark> : logo}
    </div>
  )
}

/** The layout's small print, for the bottom of a form's card. */
export function AuthFooter() {
  const { footer } = React.useContext(AuthLayoutContext)
  if (!present(footer)) return null
  return (
    <p
      data-slot="auth-footer"
      className="mt-6 text-balance border-t pt-4 text-center text-xs text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4"
    >
      {footer}
    </p>
  )
}

/** Centered single-column layout for login / register / reset pages. */
export function AuthLayout({ logo, footer, className, children, ...props }: AuthLayoutProps) {
  return (
    <main
      className={cn(
        "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10",
        className,
      )}
      {...props}
    >
      <div className="flex w-full max-w-sm flex-col gap-6">
        <AuthLayoutContext.Provider value={{ logo, footer }}>{children}</AuthLayoutContext.Provider>
      </div>
    </main>
  )
}
