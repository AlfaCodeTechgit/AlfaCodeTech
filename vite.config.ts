import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    cssCodeSplit: true,
  },
});

