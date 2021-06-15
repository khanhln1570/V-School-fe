<template>
  <div class="d-flex cusIconTextBtn" :class="{
    'cusIconTextBtn--depressed' : depressed,
    'cusIconTextBtn--new' : dot
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
      },
      dot: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped  src="./CusIconTextButton.scss">
</style>