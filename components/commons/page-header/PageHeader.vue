<template>
  <div class="pageHeader mb-10">

    <a
      exact-path
      @click="$router.back()"
      class="pageHeader__subTitle font-weight-bold txt-active--text"
      ><img src="@/assets/images/back.svg" alt="back" /> Trở lại</a
    >
    <div class="d-flex justify-start align-center">
      <h2 class="title pageHeader__title font-weight-bold mr-2 d-inline">
        {{ title }}
      </h2>
      <slot name="titleIcon"></slot>
    </div>
      <slot name="subTitle"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    backTo: {
      type: String,
      default: null,
    },
  },
  methods: {
    hasHistory () { return window.history.length > 2 }
  }
};
</script>

<style lang="scss" scoped>
</style>
