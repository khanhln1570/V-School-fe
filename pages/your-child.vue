<template>
  <auth-card>
    <div class="px-xl-8">
      <h6 class="my-5 display-6">Con của bạn:</h6>
      <v-alert
        v-for="(child, index) in yourChild"
        :key="index"
        outlined
        class="mt-xl-5 mt-md-3 child-container pa-0 cursor-pointer"
      >
        <nuxt-link class="pa-4 d-block" :to="`students/${child.id}`">
          <div class="d-flex justify-space-between">
            <div class="ml-1 display-6 black--text">
              <span
                class="dot mr-2"
                :class="child ? 'green' : 'red'"
              ></span>
              {{ child.name }}
            </div>
            <span>{{ child.classcode }}</span>
          </div>
        </nuxt-link>
      </v-alert>
    </div>
  </auth-card>
</template>
<script>
import { GET_CHILD_ACTION } from "~/store/yourChild/yourChild.constants";
import sidebarItems from "@/shared/sidebar-items";
import { mapGetters } from "vuex";

export default {
  layout: "auth",
  components: {
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
  },
  computed: {
    children() {
      return this.$store.state.yourChild.children;
    },
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      yourChild: "yourChild/getYourChild",
    })
  },
  watch: {
    currentUser: {
      handler: async function (value) {
        // console.log("change", value);
        if (value.id) {
          //get notification
          //this.$store.state.auth.currentUser.userId
          try {
            //get your child
            if(value.role === "PARENT") {
              await this.$store.dispatch(GET_CHILD_ACTION, {params: {search: ''}});
            }
          } catch (e) {
            // console.log(e);
            return;
          }
        }
      },
      deep: true,
      immediate: true,
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../pages/__styles/auth.scss";
.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}

.child-container {
  border-color: #707070 !important;
}
</style>
