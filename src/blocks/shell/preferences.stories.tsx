import type { Meta, StoryObj } from "@storybook/react-vite"

import { ZoomMenu } from "./preference-menus"

const meta: Meta = {
  title: "Blocks/Preferences",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}
export default meta

export const Zoom: StoryObj = {
  render: () => (
    <div className="flex items-center gap-2 rounded-md border p-2">
      <ZoomMenu />
    </div>
  ),
}
