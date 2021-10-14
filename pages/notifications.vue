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
    <text-button color="primary" @click.native="modalNotificationReadAll = !modalNotificationReadAll" class="mb-2"
          >Đánh dấu tất cả đã xem</text-button
        >
      <v-sheet
        class="
          px-3
          py-2
          rounded-lg
          mb-4
          notification__item
          d-flex
          justify-space-between
          align-center
        "
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

        <text-button color="black" @click.native="handleViewClick(notification)"
          >View</text-button
        >
        <div
          class="notification__item__createAt"
          v-if="isClient && notification.createAt"
        >
          {{
            moment(
              moment.utc(notification.createAt.toDate()).valueOf()
            ).fromNow()
          }}
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
          liên quan đến tài khoản.
        </p>
      </div>
    </main-card>

    <main-modal
      :modal="modalNotification"
      @closeClick="modalNotification = false"
      @nextClick="handleNextClick()"
      persistent
    >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">{{ headerModalNotification }}</h4>
      </template>
      <template #modalBody>
        <p v-if="currentNotification">{{ currentNotification.content }}</p>
      </template>
    </main-modal>

    <main-modal
      :modal="modalNotificationReadAll"
      @closeClick="modalNotificationReadAll = false"
      @nextClick="handleNextClickReadAll"
      persistent
    >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">Đánh dấu đã xem tất cả thông báo</h4>
      </template>
      <template #modalBody>
        <p >Bạn có chắc chắn muốn thực hiện hành động này ?</p>
      </template>
    </main-modal>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { SET_READ_ACTION } from "~/store/notification/notification.constants";

export default {
  components: {
    MainCard: () => import("@/components/commons/main-card/MainCard"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      getNotifications: "notification/getNotifications",
    }),
    isClient() {
      return process.browser;
    },
    headerModalNotification() {
      if (this.currentNotification) {
        switch (this.currentNotification.type) {
          case "HELP":
            return "Yêu cầu giúp đỡ";
          case "TUITION":
            return "Thông báo học phí";
          default:
            // code block
            return this.currentNotification.type;
        }
      } else return null;
    },
  },
  data() {
    return {
      moment: moment,
      modalNotificationReadAll: false,
      modalNotification: false,
      currentNotification: null,
    };
  },
  methods: {
    handleNextClick() {
      this.modalNotification = !this.modalNotification;

      //simulator for next action
      this.$router.push(`/students/${this.currentNotification.studentID}`);
      return this.$nuxt?.$toast?.success("Thực hiện yêu cầu thành công", {
        duration: 3000,
      });
    },
    async handleNextClickReadAll() {
      await this.$store.dispatch(SET_READ_ACTION, {ids: []});
      this.modalNotificationReadAll = false;
    },
    async handleViewClick(noti) {
      this.currentNotification = noti;
      this.modalNotification = true;

      const ids = [];
      ids.push(Number.parseInt(noti.id))
      //set read noti
      await this.$store.dispatch(SET_READ_ACTION, {ids: ids});
    },
  },
  watch: {
    currentUser: {
      handler: async function (value) {
        if (value.id) {
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
                this.$store.commit("notification/setNotifications", noti);
            });
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

<style lang="scss" scoped>
@import "./__styles/Notification.scss";
</style>
