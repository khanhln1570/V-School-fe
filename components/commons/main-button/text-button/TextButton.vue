<template>
  <v-btn :color="buttonColor" :text="text" :to="to" :elevation="elevation" :ripple="ripple">
    <slot>

    </slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null
    },
    text: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    elevation: {
      type: Number,
      default: null,
    },
    ripple: {
     type: Boolean,
      default: false
    },
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