<template>
<v-navigation-drawer v-model="myDrawler" :fixed="fixed" :app="app" :expand-on-hover="expandOnHover" :temporary="temporary" :right="right">
  <v-list v-if="items">
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>

  <slot name="custom-list"></slot>
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
  },
  data() {
    return {};
  },
  computed: {
    myDrawler: {
      // getter
      get: function () {
        return this.drawer;
      },
      // setter
      set: function (newValue) {
        if(!newValue) {
          this.$emit('clickOffDrawler', newValue);
        }
      }
    },
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
