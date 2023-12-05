// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link:[ { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' }],
            script:[
                {
                    src:'https://www.googletagmanager.com/gtag/js?id=G-0MK9PSE6HZ',
                },
                {

                    src:'/js/tawk.js',
                },
                {
                    async:true,
                    src:'https://www.googletagmanager.com/gtag/js?id=G-0MK9PSE6HZ',
                },
                {
                    src:'/js/google-analytics.js',
                }
            ],
            meta:[
                {
                    name:'google-site-verification',
                    content:'DzP2i-arcWQ74Be-AaoAS0h4ic1xwU6xWZSj_jh5OKQ',
                }
            ],
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    devtools: {enabled: false},
    modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        'nuxt-simple-sitemap',
    ],
    sitemap: {
        urls: ['/','/about','/services','/contact'],
        excludeAppSources:true,
    },
})
