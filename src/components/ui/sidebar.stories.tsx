import type { Meta, StoryObj } from "@storybook/react-vite"
import { HouseIcon, GearIcon, UsersIcon } from "@phosphor-icons/react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Low-level sidebar primitives. For a ready-made app layout use Blocks/AppShell.",
      },
    },
  },
}
export default meta
const items = [
  { title: "Home", icon: HouseIcon },
  { title: "Team", icon: UsersIcon },
  { title: "Settings", icon: GearIcon },
]
export const Default: StoryObj<typeof Sidebar> = {
  render: () => (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((i) => (
                  <SidebarMenuItem key={i.title}>
                    <SidebarMenuButton isActive={i.title === "Home"} tooltip={i.title}>
                      <i.icon />
                      <span>{i.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <SidebarTrigger />
      </SidebarInset>
    </SidebarProvider>
  ),
}
