import type { Preview } from "@storybook/react-vite"
import { addons } from "storybook/preview-api"
import { themes } from "storybook/theming"
import "../src/styles/globals.css"

/** The library is class-driven: no class means dark, `.light` opts out. */
function applyTheme(theme: unknown) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme === "light" ? "light" : "dark")
}

// Decorators only run for stories, so on a pure MDX page the toolbar did
// nothing. Listening on the channel covers docs pages too.
const channel = addons.getChannel()
channel.on("globalsUpdated", ({ globals }: { globals: Record<string, unknown> }) =>
  applyTheme(globals.theme),
)
channel.on("setGlobals", ({ globals }: { globals: Record<string, unknown> }) =>
  applyTheme(globals.theme),
)

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
      applyTheme(globals.theme)
      return <Story />
    },
  ],
}
export default preview
