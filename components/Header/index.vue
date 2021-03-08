<template>
  <div>
    <v-breadcrumbs :items="items" divider="/" class="pa-0 pl-4"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: [Object, Array],
      default: null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// @import url('./Header.scss');
</style>
