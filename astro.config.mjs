import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind"; //importar tailwind

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()] //integrar tailwind
});