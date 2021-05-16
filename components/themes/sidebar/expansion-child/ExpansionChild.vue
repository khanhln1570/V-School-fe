<template>
  <v-expansion-panel>
    <v-expansion-panel-header color="bg-sidebar pl-8">Item</v-expansion-panel-header>
    <v-expansion-panel-content color="bg-sidebar"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    item: {
      type: [Array, Object, String],
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>