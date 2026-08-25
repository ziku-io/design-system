import type { Meta, StoryObj } from "@storybook/react-vite"
import { GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu"
import { Button } from "./button"
const meta: Meta<typeof DropdownMenu> = { title: "Components/DropdownMenu", component: DropdownMenu, tags: ["autodocs"] }
export default meta
export const Default: StoryObj<typeof DropdownMenu> = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="outline">Account</Button></DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><UserIcon /> Profile</DropdownMenuItem>
        <DropdownMenuItem><GearIcon /> Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive"><SignOutIcon /> Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
