<template>
  <v-card outlined class="rounded-lg d-flex mt-6 px-10 py-4">

      <div class="col-2 mr-2 pa-0">
      <slot name="imgContent"></slot>
    </div>
    <div class="col-5 ml-2 pa-0">
      <slot name="contentCard"></slot>
    </div>
    <div class="col-2 pa-0"></div>
    <div class="col-1">
      <slot name="btn-right-1"></slot>
      <slot name="btn-right-2"></slot>
    </div>

  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./MainCard.scss";
</style>
