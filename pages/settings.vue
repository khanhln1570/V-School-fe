<template>
  <v-container>
    <page-header title="Cài đặt tài khoản">
      <template #titleIcon></template>
      <template #subTitle></template>
    </page-header>
    <main-tabs :items="items">
      <template #personal>
        <main-card>
          <template #titleImg>
            <img src="../assets/images/parent.svg" />
          </template>
          <template #name>{{ personal.name }}</template>
          <template #phone>{{ personal.phone }}</template>
          <template #address>{{ personal.address }}</template>
          <template #email>{{ personal.email }}</template>
          <template #img>
            <img src="../assets/images/children.svg" />
          </template>
          <template #child>{{ personal.child }}</template>
          <template #first-btn>
            <span class="text-uppercase"> T</span>hay đổi thông tin cá nhân
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