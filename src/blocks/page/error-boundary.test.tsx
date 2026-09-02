import * as React from "react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import { ErrorBoundary } from "./error-boundary"

afterEach(cleanup)

function Boom({ throws }: { throws: boolean }): React.ReactElement {
  if (throws) throw new Error("boom")
  return <p>fine</p>
}

/** React logs every caught error itself; the boundary is what is under test. */
function quiet<T>(run: () => T): T {
  const spy = vi.spyOn(console, "error").mockImplementation(() => {})
  try {
    return run()
  } finally {
    spy.mockRestore()
  }
}

describe("ErrorBoundary", () => {
  it("renders the fallback instead of a blank page, and reports the error", () => {
    const onError = vi.fn()
    quiet(() =>
      render(
        <ErrorBoundary onError={onError}>
          <Boom throws />
        </ErrorBoundary>,
      ),
    )

    expect(screen.getByText(/went wrong/i)).toBeTruthy()
    expect(onError).toHaveBeenCalledTimes(1)
    expect((onError.mock.calls[0][0] as Error).message).toBe("boom")
    expect(onError.mock.calls[0][1].componentStack).toBeTruthy()
  })

  it("recovers when a reset key changes, without a reload", () => {
    const view = quiet(() =>
      render(
        <ErrorBoundary resetKeys={["/a"]}>
          <Boom throws />
        </ErrorBoundary>,
      ),
    )
    expect(screen.getByText(/went wrong/i)).toBeTruthy()

    view.rerender(
      <ErrorBoundary resetKeys={["/b"]}>
        <Boom throws={false} />
      </ErrorBoundary>,
    )
    expect(screen.getByText("fine")).toBeTruthy()
  })

  it("retries from the default fallback", () => {
    // Outside the tree, because the boundary unmounts what threw: state inside
    // the subtree cannot survive to tell the retry that the cause is gone.
    let broken = true
    // Read at render time, not passed as a prop: a retry re-renders the
    // boundary, not its parent, so the children element it holds is the one it
    // was given — a prop captured before the throw would still say `true`.
    function Flaky() {
      return <Boom throws={broken} />
    }
    quiet(() =>
      render(
        <ErrorBoundary>
          <Flaky />
        </ErrorBoundary>,
      ),
    )
    expect(screen.getByText(/went wrong/i)).toBeTruthy()

    broken = false
    fireEvent.click(screen.getByRole("button", { name: /try again/i }))
    expect(screen.getByText("fine")).toBeTruthy()
  })
})
