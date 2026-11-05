import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { HouseIcon } from "@phosphor-icons/react"

import { AppShell } from "./app-shell"

afterEach(cleanup)

describe("AppShell", () => {
  // SidebarInset is a <main> on its own; AppShell puts its own <main> inside it,
  // and a screen reader used to find two main landmarks, one wrapping the header.
  it("renders one main landmark, with the header outside it", () => {
    render(
      <AppShell
        brand="Acme"
        nav={[{ label: "App", items: [{ title: "Home", href: "/", icon: HouseIcon }] }]}
      >
        <p>Page</p>
      </AppShell>,
    )
    const mains = screen.getAllByRole("main")
    expect(mains).toHaveLength(1)
    expect(mains[0].textContent).toBe("Page")
    expect(mains[0].closest("header")).toBeNull()
  })
})
