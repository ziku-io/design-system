import type { Meta, StoryObj } from "@storybook/react-vite"

import { Wordmark } from "./wordmark"

const meta: Meta<typeof Wordmark> = {
  title: "Blocks/Wordmark",
  component: Wordmark,
  tags: ["autodocs"],
  args: { children: "ziku" },
}
export default meta

export const Default: StoryObj<typeof Wordmark> = {}

/** The tracking is in `em`, so one text class resizes the whole mark. */
export const Sizes: StoryObj<typeof Wordmark> = {
  render: (args) => (
    <div className="flex items-end gap-8">
      <Wordmark {...args} className="text-base" />
      <Wordmark {...args} />
      <Wordmark {...args} className="text-4xl" />
      <Wordmark {...args} className="text-6xl" />
    </div>
  ),
}

/** Any name. Case is the app's to choose. */
export const Names: StoryObj<typeof Wordmark> = {
  render: () => (
    <div className="grid gap-4">
      <Wordmark className="text-3xl">northwind</Wordmark>
      <Wordmark className="text-3xl">Contoso</Wordmark>
      <Wordmark className="text-3xl">acme labs</Wordmark>
    </div>
  ),
}
