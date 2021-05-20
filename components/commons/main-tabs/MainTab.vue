<template>
  <div>
    <v-tabs v-model="tab">
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="(item, index) in items" :key="index">
        {{ item.label }}
      </v-tab>
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./MainTab.scss";
</style>