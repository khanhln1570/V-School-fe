<template>
  <v-btn :color="buttonColor" :disabled="disabled" :loading="loading" :text="text" :to="to" :elevation="elevation" :ripple="ripple" :min-width="minWidth" :outlined="outlined">
    <slot>

    </slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    text: {
      type: Boolean,
      default: true
    },
    to: {
      type: [String, Object],
      default: null
    },
    elevation: {
      type: Number,
      default: 0,
    },
    ripple: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: [Number, String],
      default: 0
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      defaultColor: 'primary'
    }
  },
  computed: {
    /**
     * Set current button color by props color. If null default is color in child component type(Ex: Pdf, Excel) 
     */
    buttonColor() {
      if(this.color) return this.color;
      return this.defaultColor;
    }
  },
  // created() {
  //   this.getDefaultColorButton();
  // },
  // methods: {
  //   /**
  //    * Set default color by component type(Ex: Pdf, Excel)
  //    */
  //   getDefaultColorButton() {
  //     return this.$options.components[this.type]?.().then(rs => this.defaultColor = rs.default?.color);
  //   }
  // }
}
</script>