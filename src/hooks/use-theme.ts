import * as React from "react"

export type Theme = "dark" | "light"

const read = (): Theme =>
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("light")
    ? "light"
    : "dark"

/**
 * The active theme, read from the class on <html>. Dark unless `.light` is set,
 * matching the CSS. Updates when the class changes, so it works with next-themes.
 */
export function useTheme(): Theme {
  const [theme, setTheme] = React.useState<Theme>(read)

  React.useEffect(() => {
    setTheme(read())
    const observer = new MutationObserver(() => setTheme(read()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  return theme
}
