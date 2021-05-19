<template>
  <div class="pageHeader">
    <nuxt-link
      v-if="backTo"
      :to="backTo"
      class="pageHeader__subTitle font-weight-bold txt-active--text"
      ><img src="@/assets/images/back.svg" alt="back" /> Trở lại</nuxt-link
    >
    <div class="d-flex justify-start align-center">
      <h2 class="title pageHeader__title txt-secondary--text mt-2 mr-2 d-inline">
        {{ title }}
      </h2>
      <slot name="titleIcon"></slot>
    </div>
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
};
</script>

<style lang="scss" scoped>
</style>