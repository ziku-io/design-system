import * as React from "react"
import type { Decorator, Preview } from "@storybook/react-vite"
import { DocsContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks"
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events"
import { addons } from "storybook/preview-api"
import { themes } from "./theme"
import { THEMES, useTheme, type ThemePreference } from "../src/lib/preferences"
import "../src/styles/globals.css"

/** The toolbar's theme switch, through the library's own store, so a story
 *  sees exactly what an app's reader sees after picking one. */
const withTheme: Decorator = (Story, context) => {
  const { setTheme } = useTheme()
  const picked = context.globals.theme as ThemePreference
  React.useEffect(() => setTheme(picked), [picked, setTheme])
  return <Story />
}

/** The toolbar's pick, caught at module load. A docs page draws its own frame,
 *  and an MDX page with no story never runs the decorator; the first
 *  `SET_GLOBALS` also fires before any container mounts, so a listener inside
 *  one would miss it and leave whatever theme was last stored. */
let picked: ThemePreference = "light"
const subscribers = new Set<() => void>()
const onGlobals = ({ globals }: { globals: Record<string, unknown> }) => {
  const next = THEMES.find((t) => t === globals.theme)
  if (!next) return
  picked = next
  subscribers.forEach((notify) => notify())
}
addons.getChannel().on(SET_GLOBALS, onGlobals)
addons.getChannel().on(GLOBALS_UPDATED, onGlobals)
const subscribe = (notify: () => void) => {
  subscribers.add(notify)
  return () => void subscribers.delete(notify)
}

const ThemedDocs = ({ children, context }: React.PropsWithChildren<DocsContainerProps>) => {
  const { resolved, setTheme } = useTheme()
  const theme = React.useSyncExternalStore(subscribe, () => picked)
  React.useEffect(() => setTheme(theme), [theme, setTheme])
  return (
    <DocsContainer context={context} theme={themes[resolved]}>
      {children}
    </DocsContainer>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  initialGlobals: { theme: "light" },
  globalTypes: {
    theme: {
      description: "Appearance",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { container: ThemedDocs },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          "Docs",
          ["Getting started", "Foundations", "Auth flows", "Navigation", "Search and data"],
          "Components",
          // Alphabetical. Storybook otherwise lists blocks in the order their
          // files happen to load; a new block goes into this list in its place.
          "Blocks",
          [
            "AppShell",
            "Auth",
            "ChipPicker",
            "Combobox",
            "CommandMenu",
            "Dashboard",
            "DataTable",
            "DatePicker",
            "Drawer",
            "EditableText",
            "Modal",
            "Page",
            "Preferences",
            "Upload",
            "Wordmark",
          ],
        ],
      },
    },
  },
}
export default preview
