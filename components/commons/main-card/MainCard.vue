<template>
  <v-card
    outlined
    class="mt-6 px-10 py-7 rounded-lg d-flex justify-space-between"
  >
    <div class="d-flex">
      <slot name="titleImg"></slot>
      <div class="ml-10">
        <h2 class="font-weight-medium">
          <slot name="name"></slot>
        </h2>
        <div class="mt-5">
          <p class="font-weight-medium mb-1">
            <slot name="phone"></slot>
          </p>
          <p class="text--secondary mb-1">
            <slot name="address"></slot>
          </p>
          <p class="text--secondary mb-1">
            <slot name="email"></slot>
          </p>
          <p>
            <slot name="img"></slot>
            <slot name="child"></slot>
          </p>
        </div>
      </div>
    </div>

    <div>
      <v-btn
        elevation="0"
        block
        large
        class="text-lowercase rounded-lg"
        style="color: #677694"
      >
        <slot name="first-btn"></slot
      ></v-btn>
        <!-- <v-btn
          elevation="0"
          block
          large
          outlined
          color="red"
          class="text-lowercase rounded-lg mt-4"
        >
        </v-btn> -->

    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./MainCard.scss";
</style>