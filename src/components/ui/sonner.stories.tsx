import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"
import { Toaster } from "./sonner"
import { Button } from "./button"
const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  tags: ["autodocs"],
}
export default meta
export const Default: StoryObj<typeof Toaster> = {
  render: () => (
    <>
      <Toaster />
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => toast("Saved", { description: "Your changes are live." })}
        >
          Default
        </Button>
        <Button variant="outline" onClick={() => toast.success("Invite sent")}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error("Could not save")}>
          Error
        </Button>
      </div>
    </>
  ),
}
