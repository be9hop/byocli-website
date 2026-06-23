// @ts-check
import { defineConfig } from "astro/config";

// Cloudflare Pages serves the static output of `astro build` (./dist) directly.
// No adapter needed — Astro's static output is the simplest, fastest deploy.
export default defineConfig({
  site: "https://byocli.pages.dev",
  output: "static",
  build: {
    inlineStylesheets: "auto"
  }
});
