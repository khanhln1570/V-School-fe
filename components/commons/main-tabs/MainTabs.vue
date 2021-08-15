<template>
  <div class="tab">
    <v-tabs v-model="tab" @change="handleChangeTab">
      <v-tabs-slider color="txt-active"></v-tabs-slider>

      <v-tab v-for="(item, index) in items" :key="index" :disabled="item.disabled">
        {{ item.label }}
      </v-tab>
      <v-spacer></v-spacer>
      <div class="tab__right d-flex">
        <slot name="tabRight"></slot>
      </div>
    </v-tabs>
    <v-tabs-items v-model="tab" class="mt-10">
      <v-tab-item v-for="(item, index) in items" :key="index">
          <slot :name="items[index].value"></slot>
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
  methods: {
    handleChangeTab() {
     this.$emit('changeTab', this.tab);
    }
  },
  watch: {
    tab(value) {
      const { query } = this.$route;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...query,
          tab: value,
        },
      });

      if (this.refetch) this.onFetchItems();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./MainTabs.scss";
</style>