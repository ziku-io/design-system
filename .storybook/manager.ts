import { addons } from "storybook/manager-api"
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events"
import { themes } from "./theme"

const DARK_QUERY = matchMedia("(prefers-color-scheme: dark)")
let picked: unknown = "light"

// The toolbar's theme global lives in the manager too, so the chrome follows it
// rather than staying light around a dark story. `system` tracks the OS live.
addons.register("ziku/theme", (api) => {
  const apply = () => {
    const dark = picked === "dark" || (picked === "system" && DARK_QUERY.matches)
    api.setOptions({ theme: dark ? themes.dark : themes.light })
  }
  const onGlobals = ({ globals }: { globals: Record<string, unknown> }) => {
    picked = globals.theme
    apply()
  }
  api.on(SET_GLOBALS, onGlobals)
  api.on(GLOBALS_UPDATED, onGlobals)
  DARK_QUERY.addEventListener("change", apply)
})

addons.setConfig({ theme: themes.light })
