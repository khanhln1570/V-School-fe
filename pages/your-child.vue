<template>
  <div>
    <p class="mt-6">Con của bạn:</p>
    <v-alert
      v-for="(child, index) in children"
      :key="index"
      outlined
      class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4"
    >
      <div class="d-flex justify-space-between">
        <div class="ml-1 font-weight-medium">
          <span
            class="dot mr-2"
            :class="{ green: child.isActive, red: !child.isActive }"
          ></span>
          {{ child.name }}
        </div>
        <span>{{ child.address }}</span>
      </div>
    </v-alert>
  </div>
</template>

<script>
export default {
  layout: "auth",
  computed: {
    children() {
      return this.$store.state.yourChild.children;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../pages/__styles/signin.scss";
.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
</style>
