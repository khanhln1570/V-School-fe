<template>
  <v-container>
    <page-header title="Chi tiết trường học">
      <template #titleIcon></template>
      <template #subTitle></template>
    </page-header>
    <main-tabs :items="items">
      <template #personal>
        <main-card>
          <template #imgContent>
            <img
              style="height: 9rem; width: 9rem"
              src="../assets/images/school.svg"
            />
          </template>
          <template #contentCard>
            <div class="ml-10">
              <h2 class="font-weight-medium">
                {{ detailsSchool.name }}
              </h2>
              <div class="mt-5">
                <p class="font-weight-medium mb-1">
                  {{ detailsSchool.phone }}
                </p>
                <p class="text--secondary mb-1">
                  {{ detailsSchool.address }}
                </p>
                <p class="text--secondary mb-1">
                  {{ detailsSchool.email }}
                </p>
                <p>
                  <img src="../assets/images/children.svg" />
                  <slot name="sub-5">{{ detailsSchool.child }}</slot>
                </p>
              </div>
            </div>
          </template>
          <template #btn-right-1>
            <v-btn
              block
              elevation="0"
              large
              class="text-lowercase rounded-lg"
              style="color: #677694"
              ><span class="text-uppercase">Đ</span>ặt lại mật khẩu</v-btn
            >
          </template>
          <template #btn-right-2>
            <v-btn
              block
              outlined
              elevation="0"
              large
              class="text-lowercase rounded-lg mt-3"
              color="red"
              ><span class="text-uppercase"> K</span>hoá tài khoản</v-btn
            >
          </template>
        </main-card>
        <!-- <main-card>
          <template #imgContent>
            <img
              style="height: 9rem; width: 9rem"
              src="../assets/images/school.svg"
            />
          </template>
          <template #sub-1>{{ detailsSchool.name }}</template>
          <template #sub-2>{{detailsSchool.phone}}</template>
          <template #sub-3>{{detailsSchool.address}}</template>
          <template #sub-4>{{detailsSchool.email}}</template>
          <template #sub-5>{{detailsSchool.child}}</template>
          <template #img>
           <img src="../assets/images/children.svg" />
          </template>
          <template #btn-right-1>
            <v-btn
          elevation="0"
          large
          class="text-lowercase rounded-lg"
          style="color: #677694"
          ><span class="text-uppercase"> T</span>hay đổi thông tin cá
          nhân</v-btn
        >
          </template>
          <template #btn-right-2>
            <v-btn
              block
                elevation="0"
                outlined
                large
                color="red"
                class="text-lowercase rounded-lg mt-3"
                ><span class="text-uppercase"> K</span>hoá tài khoản</v-btn
              >
          </template>
        </main-card> -->
      </template>
    </main-tabs>
  </v-container>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    MainCard: () => import("@/components/commons/main-card/MainCard"),
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