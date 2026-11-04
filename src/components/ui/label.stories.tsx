import type { Meta, StoryObj } from "@storybook/react-vite"
import { InfoIcon } from "@phosphor-icons/react"

import { Label } from "./label"
import { Checkbox } from "./checkbox"
import { Input } from "./input"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Switch } from "./switch"
import { Textarea } from "./textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The text that names a control. `htmlFor` points it at the control's `id`, so a screen reader reads the name and a click on the text reaches the control. Inside a `Form`, use `FormLabel`, which wires this up and turns red on an error.",
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Label>

/** Beside a checkbox: clicking the text ticks the box. */
export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

/** Above a field, the usual shape on a form: clicking the label focuses the field. */
export const AboveAField: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@company.com" />
    </div>
  ),
}

/** A hint goes under the field as plain muted text, not inside the label, so a
 *  screen reader reads the name short and the hint through `aria-describedby`. */
export const WithHint: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="nif">Tax number</Label>
      <Input id="nif" inputMode="numeric" aria-describedby="nif-hint" />
      <p id="nif-hint" className="text-sm text-muted-foreground">
        Nine digits, no spaces.
      </p>
    </div>
  ),
}

/** Optional is the exception, so it is the one marked. Muted, at the same size. */
export const Optional: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="ref">
        Reference <span className="font-normal text-muted-foreground">Optional</span>
      </Label>
      <Input id="ref" />
    </div>
  ),
}

/** A label is a flex row, so an icon or a help tooltip sits inline. The tooltip
 *  trigger is outside the label's text, so clicking it does not focus the field. */
export const WithHelp: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <div className="flex items-center gap-1.5">
        <Label htmlFor="iban">IBAN</Label>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" aria-label="What is this?" className="text-muted-foreground">
              <InfoIcon className="size-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Where the refund is paid.</TooltipContent>
        </Tooltip>
      </div>
      <Input id="iban" placeholder="PT50 0000 0000…" />
    </div>
  ),
}

/** Every field takes a label the same way. */
export const EveryControl: Story = {
  render: () => (
    <div className="grid w-80 gap-5">
      <div className="grid gap-2">
        <Label htmlFor="role">Role</Label>
        <Select>
          <SelectTrigger id="role" className="w-full">
            <SelectValue placeholder="Pick a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="member">Member</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="digest">Weekly digest email</Label>
        <Switch id="digest" defaultChecked />
      </div>
      <RadioGroup defaultValue="monthly" className="gap-3">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="monthly" id="monthly" />
          <Label htmlFor="monthly">Monthly</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yearly" id="yearly" />
          <Label htmlFor="yearly">Yearly</Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

/** Wrapping the control makes the link without an `id`, for a row where the
 *  whole line should be the hit area. */
export const Wrapping: Story = {
  render: () => (
    <Label className="w-72 cursor-pointer rounded-md border p-3 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
      <Checkbox />
      <span className="grid gap-1">
        <span>Email me when a dossier changes</span>
        <span className="font-normal text-muted-foreground">At most once a day.</span>
      </span>
    </Label>
  ),
}

/** A disabled control fades its label with it. After a checkbox, switch or
 *  radio, the label reads the control's state as its `peer`; above a field, the
 *  wrapper carries `data-disabled` as a `group`. */
export const Disabled: Story = {
  render: () => (
    <div className="grid w-72 gap-5">
      <div className="flex items-center gap-2">
        <Checkbox id="locked" disabled />
        <Label htmlFor="locked">Locked by an admin</Label>
      </div>
      <div className="group grid gap-2" data-disabled="true">
        <Label htmlFor="frozen">Account number</Label>
        <Input id="frozen" disabled defaultValue="PT-2026-0042" />
      </div>
    </div>
  ),
}
