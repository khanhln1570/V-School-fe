import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Durian Admin',
    title: 'Durian Admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~plugins/config',
    '~plugins/i18n',
    '~plugins/axios',
    '~plugins/api',
    '~plugins/vuelidate',
    '~plugins/vue-notify',
  ],
  components: false,
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  styleResources: {
    scss: [
      './assets/scss/fonts.scss',
      './assets/scss/reset.scss',
      './assets/scss/_mixins.scss',
      './assets/scss/utilities.scss',
      './assets/scss/customs.scss',
    ],
  },
  router: {
    middleware: [
      'authentication'
    ]
  },

  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          'bg-main': "#EAEDF6",
          'bg-sidebar': "#231F20",
          'bg-dark': "#231F20",
          primary: "#DBB95E",
          'txt-secondary': "#939598",
          'txt-gray': "#868E96",
          'txt-disable': "#C7C8CA",
        }
      }
    },
    defaultAssets: {
      font: {
        family: "Helvetica Neue",
      },
      icons: "mdi",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  ,
  server: {
    port: 8000,
    host: `0.0.0.0`,
  },
}
