<template>
  <v-card outlined class="rounded-lg d-flex mt-6 px-10 py-4">
    <div class="col-2 mr-2 pa-0" v-if="!clean">
      <slot name="imgContent"></slot>
    </div>
    <div class="col-5 ml-2 pa-0" v-if="!clean">
      <slot name="contentCard"></slot>
    </div>
    <div class="col-1 pa-0" v-if="!clean"></div>
    <div class="col-1 ml-md-8" v-if="!clean">
      <slot name="btn-right-1"></slot>
      <slot name="btn-right-2"></slot>
    </div>
    <slot v-if="clean"></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    clean: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./MainCard.scss";
</style>
