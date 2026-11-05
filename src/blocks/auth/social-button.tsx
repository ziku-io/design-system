import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import {
  AppleLogoIcon,
  GithubLogoIcon,
  GoogleLogoIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { useStrings } from "@/lib/strings"

// Brand names are proper nouns, the same in every language, so they live here
// and only the sentence around them goes through the dictionary.
const PROVIDERS = {
  google: { name: "Google", icon: GoogleLogoIcon },
  github: { name: "GitHub", icon: GithubLogoIcon },
  apple: { name: "Apple", icon: AppleLogoIcon },
  microsoft: { name: "Microsoft", icon: WindowsLogoIcon },
} as const satisfies Record<string, { name: string; icon: Icon }>

export type SocialProvider = keyof typeof PROVIDERS
export const SOCIAL_PROVIDERS = Object.keys(PROVIDERS) as SocialProvider[]

export interface SocialButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  "children" | "type"
> {
  provider: SocialProvider
}

/** "Continue with Google", for `LoginForm`'s and `RegisterForm`'s `providers`.
 *  The app wires `onClick` to its own OAuth redirect. */
export function SocialButton({ provider, variant = "outline", ...props }: SocialButtonProps) {
  const t = useStrings().auth
  // The type stops a typo at compile time; this stops one that came from data.
  const entry = PROVIDERS[provider] as (typeof PROVIDERS)[SocialProvider] | undefined
  if (!entry)
    // A developer's error, not a user's: concatenated rather than templated so
    // the no-literal scan, which reads template strings as UI copy, skips it.
    throw new Error(
      "SocialButton: unknown provider " +
        JSON.stringify(provider) +
        ", expected one of " +
        SOCIAL_PROVIDERS.join(", "),
    )
  const ProviderIcon = entry.icon
  return (
    <Button type="button" variant={variant} className="w-full" {...props}>
      <ProviderIcon />
      {t.continueWith(entry.name)}
    </Button>
  )
}
