import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"

import { SidebarMenuButton, SidebarProvider } from "./sidebar"

afterEach(cleanup)

/**
 * The tooltip on a nav item exists for a collapsed sidebar, where an icon is
 * the only thing naming the link. Expanded, the label is right there.
 *
 * It used to be mounted in both states and merely `hidden`, which left a Radix
 * anchor ref in the ref chain of every link on every page, on top of the
 * button's own `Slot.Root` and whatever ref the app's router link adds. Praxis
 * hit `Maximum update depth exceeded` inside that chain and lost its whole
 * navigation until a reload. The loop was the app's, the length of the chain
 * was ours.
 */
describe("SidebarMenuButton tooltips", () => {
  const button = (
    <SidebarMenuButton tooltip="Clientes">
      <span>Clientes</span>
    </SidebarMenuButton>
  )

  it("mounts no tooltip trigger while the sidebar is expanded", () => {
    render(<SidebarProvider defaultOpen>{button}</SidebarProvider>)
    const item = screen.getByRole("button", { name: "Clientes" })
    expect(item.getAttribute("data-state")).toBeNull()
    expect(item.getAttribute("aria-describedby")).toBeNull()
  })

  it("mounts one once the sidebar is collapsed", () => {
    render(<SidebarProvider defaultOpen={false}>{button}</SidebarProvider>)
    const item = screen.getByRole("button", { name: "Clientes" })
    expect(item.getAttribute("data-state")).toBe("closed")
  })

  it("mounts none at all for an item that named no tooltip", () => {
    render(
      <SidebarProvider defaultOpen={false}>
        <SidebarMenuButton>
          <span>Sem dica</span>
        </SidebarMenuButton>
      </SidebarProvider>,
    )
    expect(screen.getByRole("button", { name: "Sem dica" }).getAttribute("data-state")).toBeNull()
  })
})
