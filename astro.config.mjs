import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; //importar tailwind
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()] //integrar tailwind
});