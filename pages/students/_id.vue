<template>
  <div class="d-flex justify-center">
    <div></div>
    <div class="col-8 d-flex justify-center">
      <div class="col-3">1</div>
      <div class="col-5">1</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
</style>