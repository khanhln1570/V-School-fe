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
              <div class="col-6">
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

              <div class="col-3 font-weight-medium text-right orange--text">
                Chưa thanh toán
              </div>
            </div>
            <div class="text-right">
              <span class="font-weight-medium">Tổng cộng: </span>
              {{ invoices.total }} (VND)
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
      invoices: {
        name: "Phụ đạo tiếng anh",
        time: "1 tháng",
        expiry: "7/2021",
        invoice: "DE3847D",
        total: "320.000",
      },
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