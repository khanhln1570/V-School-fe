<template>
  <v-container class="">
    <div
      v-if="getNotifications.length"
      class="
        d-flex
        justify-center
        align-center
        flex-column
        w-100
        notification__container
      "
    >
      <v-sheet
        class="px-3 py-2 rounded-lg mb-4 notification__item d-flex justify-space-between align-center"
        :class="{
          'notification__item--pure': !notification.isRead,
        }"
        v-for="(notification, index) in getNotifications"
        :key="index"
        elevation="1"
      >
        <div class="notification__item__content">
          {{ notification.content }}
        </div>

        <text-button color="black">View</text-button>
        <div class="notification__item__createAt" v-if="isClient && notification.createAt">
          {{   moment(moment.utc(notification.createAt.toDate()).valueOf()).fromNow()  }}
          <!-- {{ notification.createAt.toDate() }} -->
        </div>
      </v-sheet>
    </div>
    <main-card v-else class="notification" clean>
      <div
        class="
          d-flex
          justify-center
          align-center
          flex-column
          w-100
          notification--empty
        "
      >
        <img
          src="@/assets/images/empty-noti.svg"
          alt="empty-noti"
          class="mb-10"
          height="200px"
        />
        <h4 class="">Bạn chưa có thông báo nào !</h4>
        <p>
          Chúng tôi sẽ thông báo cho bạn khi có những nâng cấp và các vấn đề
          liên quan đến tài khoản .
        </p>
      </div>
    </main-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  components: {
    MainCard: () => import("@/components/commons/main-card/MainCard"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      getNotifications: "notification/getNotifications",
    }),
    isClient() {
      return process.browser;
    }
  },
   data: () => ({
      moment: moment
   }),
  methods: {
   
  },
  watch: {
    async currentUser() {
      if (this.currentUser.id) {
        const messageRef = this.$fire.firestore
          .collection("Notification")
          .where("to", "==", this.currentUser.id);
        try {
          const messageDoc = await messageRef.get();
          const data = [];
          messageDoc.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.unshift(doc.data());
          });

          this.$store.commit("notification/setNotifications", data);
        } catch (e) {
          console.log(e);
          return;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/Notification.scss";
</style>