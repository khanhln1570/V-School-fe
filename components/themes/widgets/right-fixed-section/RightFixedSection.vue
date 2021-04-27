<template>
  <div class="rightbar__section--container pa-4">
    <div class="rightbar__section--heading">
      <h3 class="title">
        {{ title }}
        <slot name="titleBtn" :icon="icon">
          <v-icon color="black" v-if="icon">{{ icon }}</v-icon>
        </slot>
      </h3>
      
      <v-btn text fab class="rightbar__section--close pointer" @click="closeRightbar">
        <v-icon class="font-weight-bold" size="28">mdi-close</v-icon>
      </v-btn>
    </div>

    <slot name="heading"></slot>

    <div class="rightbar__section--context">
      <slot name="context" />
    </div>
  </div>
</template>

<script>
import { TOGGLE_RIGHTBAR } from '@/store/dynamic-columns/dynamic-columns.constant';

export default {
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    closeRightbar() {
      this.$store.commit(`dynamic-columns/${ TOGGLE_RIGHTBAR }`, false);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './RightFixedSection.scss';
</style>