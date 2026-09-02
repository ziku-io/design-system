import type { Meta, StoryObj } from "@storybook/react-vite"

import { ThemeMenu, ZoomMenu } from "./preference-menus"

const meta: Meta = {
  title: "Blocks/Preferences",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}
export default meta

/** Both menus write through to `<html>`: the theme swaps the class, the zoom
 *  sets `--app-zoom`. In Storybook the toolbar overrides the theme back. */
export const Menus: StoryObj = {
  render: () => (
    <div className="flex items-center gap-2 rounded-md border p-2">
      <ThemeMenu />
      <ZoomMenu />
    </div>
  ),
}
