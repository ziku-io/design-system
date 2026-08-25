import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"
import { Button } from "./button"
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
}
export default meta
export const Default: StoryObj<typeof Tooltip> = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Short helper text</TooltipContent>
    </Tooltip>
  ),
}
