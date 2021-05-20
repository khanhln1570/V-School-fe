<template>
  <div>
    <v-container>
      <page-header title="Niên khoá 2020-2021">
        <template #titleIcon>
          <img src="@/assets/images/school.svg" alt="fee" />
        </template>
      </page-header>
      <main-tabs tab1="Chưa thu" tab2="Đã thu">
        <template #tabMenu>asd</template>
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
};
</script>

<style lang="scss" scoped>
</style>