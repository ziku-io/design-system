import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarIcon, GearIcon, SmileyIcon, UserIcon } from "@phosphor-icons/react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command"

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "cmdk primitives. For the app-wide ⌘K palette use Blocks/CommandMenu instead of assembling these." } },
  },
}
export default meta

/** Inline (not in a dialog) — for filter lists and comboboxes. */
export const Inline: StoryObj<typeof Command> = {
  render: () => (
    <Command className="w-80 rounded-md border">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><CalendarIcon /> Calendar</CommandItem>
          <CommandItem><SmileyIcon /> Search emoji</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><UserIcon /> Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
          <CommandItem><GearIcon /> Settings <CommandShortcut>⌘,</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
