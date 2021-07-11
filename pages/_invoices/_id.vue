<template>
  <div>
    <v-container>
      <page-header title="Cài đặt tài khoản">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4">
            <div class="d-flex justify-space-between">
              <div class="col-6 pa-0">
                <h2 class="font-weight-medium">
                  {{ invoices.name }} -
                  <span class="blue--text">{{ invoices.time }}</span>
                </h2>
                <p class="blue--text">{{ invoices.expiry }}</p>
                <div>
                  <span class="font-weight-medium">Hoá đơn số: </span
                  ><span>{{ invoices.invoice }}</span>
                </div>
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci necessitatibus voluptate praesentium distinctio quod
                  esse inventore fugit quisquam fuga libero! Earum natus cum
                  veritatis molestiae. Nisi labore hic assumenda praesentium?
                </p>
              </div>

              <div
                class="col-3 pa-0 font-weight-medium text-right orange--text"
              >
                Chưa thanh toán
              </div>
            </div>

            <div class="d-flex justify-space-between row mt-xl-10 mb-xl-2">
              <div class="col-6">
                <v-btn
                  elevation="0"
                  color="primary"
                  class="text-lowercase rounded-lg"
                  ><span class="text-uppercase">T</span>iến hành thanh
                  toán</v-btn
                ><v-btn
                  outlined
                  elevation="0"
                  color="orange"
                  class="text-lowercase rounded-lg ml-3"
                  style="color: #677694"
                  ><span class="text-uppercase">B</span>áo cáo nhầm lẫn</v-btn
                >
                
              </div>
              <h3 class="text-right col-4">
                <span class="font-weight-medium align-center">Tổng cộng: </span>
                <span class="font-weight-regular">{{ invoices.total }} (VND)</span>
              </h3>
            </div>
          </v-card>
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
      invoices: {
        name: "Phụ đạo tiếng anh",
        time: "1 tháng",
        expiry: "7/2021",
        invoice: "DE3847D",
        total: "320.000",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>