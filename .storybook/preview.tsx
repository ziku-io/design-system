import * as React from "react"
import type { Decorator, Preview } from "@storybook/react-vite"
import { DocsContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks"
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events"
import { addons } from "storybook/preview-api"
import { themes } from "./theme"
import { THEMES, useTheme, type ThemePreference } from "../src/lib/preferences"
import "../src/styles/globals.css"

/** The toolbar's theme switch, through the library's own store, so a story
 *  sees exactly what an app's reader sees after picking one. */
const withTheme: Decorator = (Story, context) => {
  const { setTheme } = useTheme()
  const picked = context.globals.theme as ThemePreference
  React.useEffect(() => setTheme(picked), [picked, setTheme])
  return <Story />
}

/** The toolbar's pick, caught at module load. A docs page draws its own frame,
 *  and an MDX page with no story never runs the decorator; the first
 *  `SET_GLOBALS` also fires before any container mounts, so a listener inside
 *  one would miss it and leave whatever theme was last stored. */
let picked: ThemePreference = "light"
const subscribers = new Set<() => void>()
const onGlobals = ({ globals }: { globals: Record<string, unknown> }) => {
  const next = THEMES.find((t) => t === globals.theme)
  if (!next) return
  picked = next
  subscribers.forEach((notify) => notify())
}
addons.getChannel().on(SET_GLOBALS, onGlobals)
addons.getChannel().on(GLOBALS_UPDATED, onGlobals)
const subscribe = (notify: () => void) => {
  subscribers.add(notify)
  return () => void subscribers.delete(notify)
}

const ThemedDocs = ({ children, context }: React.PropsWithChildren<DocsContainerProps>) => {
  const { resolved, setTheme } = useTheme()
  const theme = React.useSyncExternalStore(subscribe, () => picked)
  React.useEffect(() => setTheme(theme), [theme, setTheme])
  return (
    <DocsContainer context={context} theme={themes[resolved]}>
      {children}
    </DocsContainer>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  initialGlobals: { theme: "light" },
  globalTypes: {
    theme: {
      description: "Appearance",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { container: ThemedDocs },
    backgrounds: { disable: true },
    options: {
      // Docs in reading order, then Components and Blocks, each alphabetical
      // by title so a new block lands in its place without anyone keeping a
      // list. Stories inside one component keep the order of their file.
      // Storybook stringifies this function, so it may not reference anything
      // outside its own body.
      // Untyped on purpose: Storybook reads this inline function as source and
      // runs it as plain JavaScript, so an annotation is a syntax error there,
      // and wrapping it in a type assertion is rejected as not inline.
      // @ts-expect-error -- implicit any on (a, b), see above
      storySort: (a, b) => {
        const groups = ["Docs", "Components", "Blocks"]
        const docs = ["Getting started", "Foundations", "Auth flows", "Navigation", "Search and data"]
        const [groupA, ...restA] = a.title.split("/")
        const [groupB, ...restB] = b.title.split("/")
        if (groupA !== groupB) {
          const ga = groups.indexOf(groupA)
          const gb = groups.indexOf(groupB)
          return (ga < 0 ? groups.length : ga) - (gb < 0 ? groups.length : gb) || groupA.localeCompare(groupB)
        }
        const titleA = restA.join("/")
        const titleB = restB.join("/")
        if (groupA === "Docs" && titleA !== titleB) {
          const da = docs.indexOf(titleA)
          const db = docs.indexOf(titleB)
          return (da < 0 ? docs.length : da) - (db < 0 ? docs.length : db) || titleA.localeCompare(titleB)
        }
        return titleA.localeCompare(titleB, "en", { sensitivity: "base" })
      },
    },
  },
}
export default preview
