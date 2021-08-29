import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    title: 'V-school kết nối gia đình và nhà trường',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'V-school dịch vụ chia sẻ thông tin nhà trường phụ huynh, sổ liên lạc điện tử, thanh toán học phí trực tuyến' },
      { name: 'keywords', content: 'V-school, Nhà trường, phụ huynh, học sinh, chia sẻ thông tin nhà trường phụ huynh, sổ liên lạc điện tử, kết quả học tập, thanh toán học phí online, thanh toán học phí trực tuyến, download sổ liên lạc điện tử, thông tin học sinh, trao đổi với giáo viên, trao đổi với phụ huynh' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: "180x180",
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: "32x32",
        href: '/favicon-32x32.png'
      },

      {
        rel: 'icon',
        type: 'image/png',
        sizes: "16x16",
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: "#03306b"
      },
    ],
    script: []
  },
  plugins: [
    '~plugins/config',
    '~plugins/i18n',
    '~plugins/axios',
    '~plugins/api',
    '~plugins/vuelidate',
    '~plugins/vue-json-csv',
  ],
  components: false,
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDaEON2EjWbGPuZEZnp7QRvcS1DecB7gqA",
          authDomain: "notifications-vschool.firebaseapp.com",
          projectId: "notifications-vschool",
          storageBucket: "notifications-vschool.appspot.com",
          messagingSenderId: "131725339638",
          appId: "1:131725339638:web:6fe70ff2eca617f7a875d7",
          measurementId: "G-RCZG21NREZ"
        },
        services: {
          firestore: true,
        },
      },
    ],
  ],
  toast: {
    position: 'bottom-right',
    closeOnSwipe: false,
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
          'bg-logo': "#2A294E",
          primary: "#0956C6",
          'txt-secondary': "#677694",
          'txt-warning': "#FF9D00",
          'txt-error': "#E63946",
          'txt-success': "#1FBC67",
          'txt-active': "#0080FF",
          'txt-logo': "#34315D",
          'icon-active': "#0080FF",
          'icon-light': "#CECECE",
          'icon-secondary': "#677694",
          'color-warning': "#FFCE00",
          'color-success': "#1FBC67",
          'border-primary': "#707070",
        }
      }
    },
    defaultAssets: {
      font: {
        family: "Sarabun",
      },
      icons: "mdi",
    },
  },
  css: [
    // {src: join(__dirname, 'assets/scss/mixins/_mixins.scss'), lang: 'scss'},
    // '@/assets/scss/mixins/_mixins.scss',
    { src: '~assets/scss/reset.scss', lang: 'scss' },
    { src: '~assets/scss/custom.scss', lang: 'scss' },
    // '@/assets/css/utilities.min.css'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    styleResources: {
      scss: [
        './assets/scss/fonts.scss',
        './assets/scss/_mixins.scss',
        './assets/scss/utilities.scss',
      ],
    },
  },
  loading: {
    color: 'blue',
  },
  server: {
    port: 3000,
    host: `0.0.0.0`,
  },
}
