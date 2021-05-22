<template>

  <div>
    <v-container>
      <page-header title="Cài đặt tài khoản">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-alert outlined class="mt-6 px-10 py-7 rounded-lg">
            <div class="d-flex justify-space-between">
              <div class="col-5">
                <h2 class="font-weight-medium">
                  Phụ đạo tiếng anh - <span>1 tháng</span>
                </h2>
                <p>7/2021</p>
                <span class="font-weight-medium">Hoá đơn số:</span
                ><span>12UIOJHGBN</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci necessitatibus voluptate praesentium distinctio quod
                  esse inventore fugit quisquam fuga libero! Earum natus cum
                  veritatis molestiae. Nisi labore hic assumenda praesentium?
                </p>
              </div>
              <div>Chưa thanh toán</div>
            </div>

            <div class="d-flex justify-space-between">
              <div>
              <v-btn
              elevation="0"
              large
              class="text-lowercase rounded-lg"
              style="color: #677694"
              ><span class="text-uppercase"> T</span>Tiến hành thanh toán</v-btn
            >
            <v-btn
              elevation="0"
              large
              class="text-lowercase rounded-lg"
              style="color: #677694"
              ><span class="text-uppercase"> T</span>Tiến hành thanh toán</v-btn
            >
            </div>
            <div>Tổng cộng</div>
            </div>
          </v-alert>
        </template>
      </main-tabs>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
  },
  data() {
    return {
      items: [
        {
          label: "Thanh toán thu phí",
          value: "personal",
        },
      ],
    };
  },
  computed: {
    personal() {
      return this.$store.state.personal.personal;
    },
  },
  mounted() {
    console.log(this.$store.state.personal.personal);
  },
};
</script>

<style lang="scss" scoped>
</style>