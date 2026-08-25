import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import path from "node:path"
import pkg from "./package.json" with { type: "json" }

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ tsconfigPath: "./tsconfig.build.json", rollupTypes: true }),
  ],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    lib: { entry: path.resolve(__dirname, "src/index.ts"), formats: ["es"], fileName: "index" },
    // ponytail: externalize every dep so apps dedupe react/radix/zod instead of bundling copies
    rollupOptions: {
      external: [/^react(\/|$)/, /^react-dom(\/|$)/, ...Object.keys(pkg.dependencies).map((d) => new RegExp(`^${d}(/|$)`))],
    },
  },
})
