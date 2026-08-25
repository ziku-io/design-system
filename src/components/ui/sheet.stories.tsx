import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./sheet"
import { Button } from "./button"
const meta: Meta<typeof Sheet> = { title: "Components/Sheet", component: Sheet, tags: ["autodocs"] }
export default meta
export const Default: StoryObj<typeof Sheet> = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open panel</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Side panels are for secondary flows that keep page context.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
