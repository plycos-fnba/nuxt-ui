const PORT = 3000;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt-ui/",
    buildAssetsDir: "assets",
  },
  ssr: false,
  colorMode: {
    preference: "system",
  },
  css: ["~/assets/css/fonts.css"],
  devtools: { enabled: true },
  devServer: {
    port: PORT,
  },
  modules: ["@nuxt/ui", "@vueuse/nuxt"],
  ui: {
    global: true,
  },
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    server: {
      hmr: {
        clientPort: PORT,
      },
    },
  },
});
