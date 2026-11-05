import * as React from "react"
import type { Decorator, Preview } from "@storybook/react-vite"
import { theme } from "./theme"
import { useTheme, type ThemePreference } from "../src/lib/preferences"
import "../src/styles/globals.css"

/** The toolbar's theme switch, through the library's own store, so a story
 *  sees exactly what an app's reader sees after picking one. */
const withTheme: Decorator = (Story, context) => {
  const { setTheme } = useTheme()
  const picked = context.globals.theme as ThemePreference
  React.useEffect(() => setTheme(picked), [picked, setTheme])
  return <Story />
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
    docs: { theme },
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
