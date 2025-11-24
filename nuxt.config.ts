export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/test-utils"],

  plugins: ["~/plugins/gsap.client.ts"],

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "assets/scss/main.scss",
  ],

  app: {
    head: {
      title: "FlowPoup",
      link: [{ rel: "icon", type: "img/png", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
});
