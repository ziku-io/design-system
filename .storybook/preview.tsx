import type { Preview } from "@storybook/react-vite"
import { themes } from "storybook/theming"
import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { theme: themes.light },
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
}
export default preview
