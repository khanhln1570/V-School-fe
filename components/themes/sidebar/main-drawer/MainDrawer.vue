<template>
  <v-navigation-drawer
    id="appDrawer"
    :dark="$vuetify.dark"
    app
    v-model="expanded"
    width="260"
    class="header__fixed--wrapper bg-sidebar"
  >
    <v-toolbar light flat class="header__fixed--top" color="transparent">
      <v-toolbar-title class="ml-0 font-weight-bold header__fixed--logo py-1">
        <logo />
      </v-toolbar-title>
    </v-toolbar>

    <v-list dense expand v-if="items">
      <list-item v-for="(item, i) in items" :key="i" :item="item" />
    </v-list>
    <slot name="custom-list"> </slot>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {
    ListItem: () => import("@/components/themes/sidebar/list-item/ListItem"),
    Logo: () => import("@/components/themes/resources/Logo")
  },
  props: {
    drawer: {
      type: Boolean,
      default: false,
      required: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    app: {
      type: Boolean,
      default: false,
    },
    expandToMini: {
      type: Boolean,
      default: false,
    },
    items: {
      type: [Object, Array],
      default: null,
    },
    temporary: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    clipped: {
      type: Boolean,
      default: false,
    },
    miniVariantWidth: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    expanded: {
      // getter
      get: function () {
        return this.drawer;
      },
      // setter
      set: function (newValue) {
        if (!newValue) {
          this.$emit("clickOffDrawer", newValue);
        }
      },
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit("toggleSidebar", !this.expandToMini);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./MainDrawler.scss";
</style>
