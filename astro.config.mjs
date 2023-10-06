import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://651ea4b2ef1731188672f344--celebrated-taiyaki-7578d7.netlify.app/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
