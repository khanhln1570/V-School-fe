<template>
<v-app dark>
  <CommonMainDrawler :drawer="drawer" :items="items" :fixed='true' :app='true' :expandOnHover='true' />
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-spacer />
    <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  <v-main>
    <v-container>
      <nuxt />
    </v-container>
  </v-main>
  <CommonMainDrawler :drawer="rightDrawer" :right="right" :fixed='true' :temporary='true' @clickOffDrawler="onClick">
    <template v-slot:custom-list>
    <v-list>
      <v-list-item to="/profile">
        <v-list-item-action>
          <v-icon light> mdi-account-arrow-left </v-icon>
        </v-list-item-action>
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item>
      <v-list-item @click.native="handleLogout" to="#">
        <v-list-item-action>
          <v-icon light> mdi-logout </v-icon>
        </v-list-item-action>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </template>
  </CommonMainDrawler>
  <v-footer :absolute="!fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</v-app>
</template>

<script>
import {
  CLEAR_AUTH_MUTATION
} from '~/store/auth/auth.constants';
export default {
  data() {
    return {
      drawer: true,
      fixed: false,
      items: [{
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      userItems: [{
          icon: "mdi-repeat",
          title: "Switch drawer (click me)",
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          to: "/inspire",
        },
      ],
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    handleLogout() {
      this.$store.commit(CLEAR_AUTH_MUTATION)
    },
    onClick(payload) {
      this.rightDrawer = payload;
    }
  }
};
</script>
