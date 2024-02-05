const PORT = 3000;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/apps/nuxt-ui/",
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

  modules: ["@nuxt/ui", "@vueuse/nuxt", "@pinia/nuxt"],

  ui: {
    global: true,
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  typescript: {
    strict: true,
    shim: false,
  },

  runtimeConfig: {
    public: {
      fetchPrefix: "/apps",
    },
  },

  vite: {
    server: {
      hmr: {
        clientPort: PORT,
      },
    },
  },
});
