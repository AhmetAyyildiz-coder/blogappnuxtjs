import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode:'spa',
  head: {
    titleTemplate: '%s - bloggappnuxt',
    title: 'bloggappnuxt',
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
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  router : {
    middleware:['auth']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/firebase' ,
      {
        config:{
          apiKey: "AIzaSyADDMXKafUskXOd2W9nQJ18_QaV6RjzBpI",
          authDomain: "nuxtjsblogapp.firebaseapp.com",
          projectId: "nuxtjsblogapp",
          storageBucket: "nuxtjsblogapp.appspot.com",
          messagingSenderId: "562555317076",
          appId: "1:562555317076:web:3ca898324432669e67f6c1",
          measurementId: "G-NY36PXPJ5L"
        },
        services:{
          auth: {
            persistence : 'local' ,
            initialize : {
              // gerçekleşen olaylara göre tetiklenicek store'lar. diyebiliriz.
              // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            }
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
  ** i18n module configuration
  ** https://nuxt-community.github.io/nuxt-i18n/options-reference.html
  */
  i18n: {
    locales: [
      { code: 'en', file: 'en-US.js', name: 'English' },
      { code: 'tr', file: 'tr-TR.js', name: 'Turkish' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      fallbackLocale: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
