// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-vite", "@vite-pwa/nuxt"],
  quasar: {
    // Optional string | boolean
    sassVariables: "assets/quasar-variables.sass",
    // Optional string[]
    // If you use animations, add Quasar Extra CSS animation URL here.
    // NOTE: This CSS files are inserted on module plugin template, NOT on `nuxt.config`.
    css: ["@quasar/extras/material-icons/material-icons.css"],
    // List of extra Quasar Plugins
    // auto-instaled: [Platform, Body, Dark, Screen, History, Lang, IconSet]
    // optional: [AddressbarColor, AppFullscreen, AppVisibility, BottomSheet, Dialog,
    //            LoadingBar, Loading, Notify, LocalStorage, SessionStorage]
    plugins: [],
    /* Quasar UI config -- you'll notice in Quasar docs when you need it */
    config: {
      dark: false,
    },
  },
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: "nfa-app",
      description: "nfa-app",
      theme_color: "#ffffff",
      lang: "en",
      short_name: "nfa-app",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          src: "assets/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "assets/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
    icon: {
      source: "/assets/icon.png",
    },
  },
});
