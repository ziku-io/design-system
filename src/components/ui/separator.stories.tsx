import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "./separator"
const meta: Meta<typeof Separator> = { title: "Components/Separator", component: Separator, tags: ["autodocs"] }
export default meta
export const Default: StoryObj<typeof Separator> = {
  render: () => (
    <div className="w-64 text-sm">
      <p>Above</p>
      <Separator className="my-3" />
      <div className="flex h-5 items-center gap-3"><span>Left</span><Separator orientation="vertical" /><span>Right</span></div>
    </div>
  ),
}
