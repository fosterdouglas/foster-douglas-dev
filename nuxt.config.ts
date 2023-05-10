// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    // Take Over Mode handles the declaration files for us
    shim: false,
    strict: false,
  },
  css: ["~/assets/styles/entry.scss"],
  ssr: false,
});
