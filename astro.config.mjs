import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://inverno.iesp.uerj.br/",
//  site: "https://fmeireles.com/",
//  base: "/escola",
  trailingSlash: "always",
  integrations: [tailwind(), mdx(), sitemap()],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "es"],
  }
});
