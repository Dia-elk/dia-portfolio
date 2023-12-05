export default [
    {UserAgent: '*'},
    {Disallow: ''},
    {Allow: '*'},
    {Sitemap:  process.env.NUXT_PUBLIC_SITE_URL + '/sitemap.xml'},
]