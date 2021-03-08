<template>
  <v-navigation-drawer
    dark
    class="d-flex flex-column main-drawler"
    v-model="myDrawer"
    :class="app ? 'nav-drawler':''"
    :permanent="permanent"
    :fixed="fixed"
    :app="app"
    :expand-on-hover="expandOnHover"
    :temporary="temporary"
    :right="right"
    :clipped="clipped"
    :mini-variant-width="miniVariantWidth"
  >
    <slot>
      <v-list v-if="items" class="pt-0">
        <v-list-item :ripple="false" class="mb-6" :class="expandOnHover ? 'pl-3':''">
          <v-list-item-action>
            <img src="~/assets/images/logo.svg" alt="Mad logo" height="50px">
          </v-list-item-action>
          
        </v-list-item>
        <v-list-item
          :ripple="false"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <slot name="custom-list"> </slot>
    </slot>
  </v-navigation-drawer>
</template>

<script>
export default {
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
    expandOnHover: {
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
    permanent: {
      type: Boolean,
      default: false,
    },
    miniVariantWidth: {
      type: String,
      default: null,
    }
  },
  data() {
    return {};
  },
  computed: {
    myDrawer: {
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("./MainDrawler.scss");
</style>
