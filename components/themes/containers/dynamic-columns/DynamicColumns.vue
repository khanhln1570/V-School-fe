<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col :md="screenMainContent">
        <div class="main__content pa-4">
          <slot name="main-content" />
        </div>
      </v-col>
      <v-col :md="screenRightBar" class="pl-0 transition-width rightbar__section separator separator--left" v-if="showRightbar">
        <v-skeleton-loader type="article@5" v-if="loadingRightbar" />

        <slot name="rightbar-content" v-else />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const BODY_EL = document.querySelector('body');
const LOCK_SCROLL_CLASS = 'lock-scroll';
const SCREEN_FULL = '12';
const SCREEN_INCLUDE_RIGHTBAR = '8';
const SCREEN_RIGHTBAR = '4';

import { TOGGLE_RIGHTBAR } from '@/store/dynamic-columns/dynamic-columns.constant';
import { mapGetters } from 'vuex';

export default {
  props: {
    loadingRightbar: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      screenRightBar: SCREEN_RIGHTBAR
    }
  },
  computed: {
    ...mapGetters({
      showRightbar: 'dynamic-columns/showRightbar',
    }),
    screenMainContent() {
      if(!this.showRightbar) return SCREEN_FULL;
      
      return SCREEN_INCLUDE_RIGHTBAR;
    }
  },
  mounted() {
    if(BODY_EL) BODY_EL.classList.add(LOCK_SCROLL_CLASS);
  },
  beforeDestroy() {
    this.$store.commit(`dynamic-columns/${ TOGGLE_RIGHTBAR }`, false);
    BODY_EL.classList.remove(LOCK_SCROLL_CLASS);
  }
}
</script>

<style lang="scss" scoped>
@import './DynamicColumns.scss'
</style>