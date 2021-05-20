<template>
  <v-container>
    <page-header title="Chi tiết trường học">
      <template #titleIcon></template>
      <template #subTitle></template>
    </page-header>
    <main-tabs :items="items">
      <template #personal>
        <v-card
          outlined
          class="mt-6 px-10 py-7 rounded-lg d-flex justify-space-between"
        >
          <div class="d-flex">
            <img
              style="height: 9rem; width: 9rem"
              src="../assets/images/school.svg"
            />
            <div class="ml-10">
              <h2 class="font-weight-medium">{{ detailsSchool.name }}</h2>
              <div class="mt-5">
                <p class="font-weight-medium mb-1">{{ detailsSchool.phone }}</p>
                <p class="text--secondary mb-1">{{ detailsSchool.address }}</p>
                <p class="text--secondary mb-1">{{ detailsSchool.email }}</p>
                <p>
                  <img src="../assets/images/children.svg" />{{
                    detailsSchool.child
                  }}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <v-btn
              block
                elevation="0"
                large
                class="text-lowercase rounded-lg"
                style="color: #677694"
                ><span class="text-uppercase"> Đ</span>ặt lại mật khẩu</v-btn
              >
            </div>
            <div>
              <v-btn
              block

                elevation="0"
                outlined
                large
                color="red"
                class="text-lowercase rounded-lg mt-3"
                ><span class="text-uppercase"> K</span>hoá tài khoản</v-btn
              >
            </div>
          </div>
        </v-card>
      </template>
    </main-tabs>
  </v-container>
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
          label: "Cá nhân",
          value: "personal",
        },
      ],
    };
  },
  computed: {
    detailsSchool() {
      return this.$store.state.detailsSchool.detailsSchool;
    },
  },
  mounted() {
    console.log(this.$store.state.detailsSchool.detailsSchool);
  },
};
</script>

<style lang="scss" scoped>
</style>