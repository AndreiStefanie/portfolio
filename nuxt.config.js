module.exports = {
  css: [
    '@/assets/css/main.scss'
  ],
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Andrei Stefanie - Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Andrei Stefanie Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ecc51f' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: []
    }]
  ]
}
