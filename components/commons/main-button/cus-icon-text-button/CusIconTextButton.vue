<template>
  <div class="d-flex cusIconTextBtn" :class="{
    'cusIconTextBtn--depressed' : depressed
  }">
    <slot name="icon"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      depressed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped  src="./CusIconTextButton.scss">
</style>