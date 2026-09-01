import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}
export default meta
export const Default: StoryObj<typeof Sheet> = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open panel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Side panels are for secondary flows that keep page context.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

const Field = ({ label }: { label: string }) => (
  <div className="grid gap-2 px-4">
    <Label>{label}</Label>
    <Input />
  </div>
)

/** Twelve fields in a side panel. The panel scrolls; the page behind it does not. */
export const TallContent: StoryObj<typeof Sheet> = {
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button variant="outline">Filters</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow the list down.</SheetDescription>
        </SheetHeader>
        {Array.from({ length: 12 }, (_, i) => (
          <Field key={i} label={`Field ${i + 1}`} />
        ))}
        <SheetFooter>
          <Button>Apply</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

/** From the bottom. Pads past the iOS home indicator so the footer stays tappable. */
export const Bottom: StoryObj<typeof Sheet> = {
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button variant="outline">Open actions</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Share</SheetTitle>
          <SheetDescription>Pick where this goes.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button>Copy link</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
