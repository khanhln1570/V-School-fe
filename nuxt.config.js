import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: 'S-payment Admin',
    title: 'S-payment Admin',
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
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // },
        light: {
          'bg-sidebar': "#031B4D",
          primary: "#0956C6",
          'txt-secondary': "#677694",
          'txt-warning': "#FF9D00",
          'txt-error': "#E63946",
          'txt-success': "#1FBC67",
          'txt-active': "#0080FF",
          'icon-light': "#CECECE",
          'icon-secondary': "#677694",
        }
      }
    },
    defaultAssets: {
      font: {
        family: "Montserrat",
      },
      icons: "mdi",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  ,
  server: {
    port: 3000,
    // host: `0.0.0.0`,
  },
}
