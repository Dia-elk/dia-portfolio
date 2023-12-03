// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/tailwindcss',
    ],
})
