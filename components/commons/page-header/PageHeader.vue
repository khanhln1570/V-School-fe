<template>
  <div class="d-flex align-center pb-2">
    <h1 class="text-capitalize">{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>

</style>