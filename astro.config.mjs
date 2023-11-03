import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://test.oktech.ru/",
  integrations: [tailwind(), svelte()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
