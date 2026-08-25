import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/react-vite",

  /**
   * Storybook loads the project's vite.config.ts, which is set up to build the
   * *library*. Two things have to go, or the static build emits `dist/`-style
   * output into storybook-static and never writes an index.html:
   *
   *  - `build.lib` and its externals, which turn the app build into a bundle
   *  - the dts plugin, which writes .d.ts files into the output directory
   *
   * Storybook's own `build` settings are kept — nulling the whole object is
   * what broke the published site the first time.
   */
  viteFinal: (cfg) => ({
    ...cfg,
    build: { ...cfg.build, lib: undefined, rollupOptions: undefined },
    plugins: (cfg.plugins ?? [])
      .flat()
      .filter((plugin) => !(plugin && "name" in plugin && String(plugin.name).includes("dts"))),
  }),
}
export default config
