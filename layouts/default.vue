<template>
  <v-app>
    <CommonMainDrawer
      :drawer="drawer"
      :items="items"
      :fixed="true"
      :app="true"
      :clipped="true"
      :expandOnHover="collapseMainDrawer"
      :miniVariantWidth="'75'"
      @clickOffDrawer="onClickMainDrawer"
    />
    <v-app-bar elevation="0" absolute app color="white">
      <v-btn icon @click.stop="drawer = !drawer" class="d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="collapseMainDrawer = !collapseMainDrawer"
        class="d-none d-md-block"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn :ripple="false" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <template v-slot:extension>
        <Header :items="linkItems" />
      </template>
    </v-app-bar>
    <v-main class="background">
      <div class="pa-8">
        <nuxt />
        <Footer />
      </div>
    </v-main>
    <CommonMainDrawer
      :drawer="rightDrawer"
      :right="right"
      :fixed="true"
      :temporary="true"
      @clickOffDrawer="onClickRightDrawer"
    >
      <template v-slot:custom-list>
        <v-list>
          <v-list-item :ripple="false" to="/profile">
            <v-list-item-action>
              <v-icon light> mdi-account-arrow-left </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" @click.native="handleLogout" to="#">
            <v-list-item-action>
              <v-icon light> mdi-logout </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </CommonMainDrawer>
  </v-app>
</template>

<script>
import { CLEAR_AUTH_MUTATION } from "~/store/auth/auth.constants";
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-view-dashboard-outline",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-account-group-outline",
          title: "Users",
          to: "/user",
        },
      ],
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      collapseMainDrawer: true,
      linkItems: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
  methods: {
    handleLogout() {
      this.$store.commit(CLEAR_AUTH_MUTATION);
    },
    onClickRightDrawer(payload) {
      this.rightDrawer = payload;
    },
    onClickMainDrawer(payload) {
      console.log(payload);
      this.drawer = payload;
    },
  },
  watch: {
    "$route.name": {
      handler: function (name) {
        this.linkItems = [
          {
            text: "Dashboard",
            disabled: false,
            href: "/",
          },
        ];
        if (name !== "index")
          // this.linkItems.push({
          //   text: "Dashboard",
          //   disabled: false,
          //   href: "/",
          // });
          this.linkItems.push({
            text: name,
            disabled: false,
            href: this.$route.fullPath,
          });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
