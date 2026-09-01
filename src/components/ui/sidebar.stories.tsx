import type { Meta, StoryObj } from "@storybook/react-vite"
import { HouseIcon, GearIcon, UsersIcon, PlusIcon, DotsThreeIcon } from "@phosphor-icons/react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
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

/** Row actions sit on a 24px hit target while the glyph stays 16px. */
export const Actions: StoryObj<typeof Sidebar> = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction>
              <PlusIcon />
              <span className="sr-only">Add project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((i) => (
                  <SidebarMenuItem key={i.title}>
                    <SidebarMenuButton>
                      <i.icon />
                      <span>{i.title}</span>
                    </SidebarMenuButton>
                    <SidebarMenuAction>
                      <DotsThreeIcon />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4" />
    </SidebarProvider>
  ),
}

/** Skeleton widths come from each row's id, so the server and client agree. */
export const Loading: StoryObj<typeof Sidebar> = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {[0, 1, 2, 3, 4].map((i) => (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4" />
    </SidebarProvider>
  ),
}
