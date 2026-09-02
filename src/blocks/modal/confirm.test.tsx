import * as React from "react"
import { afterEach, describe, expect, it } from "vitest"
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"

import { ConfirmProvider, useConfirm, type Confirmations } from "./confirm"

afterEach(cleanup)

/** Hands the test the same two functions a component would call. */
function harness() {
  const api: { current: Confirmations } = { current: null as never }
  function Probe() {
    api.current = useConfirm()
    return null
  }
  render(
    <ConfirmProvider>
      <Probe />
    </ConfirmProvider>,
  )
  return api
}

/**
 * Asking is a state update; the dialog is on screen once React has flushed.
 *
 * The answer comes back in a box because `await` unwraps recursively: returning
 * the promise itself would make this helper wait for the click it is supposed
 * to happen before.
 */
async function ask<T>(call: () => Promise<T>): Promise<{ answer: Promise<T> }> {
  let answer!: Promise<T>
  await act(async () => {
    answer = call()
  })
  return { answer }
}

const click = (name: RegExp) => fireEvent.click(screen.getByRole("button", { name }))

describe("useConfirm", () => {
  it("resolves false on Cancel and true on the confirming button", async () => {
    const api = harness()

    let { answer } = await ask(() => api.current.confirm({ title: "Delete this?" }))
    click(/cancel/i)
    expect(await answer).toBe(false)

    ;({ answer } = await ask(() => api.current.confirm({ title: "Delete this?" })))
    click(/confirm/i)
    expect(await answer).toBe(true)
  })

  it("resolves false on Escape", async () => {
    const api = harness()
    const { answer } = await ask(() => api.current.confirm({ title: "Delete this?" }))
    fireEvent.keyDown(document.activeElement ?? document.body, { key: "Escape" })
    expect(await answer).toBe(false)
  })

  it("does not lose the first answer when a second call arrives", async () => {
    const api = harness()
    const { answer: first } = await ask(() => api.current.confirm({ title: "First" }))
    const { answer: second } = await ask(() => api.current.confirm({ title: "Second" }))

    expect(screen.getByText("First")).toBeTruthy()
    click(/confirm/i)
    expect(await first).toBe(true)

    expect(screen.getByText("Second")).toBeTruthy()
    click(/cancel/i)
    expect(await second).toBe(false)
  })

  it("returns the typed string, and null when dismissed", async () => {
    const api = harness()

    let { answer: typed } = await ask(() =>
      api.current.prompt({ title: "Name the view", defaultValue: "All" }),
    )
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Overdue" } })
    click(/confirm/i)
    expect(await typed).toBe("Overdue")

    ;({ answer: typed } = await ask(() => api.current.prompt({ title: "Name the view" })))
    click(/cancel/i)
    expect(await typed).toBeNull()
  })

  it("answers no without a provider rather than throwing", async () => {
    const api: { current: Confirmations } = { current: null as never }
    function Probe() {
      api.current = useConfirm()
      return null
    }
    render(<Probe />)
    expect(await api.current.confirm({ title: "Delete this?" })).toBe(false)
    expect(await api.current.prompt({ title: "Name it" })).toBeNull()
  })
})
