import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
// https://astro.build/config
import vue from "@astrojs/vue";
import dynamicImport from 'vite-plugin-dynamic-import'
// https://astro.build/config
export default defineConfig({
  
  adapter: node({
    mode: 'middleware'
  }),
  integrations: [vue()],
  output: 'server',  
  vite: {
    plugins: [
      dynamicImport()
    ]
  }
});