import type { Preview } from "@storybook/react-vite"
import { theme } from "./theme"
import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { theme },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          "Docs",
          [
            "Getting started",
            "Foundations",
            "Design tokens",
            "Auth flows",
            "Navigation",
            "Search and data",
          ],
          "Components",
          "Blocks",
        ],
      },
    },
  },
}
export default preview
