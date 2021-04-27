<template>
  <v-btn :color="buttonColor" :ripple="ripple" :to="to" fab text>
    <slot>
      <component :is="type" />
    </slot>
  </v-btn>
</template>

<script>
export default {
  components: {
    Pdf: () => import('./type/Pdf'),
    Excel: () => import('./type/Excel'),
    Sync: () => import('./type/Sync'),
  },
  props: {
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    ripple: {
      type: Boolean,
      default: null
    },
    to: {
      type: String,
      default: null
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
  created() {
    this.getDefaultColorButton();
  },
  methods: {
    /**
     * Set default color by component type(Ex: Pdf, Excel)
     */
    getDefaultColorButton() {
      return this.$options.components[this.type]?.().then(rs => this.defaultColor = rs.default?.color);
    }
  }
}
</script>