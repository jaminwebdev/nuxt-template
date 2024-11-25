// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    classSuffix:''
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    typeCheck: true
  }
})