<template>
  <v-list-item :ripple="false" :class="['px-0 cs__list__item--default']"  :id="itemId" :to="linkTo" exact-path exact-active-class="cs__list__item--active">
    <slot>
      <template v-if="item.group">
        <v-list width="100%">
          <v-subheader class="text-uppercase px-4 cs__list__item--group">{{ item.group.title }}</v-subheader>
          <v-list-item-group>
            <list-item v-for="(item, i) in item.group.items" :key="i" :item="item" />
          </v-list-item-group>
        </v-list>
      </template>

      <v-list-item-action v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content class="py-0">
        <v-list-item-title class="px-4" v-text="item.title" />
      </v-list-item-content>
    </slot>
  </v-list-item>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    linkTo() {
      return this.item?.to;
    },
    itemId() {
      if (this.item.id) return this.item.id;

      return this.item.group?.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ListItem.scss";
</style>
