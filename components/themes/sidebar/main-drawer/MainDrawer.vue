<template>
<v-lazy>
  <v-navigation-drawer
    id="appDrawer"
    :dark="$vuetify.dark"
    app
    v-model="expanded"
    width="260"
    class="header__fixed--wrapper bg-sidebar"
    mobile-breakpoint="1000"
  >
    <v-toolbar light flat class="header__fixed--top" color="transparent">
      <v-toolbar-title class="ml-0 font-weight-bold header__fixed--logo py-1">
        <logo />
      </v-toolbar-title>
    </v-toolbar>

    <!-- <v-list dense expand v-if="items">
      <list-item v-for="(item, i) in items" :key="i" :item="item" />
    </v-list> -->
    <v-expansion-panels accordion multiple :dark="!$vuetify.dark" :value="openExpansion">
      <expansion-child v-for="(item, i) in items" :item="item" :key="i"></expansion-child>
    </v-expansion-panels>
    <slot name="custom-list"> </slot>
  </v-navigation-drawer>
</v-lazy>
</template>

<script>
export default {
  components: {
    ExpansionChild: () =>
      import("@/components/themes/sidebar/expansion-child/ExpansionChild"),
    Logo: () => import("@/components/themes/resources/Logo"),
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
      openExpansion: [0, 1, 2, 3],
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
