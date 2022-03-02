<template>
  <v-app class="bg-color">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title = "Vschool - Về chúng tôi";
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../pages/__styles/about.scss";
</style>
