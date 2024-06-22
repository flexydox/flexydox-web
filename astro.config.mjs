import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
   integrations: [starlight({
    title: "Flexydox docs",
    description: "Documentation for Flexydox",
    pagefind: true

   })],
   output: 'static'
});