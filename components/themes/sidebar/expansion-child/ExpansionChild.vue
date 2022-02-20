<template>
  <v-expansion-panel
    class="expansion"
    v-if="item.role === currentUser.role || item.role === 'all'"
  >
    <div v-if="item.group">
      <v-expansion-panel-header color="bg-sidebar pl-8 text-uppercase expansion__title">
        <template v-slot:actions>
          <v-icon color="icon-secondary"> $expand </v-icon> </template
        >{{ item.group.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content color="bg-sidebar expansion__body">
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item
              :to="subItem.to"
              v-for="(subItem, i) in item.group.items"
              :key="i"
              active-class="expansion__body__item--active"
              v-show="subItem.role ? subItem.role === currentUser.role : true"
              :ripple="false"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="subItem.title"
                  class="pl-5 expansion__body__item__title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-expansion-panel-content>
    </div>
    <div v-else>
      <v-list dense class="pa-0">
        <v-list-item-group color="primary">
          <v-list-item
            :to="item.to"
            active-class="itemNoGroup--active bg-sidebar white--text  "
            class="bg-sidebar"
            :ripple="false"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="pl-5 expansion__body__item__title "
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-expansion-panel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: [Array, Object],
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./ExpansionChild.scss";
</style>
