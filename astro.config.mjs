import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; //importar tailwind
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:4321',
  integrations: [tailwind(), mdx(), react(), vue(), svelte(),sitemap()] //integrar tailwind
});