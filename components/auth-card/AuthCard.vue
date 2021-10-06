<template>
  <v-card
    class="card rounded-lg signin-left py-xl-10 px-md-8 py-md-8 mx-2"
    elevation="11"
    :class="{
      'pa-8 ': $vuetify.breakpoint.mobile,
    }"
    :min-width="$vuetify.breakpoint.mobile ? '95%':'500px'"
    max-width='800px'
    >
      <div class="d-flex justify-center align-center text-right">
        <div class="">
          <div class="display-2 font-weight-normal logo-text">V-School</div>
          <div>
            <small>beta</small>
          </div>
        </div>
      </div>
      <slot></slot>
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
@import "./AuthCard.scss";
</style>
