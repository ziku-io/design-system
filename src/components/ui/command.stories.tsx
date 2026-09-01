import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarIcon, GearIcon, SmileyIcon, UserIcon } from "@phosphor-icons/react"
import {
  Command,
  CommandDialog,
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
    docs: {
      description: {
        component:
          "cmdk primitives. For the app-wide ⌘K palette use Blocks/CommandMenu instead of assembling these.",
      },
    },
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
          <CommandItem>
            <CalendarIcon /> Calendar
          </CommandItem>
          <CommandItem>
            <SmileyIcon /> Search emoji
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon /> Profile <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon /> Settings <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

/** In a dialog. The sr-only title and description live inside the dialog, so
 *  they exist only while the palette is open. */
export const InDialog: StoryObj<typeof CommandDialog> = {
  render: () => (
    // The dialog renders into a portal, so the story needs a node of its own
    // for the smoke test to find: a story that returns only a portal reads as
    // a story that rendered nothing.
    <>
      <p className="text-muted-foreground text-sm">The palette is open below.</p>
      <CommandDialog defaultOpen>
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon /> Calendar
            </CommandItem>
            <CommandItem>
              <GearIcon /> Settings <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  ),
}
