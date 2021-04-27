<template>
  <v-app-bar elevation="0" height="65" fixed min-width="100%" app color="white" class="overlap__border overlap__border--left">
    <v-lazy>
      <v-btn icon @click="$emit('update:drawer', !drawer)" v-if="$vuetify.breakpoint.mdAndDown">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-lazy>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: [Boolean],
      default: false,
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped>
  @import "./Header.scss";
</style>