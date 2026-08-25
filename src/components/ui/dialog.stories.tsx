import type { Meta, StoryObj } from "@storybook/react-vite"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Button } from "./button"
const meta: Meta<typeof Dialog> = { title: "Components/Dialog", component: Dialog, tags: ["autodocs"] }
export default meta
export const Confirm: StoryObj<typeof Dialog> = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild><Button variant="destructive">Delete project</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this project?</DialogTitle>
          <DialogDescription>This cannot be undone. All data will be removed.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
          <DialogClose asChild><Button variant="destructive">Delete</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
