import type { Preview } from "@storybook/react-vite"
import { themes } from "storybook/theming"
import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { theme: themes.dark },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          "Docs",
          ["Getting started", "Design tokens", "Auth flows", "Navigation", "Search and data"],
          "Components",
          "Blocks",
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "dark", title: "Dark (default)" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  // Dark is the library default; "light" is the opt-out class.
  initialGlobals: { theme: "dark" },
  decorators: [
    (Story, { globals }) => {
      const theme = globals.theme === "light" ? "light" : "dark"
      if (typeof document !== "undefined") {
        const root = document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
      }
      return <Story />
    },
  ],
}
export default preview
