<template>
  <div>
    <v-tabs color="black" slider-color="primary" class="mt-10">
      <v-tab>{{tab}}</v-tab>
    </v-tabs>
    <v-alert outlined class="mt-6 rounded-lg pa-8">
      <slot name="tabContent"></slot>
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../page-body/PageBody.scss";
</style>