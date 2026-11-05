import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { LanguagePicker, PreferencesMenu, ThemePicker, ZoomStepper } from "./preference-menus"
import { UIStringsProvider, defaultStrings } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta = {
  title: "Blocks/Preferences",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}
export default meta

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "pt-PT", label: "Português" },
]

/**
 * The one control an app puts in its top bar. Appearance switches the whole
 * page; Language swaps the dictionary, which is the app's job, so the story
 * does it here with `UIStringsProvider`; Zoom takes a typed percentage or steps
 * through the levels, and the reset icon appears once it is off 100%.
 */
export const Menu: StoryObj = {
  render: function Menu() {
    const [language, setLanguage] = React.useState("en")
    return (
      <UIStringsProvider strings={language === "pt-PT" ? ptPT : defaultStrings}>
        <PreferencesMenu
          language={{ options: LANGUAGES, value: language, onChange: setLanguage }}
        />
      </UIStringsProvider>
    )
  },
}

/** The three controls on their own, for a settings page rather than a menu. */
export const Controls: StoryObj = {
  render: function Controls() {
    const [language, setLanguage] = React.useState("en")
    return (
      <div className="grid justify-items-start gap-4">
        <ThemePicker />
        <LanguagePicker
          options={LANGUAGES}
          value={language}
          onChange={setLanguage}
          className="w-48"
        />
        <ZoomStepper />
      </div>
    )
  },
}
