<template>
  <v-app-bar
    absolute
    elevation="3"
    height="70"
    fixed
    app
    color="white"
    class="header px-6"
  >
  <v-app-bar-nav-icon @click="$emit('drawlerClick')" v-if="$vuetify.breakpoint.mobile"></v-app-bar-nav-icon>
    <img
      class="header__search mr-3"
      src="@/assets/images/search.svg"
      alt="search"
    />
    <input
      class="header__input"
      type="text"
      placeholder="Tìm bằng tên học sinh hoặc chức năng"
    />
    <v-spacer></v-spacer>
    <img
      class="header__search"
      src="@/assets/images/notification.svg"
      alt="notification"
      width="22px"
    />
    <v-divider vertical inset class="mx-3 mr-4"></v-divider>

    <v-menu offset-y nudge-bottom="10" v-model="showMenu">
      <template v-slot:activator="{ on }">
        <v-btn depressed icon plain v-on="on" :ripple="false">
          <v-avatar size="34" color="blue">
            <span class="white--text headline">{{firstChar}}</span>
          </v-avatar>
          <v-icon size="25" color="icon-light"> $expand </v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$emit('logout')">
            <v-list-item-content>
              <v-list-item-title v-text="'logout'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
    }),
    firstChar() {
      return this.currentUser.name?.substr(0,1);
    }
  },
  components: {
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  data() {
    return {
      showMenu: false,
      items: [{ title: "Tài khoản", to: '/settings' }],
    };
  },
  props: {
    drawer: {
      type: [Boolean],
      default: false,
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>