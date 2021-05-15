<template>
  <v-app>
    <main-drawer
      :drawer="drawer"
      :items="items"
      :fixed="true"
      :app="true"
      :clipped="true"
      :expandToMini="collapseMainDrawer"
      :miniVariantWidth="'60'"
      @clickOffDrawer="onClickMainDrawer"
      @toggleSidebar="toggleSidebar"
    >
      
    </main-drawer>

    <v-main class="white">
      <v-lazy>
        <nuxt class="mb-15 py-5 px-10" />
      </v-lazy>
    </v-main>
    
    <v-lazy>
      <tutorial-tour
        v-if="show"
        :value="show"
        :steps="steps"
        @skip="show = false"
      />
    </v-lazy>
  </v-app>
</template>

<script>
import { CLEAR_AUTH_MUTATION } from "~/store/auth/auth.constants";
import sidebarItems from "@/shared/sidebar-items";

export default {
  components: {
    MainDrawer: () => import('@/components/themes/sidebar/main-drawer/MainDrawer'),
    MainHeader: () => import('@/components/themes/header/Header'),
    // MainFooter: () => import('@/components/themes/footer/Footer'),
    TutorialTour: () => import('@/components/themes/tutorial-tour/TutorialTour')
  },
  data() {
    return {
      drawer: true,
      show: true,
      items: sidebarItems,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      collapseMainDrawer: false,
      linkItems: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/",
        },
      ],
      steps: [
        {
          el: "#summary",
          text:
            "Eiusmod esse est aliqua velit eu officia dolore do mollit eu reprehenderit voluptate duis voluptate.",
          position: "bottom right",
        },
        {
          el: "#reports",
          text:
            "Anim non eiusmod non nulla aliqua eu quis aliqua eu voluptate deserunt deserunt ea.",
          position: "bottom right",
        },
        {
          el: "#user-management",
          text:
            "Exercitation fugiat minim enim id nulla ad sunt fugiat ipsum anim dolore cillum.",
          position: "bottom right",
        },
        {
          el: "#settings",
          text: "Consectetur ut pariatur commodo velit.",
          position: "top right",
        },
      ],
    };
  },
  computed: {
    error() {
      return this.$nuxt?.nuxt?.err;
    }
  },
  methods: {
    logout() {
      this.$store.commit(CLEAR_AUTH_MUTATION);
    },
    onClickRightDrawer(payload) {
      this.rightDrawer = payload;
    },
    onClickMainDrawer(payload) {
      this.drawer = payload;
    },
    toggleSidebar(value) {
      this.collapseMainDrawer = !this.collapseMainDrawer;
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
