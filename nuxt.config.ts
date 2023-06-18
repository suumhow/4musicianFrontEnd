// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // Simple usage
    'nuxt-purgecss',
    '@nuxthq/ui',
    '@morev/vue-transitions/nuxt',

    
  ],
  vueTransitions: {
    // The same options as in the plugin itself.
    // You will get an autocomplete using Nuxt 3.
    
  },
})
