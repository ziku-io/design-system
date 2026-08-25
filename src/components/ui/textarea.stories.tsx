import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./textarea"
const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "Write something…", className: "w-80" },
}
export default meta
export const Default: StoryObj<typeof Textarea> = {}
export const Disabled: StoryObj<typeof Textarea> = { args: { disabled: true } }
