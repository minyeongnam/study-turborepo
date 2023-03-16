import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
      "@ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  define: {
    global: "window",
  },
});
