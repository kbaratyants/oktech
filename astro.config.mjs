import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
site: "https://oktech.ru/",
  integrations: [
    svelte(),
    robotsTxt(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
