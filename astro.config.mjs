import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  
  adapter: node({
    mode: 'middleware'
  }),
  integrations: [vue()],
  output: 'server',  
});