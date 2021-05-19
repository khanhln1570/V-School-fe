<template>
  <div>
    <v-container>
      <page-header title="Trần Thị Tố Trinh">
        <template #titleIcon>
          <img src="@/assets/images/school.svg" alt="student" />
        </template>
        <template #address>
          <p class="txt-secondary--text mt-5">8C5, Hoàng Diệu</p>
        </template>
      </page-header>
      <main-tabs :items="items">
        <template #invoices>
          <div class="mt-12 row d-felx justify-center">
            <div class="col-12">
              <div class="d-flex justify-space-around">
                <p>Phụ đạo</p>
                <p>Số tiền &#9660;</p>
                <p>Ghi chú</p>
                <p>Thanh toán &#8594;</p>
              </div>
              <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
                <div class="d-flex justify-space-around">
                  <div class="font-weight-medium">
                    <span class="dot mr-2"></span>Phụ đạo tiếng anh
                  </div>
                  <span>320.000</span>
                  <span>Tháng 2</span>
                  <input type="checkbox" />
                </div>
              </v-alert>
              <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
                <div class="d-flex justify-space-around">
                  <div class="font-weight-medium">
                    <span class="dot mr-2"></span>Phụ đạo tiếng anh
                  </div>
                  <span>320.000</span>
                  <span>Tháng 2</span>
                  <input type="checkbox" />
                </div>
              </v-alert>
              <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
                <div class="d-flex justify-space-around">
                  <div class="font-weight-medium">
                    <span class="dot mr-2"></span>Phụ đạo tiếng anh
                  </div>
                  <span>320.000</span>
                  <span>Tháng 2</span>
                  <input type="checkbox" />
                </div>
              </v-alert>
            </div>
          </div>
        </template>
      </main-tabs>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTab: () => import("@/components/commons/main-tabs/MainTab"),
  },
  data() {
    return {
      items: [
        {
          label: "Phí thu",
          value: "invoices",
        },
        {
          label: "Hoạt động",
          value: "activities",
        },
        {
          label: "Thời khoá biểu",
          value: "timeSchedual",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.dot {
  background-color: green;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
</style>