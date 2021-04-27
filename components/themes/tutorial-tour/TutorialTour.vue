<template>
  <div class="tour" v-show="show">
    <div class="tour__overlay" v-if="show" @touchmove.prevent="">
      <div class="tour__overlap" :style="tourStyle">
        <div class="tour__text" :class="position">
          <slot>
            <div>{{ text }}</div>
          </slot>
        </div>
      </div>
      <div class="tour__cancel" @click.stop="skip">
        <span class="tour__cancel__text">Skip tutorial</span>
      </div>
      <div class="tour__actions">
        <v-btn v-if="step > 0" @click.stop="prev">Previous</v-btn>
        <v-btn @click.stop="next" v-if="step < steps.length - 1">Next</v-btn>
        <v-btn @click.stop="skip" v-else>Okay</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    step: -1,
    text: '',
    tourStyle: {},
    position: '',
    preventScroll: false,
    lastY: 0,
    show: false
  }),
  watch: {
    value(show) {
      if (show) {
        this.step = -1;
        this.next();
      }
    }
  },
  mounted() {
    const tutorialSession = sessionStorage.getItem('tutorial');

    if(!tutorialSession) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.next();
          this.show = true;
        }, 300)
      })
    }
  },
  methods: {
    next() {
      if(this.step <= this.steps.length) this.step++;
      const stepIndex = this.step;
      const step = this.steps[stepIndex];
      if (step) {
        const el = document.querySelector(step.el);
        this.setPosition(el, step, stepIndex);
      }
    },
    prev() {
      if(this.step >= 0) this.step--;
      const stepIndex = this.step;
      const step = this.steps[stepIndex];
      if (step) {
        const el = document.querySelector(step.el);
        this.setPosition(el, step, stepIndex);
      }
    },
    storeSesstionTour() {
      return sessionStorage.setItem('tutorial', 1);
    },
    setPosition(el, step, stepIndex) {
      if (!el) return ;

      let blockPosition = 'center';
      if(stepIndex === 0) {
        blockPosition = 'end';
      }
      el.scrollIntoView({block: blockPosition});

      const rect = el.getBoundingClientRect();
      this.text = step.text;
      this.tourStyle = {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top}px`,
        left: `${rect.left}px`
      };
      if (!step.position) {
        step.position = 'bottom';
      }
      this.position = step.position;
    },
    skip() {
      this.storeSesstionTour();
      this.$emit('skip', false);
    },
  }
};
</script>

<style lang="scss">
  @import './TutorialTour.scss';
</style>