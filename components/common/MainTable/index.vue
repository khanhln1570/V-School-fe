<template>
  <v-data-table
    class="elevation-1 table"
    :headers="headers"
    :items="items"
    :items-per-page="5"
    :item-key="itemKey"
  >
    <template v-slot:[`item.actions`]>
      <v-icon small class="mr-2"> mdi-pencil </v-icon>
      <v-icon small class="mr-2"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    itemKey: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
// @import url("./MainTable.scss");
</style>