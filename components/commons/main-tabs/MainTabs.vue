<template>
  <div class="tab">
    <v-tabs v-model="tab">
      <v-tabs-slider color="txt-active"></v-tabs-slider>

      <v-tab v-for="(item, index) in items" :key="index">
        {{ item.label }}
      </v-tab>
      <v-spacer></v-spacer>
      <div class="tab__right d-flex">
        <slot name="tabRight"></slot>
      </div>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card flat>
          <slot :name="items[index].value"></slot>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: [Array],
      default: null,
    },
  },
  data() {
    return {
      tab: null,

      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./MainTabs.scss";
</style>