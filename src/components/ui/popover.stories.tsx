import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./popover"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent className="text-sm">
        Popovers hold small, non-blocking content.
      </PopoverContent>
    </Popover>
  ),
}
export const WithHeader: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Rename</Button>
      </PopoverTrigger>
      <PopoverContent className="grid gap-4">
        <PopoverHeader>
          <PopoverTitle>Rename project</PopoverTitle>
          <PopoverDescription>This changes the URL slug too.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <Label htmlFor="project-name">Name</Label>
          <Input id="project-name" defaultValue="ziku-web" />
        </div>
        <Button size="sm" className="justify-self-end">
          Save
        </Button>
      </PopoverContent>
    </Popover>
  ),
}
