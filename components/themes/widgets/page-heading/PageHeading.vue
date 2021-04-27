<template>
  <div class="page__heading d-flex flex-column justify-center mb-4 pb-5" ref="heading">
    <div class="page__heading--back mb-3" v-if="backTo">
      <nuxt-link :to="backTo" class="d-flex align-items-center"
      >
        <v-icon left class="mr-1" color="primary">
          mdi-chevron-left
        </v-icon>
        Back
      </nuxt-link>
    </div>
    <div class="page__heading--contain">
      <v-row no-gutters>
        <v-col md="6" class="d-flex align-center">
          <span class="title mr-6">{{ pageTitle }}</span>
          <slot name="actions"></slot>
        </v-col>
        <v-col md="6">
          <slot name="filter" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
const STICKY_CLASS = 'page__heading--sticky';

export default {
  name: 'PageHeading',
  props: {
    backTo: {
      type: String,
      default: null
    },
    pageTitle: {
      type: String,
      default: null
    }
  },
  data: () => {
    return {
      prevScrollpos: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      if(this.$refs) {
        this.$refs.heading.classList.add(STICKY_CLASS);
      }
    })

    this.prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', this.handlerScroll)
  },
  methods: {
    handlerScroll() {
      let options;
      const currentScrollPos = window.pageYOffset;

      if (this.prevScrollpos > currentScrollPos) {
        options = {
          top: `0`,
        }
      } else {
        options = {
          top: `-${this.$refs.heading.clientHeight + 1}px`, // +1 for height of border.
        }
      }
      
      this.styleOption(options)
      this.prevScrollpos = currentScrollPos;
    },
    styleOption(options) {
      if(this.$refs && this.$refs.heading) {
        this.$refs.heading.style.top = options.top;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handlerScroll);
  }
}
</script>

<style lang="scss" scoped>
  @import './PageHeading.scss'
</style>