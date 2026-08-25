import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
  // ponytail: reuse vite.config.ts alias/tailwind, but drop the lib build + dts plugin
  viteFinal: (cfg) => ({
    ...cfg,
    build: undefined,
    plugins: (cfg.plugins ?? [])
      .flat()
      .filter((p) => !(p && "name" in p && String(p.name).startsWith("vite:dts"))),
  }),
}
export default config
