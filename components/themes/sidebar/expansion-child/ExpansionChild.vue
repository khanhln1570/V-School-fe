<template>
  <v-expansion-panel class="expansion">
    <v-expansion-panel-header
      color="bg-sidebar pl-8 text-uppercase expansion__title"
    >
      <template v-slot:actions>
        <v-icon color="icon-secondary"> $expand </v-icon> </template
      >{{ item.group.title }}</v-expansion-panel-header
    >
    <v-expansion-panel-content color="bg-sidebar expansion__body">
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(subItem, i) in item.group.items" :key="i" active-class="expansion__body__item--active">
            <v-list-item-content>
              <v-list-item-title
                v-text="subItem.title"
                class="pl-5 expansion__body__item__title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
@import "./ExpansionChild.scss";
</style>