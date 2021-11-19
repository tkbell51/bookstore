export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bookstore',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-slick-carousel.js',
    '~plugins/clickaway',
    '~/plugins/vue-instantsearch',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    '@nuxtjs/snipcart',
    'nuxt-content-algolia',
    '@nuxt/image',
  ],
  snipcart: {
    key: process.env.SNIPCART_KEY,

    attributes: [
      ['data-config-modal-style', 'side'],
      // ['data-config-add-product-behavior', 'none']
    ],
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/bwa/image/upload/',
    },
  },
  cloudinary: {
    cloudName: 'bwa',
    useComponent: true,
  },
  styleResources: {
    scss: ['~/assets/scss/*.scss'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/cloudinary',
    '@nuxtjs/svg-sprite',
  ],
  fontawesome: {
    icons: {
      solid: [
        'faEnvelope',
        'faCaretDown',
        'faArrowRight',
        'faInfo',
        'faCheck',
        'faBars',
        'faCloudDownloadAlt',
        'faPaperclip',
        'faRocket',
        'faCreditCard',
        'faStar',
      ],
      brands: ['faDev', 'faInstagram', 'faPinterest'],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ['vue-instantsearch', 'instantsearch.js/es'] },

  nuxtContentAlgolia: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    paths: [
      {
        name: 'products',
        index: 'products',
        fields: ['title', 'description', 'bodyPlainText', 'category', 'type'],
      },
    ],
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      const removeMd = require('remove-markdown')
      if (document.extension === '.md') {
        document.bodyPlainText = removeMd(document.text)
      }
    },
  },
}
