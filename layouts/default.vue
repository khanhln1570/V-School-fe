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
    <main-header
      @logout="logout"
      @drawlerClick="handleDrawlerClick"
      :anyNewNotifications="anyNewNotifications"
    ></main-header>

    <v-main class="white mt-10">
      <v-lazy>
        <nuxt class="mb-15 py-5 px-10" />
      </v-lazy>
    </v-main>

    <!-- <v-lazy>
      <tutorial-tour
        v-if="show"
        :value="show"
        :steps="steps"
        @skip="show = false"
      />
    </v-lazy> -->
  </v-app>
</template>

<script>
import { CLEAR_AUTH_MUTATION } from "~/store/auth/auth.constants";
import { GET_CHILD_ACTION } from "~/store/yourChild/yourChild.constants";
import sidebarItems from "@/shared/sidebar-items";
import { mapGetters } from "vuex";

export default {
  components: {
    MainDrawer: () =>
      import("@/components/themes/sidebar/main-drawer/MainDrawer"),
    MainHeader: () => import("@/components/themes/header/Header"),
    // MainFooter: () => import('@/components/themes/footer/Footer'),
    TutorialTour: () =>
      import("@/components/themes/tutorial-tour/TutorialTour"),
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      yourChild: "yourChild/getYourChild",
      notifications: "notification/getNotifications",
    }),
    items() {
      //prepare childs items for parents
      const childs = this.yourChild || [];

      sidebarItems.forEach((item) => {
        if (item.group?.title === "Con của bạn") {
          const newChilds = [];
          childs.forEach((child) => {
            newChilds.push({
              title: child.name,
              to: `/students/${child.id}`,
            });
          });

          item.group.items = newChilds;
        }
      });

      return sidebarItems;
    },
    anyNewNotifications() {
      let anyNew = this.notifications.find((item) => {
        return item.isRead === false;
      });
      if (!anyNew) {
        anyNew = false;
      } else {
        anyNew = true;
      }
      return anyNew;
    },
  },
  data() {
    return {
      drawer: true,
      show: true,
      rightDrawer: false,
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
          text: "Eiusmod esse est aliqua velit eu officia dolore do mollit eu reprehenderit voluptate duis voluptate.",
          position: "bottom right",
        },
        {
          el: "#reports",
          text: "Anim non eiusmod non nulla aliqua eu quis aliqua eu voluptate deserunt deserunt ea.",
          position: "bottom right",
        },
        {
          el: "#user-management",
          text: "Exercitation fugiat minim enim id nulla ad sunt fugiat ipsum anim dolore cillum.",
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
    handleDrawlerClick() {
      this.drawer = !this.drawer;
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
    currentUser: {
      handler: async function (value) {
        // console.log(value);
        //get your child
        // console.log("GET_CHILD_ACTION");
        await this.$store.dispatch(GET_CHILD_ACTION, {params: {search: ''}});
        if (value.id && this.$fire) {
          // console.log("value", value.role === "PARENT");
          //get notification
          //this.$store.state.auth.currentUser.userId
          const messageRef = this.$fire.firestore
            .collection("notifications")
            .where("to", "==", value.id);
          try {
            messageRef.onSnapshot((querySnapshot) => {
              var noti = [];
              querySnapshot.forEach((doc) => {
                noti.unshift({...doc.data(), id: doc.id});
              });

              if (this.notifications.length !== noti.length) {
                this.$nuxt?.$toast?.success("Bạn có thông báo mới !", {
                  duration: 3000,
                });
                this.$store.commit("notification/setNotifications", noti);
              }
            });

            //get your child
            if(value.role === "PARENT") {
              await this.$store.dispatch(GET_CHILD_ACTION,
                {params: {search: ''}}
              );
            }
          } catch (e) {
            console.log(e);
            return;
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" src="">
</style>
