import * as React from "react"

import { ErrorState } from "@/blocks/page/error-state"
import { useStrings } from "@/lib/strings"

export interface ErrorFallbackProps {
  error: Error
  /** Clears the caught error and renders the children again. */
  reset: () => void
}

export interface ErrorBoundaryProps {
  children: React.ReactNode
  /**
   * Whatever the app reports to. The library reports nothing itself: it does
   * not know which errors matter here, and a component library that phones
   * home is a surprise nobody asked for.
   */
  onError?: (error: Error, info: React.ErrorInfo) => void
  /** Replaces the default `ErrorState`. A function is given the error and a reset. */
  fallback?: React.ReactNode | ((props: ErrorFallbackProps) => React.ReactNode)
  /**
   * Anything whose change should clear a caught error — a pathname, a record
   * id. Without it a single throw leaves the fallback up for the rest of the
   * session, because navigating away renders the same boundary with the same
   * error still in its state.
   */
  resetKeys?: readonly unknown[]
}

/** The sentence, the retry, and nothing the app has to supply. */
function DefaultFallback({ reset }: ErrorFallbackProps) {
  const t = useStrings().common
  return <ErrorState title={t.crashed} onRetry={reset} />
}

interface State {
  error: Error | null
}

/**
 * Catches a render that threw and puts a page in front of it.
 *
 * A class, because that is still the only thing React lets catch a render
 * error. The fallback is a function component underneath so it can read the
 * dictionary — every consumer that wrote this itself ended up with the same
 * class-plus-function split, which is the tell that it belonged here.
 *
 * ponytail: nothing retries on a timer and nothing reloads the page. Both are
 * an app's decision about its own recovery, and both are `fallback`.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    this.props.onError?.(error, info)
  }

  componentDidUpdate(previous: ErrorBoundaryProps): void {
    if (!this.state.error) return
    const before = previous.resetKeys
    const now = this.props.resetKeys
    if (!before || !now) return
    if (before.length !== now.length || now.some((key, i) => !Object.is(key, before[i]))) {
      this.reset()
    }
  }

  reset = (): void => {
    this.setState({ error: null })
  }

  render(): React.ReactNode {
    const { error } = this.state
    if (!error) return this.props.children
    const { fallback } = this.props
    if (typeof fallback === "function") return fallback({ error, reset: this.reset })
    if (fallback !== undefined) return fallback
    return <DefaultFallback error={error} reset={this.reset} />
  }
}
