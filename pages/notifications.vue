<template>
  <v-container class="">
    <main-card class="notification" clean>
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
export default {
  components: {
    MainCard: () => import("@/components/commons/main-card/MainCard"),
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/Notification.scss";
</style>