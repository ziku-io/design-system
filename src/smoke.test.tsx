/// <reference types="vite/client" />
import type { ComponentType } from "react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, render } from "@testing-library/react"
import { composeStories, setProjectAnnotations } from "@storybook/react-vite"
import * as previewAnnotations from "../.storybook/preview"

setProjectAnnotations([previewAnnotations.default])

// Every story file in the library. Renders each story and fails on any React
// error or warning — catches missing providers, bad icon imports, invalid props.
const modules = import.meta.glob<Record<string, unknown>>("./**/*.stories.tsx", { eager: true })

afterEach(cleanup)

describe("every story renders", () => {
  for (const [path, mod] of Object.entries(modules)) {
    const composed = composeStories(mod as Parameters<typeof composeStories>[0])
    for (const [name, Story] of Object.entries(composed) as [string, ComponentType][]) {
      it(`${path.replace("./", "")} › ${name}`, () => {
        const errors: unknown[][] = []
        const spy = vi.spyOn(console, "error").mockImplementation((...args) => { errors.push(args) })
        const warn = vi.spyOn(console, "warn").mockImplementation((...args) => { errors.push(args) })
        try {
          const { container } = render(<Story />)
          expect(container.firstChild, "story rendered nothing").not.toBeNull()
        } finally {
          spy.mockRestore()
          warn.mockRestore()
        }
        expect(errors.map((e) => String(e[0])).join("\n")).toBe("")
      })
    }
  }
})
