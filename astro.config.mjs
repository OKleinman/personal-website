// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { adapterStatic } from "@astrojs/adapter-static";

// https://astro.build/config
export default defineConfig({
	site: "https://okleinman.github.io",
	base: "/personal-website/",
	output: "static",
adapter: adapterStatic(),
  vite: {
    plugins: [tailwindcss()],
  },
});
