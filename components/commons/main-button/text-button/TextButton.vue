<template>
  <v-btn
    :color="buttonColor"
    :disabled="disabled"
    :loading="loading"
    :text="text"
    :to="to"
    :elevation="elevation"
    :ripple="ripple"
    :min-width="minWidth"
    :outlined="outlined"
    :block="block"
    :large="large"
    :small="small"
    :class="[large ? 'btn-font' : '', dark ? 'white--text' : '']"
    :height="height"
  >
    <slot> </slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    text: {
      type: Boolean,
      default: true,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    elevation: {
      type: Number,
      default: 0,
    },
    ripple: {
      type: Boolean,
      default: false,
    },
    minWidth: {
      type: [Number, String],
      default: 0,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: [Boolean, String],
      default: false,
    },
    height: {
      type: [Number, String],
      default: 45,
    }
  },
  data: () => {
    return {
      defaultColor: "primary",
    };
  },
  computed: {
    /**
     * Set current button color by props color. If null default is color in child component type(Ex: Pdf, Excel)
     */
    buttonColor() {
      if (this.color) return this.color;
      return this.defaultColor;
    },
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
};
</script>

<style lang="scss" scoped>
@import "./TextButton.scss"
</style>
