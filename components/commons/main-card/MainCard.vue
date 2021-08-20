<template>
  <v-card outlined class="rounded-lg d-flex mt-6 px-10 py-4">
    <v-row class="">
      <div class="col-12 col-md-2" v-if="!clean">
        <slot name="imgContent"></slot>
      </div>
      <div class="col-12 col-md-7" v-if="!clean">
        <slot name="contentCard"></slot>
      </div>
      <div class="col-12 col-md-3" v-if="!clean">
        <slot name="btn-right-1"></slot>
        <slot name="btn-right-2"></slot>
      </div>
      <slot v-if="clean"></slot>
    </v-row>
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
