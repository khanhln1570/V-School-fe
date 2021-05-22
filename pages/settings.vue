<template>
  <v-container class="">
    <page-header title="Cài đặt tài khoản">
      <template #titleIcon></template>
      <template #subTitle></template>
    </page-header>
    <main-tabs :items="items">
      <template #personal>
        <main-card>
          <template #imgContent>
            <img src="../assets/images/parent.svg" />
          </template>
          <template #contentCard>
            <div class="ml-10">
              <h2 class="font-weight-medium">
                {{ personal.name }}
              </h2>
              <div class="mt-5">
                <p class="font-weight-medium mb-1">
                  {{ personal.phone }}
                </p>
                <p class="text--secondary mb-1">
                  {{ personal.address }}
                </p>
                <p class="text--secondary mb-1">
                  {{ personal.email }}
                </p>
                <p>
                  <img src="../assets/images/children.svg" />
                  <slot name="sub-5">{{ personal.child }}</slot>
                </p>
              </div>
            </div>
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
        </main-card>
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