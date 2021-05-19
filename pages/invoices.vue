<template>
  <div>
    <v-container>
      <page-header title="Niên khoá 2020-2021">
        <template #titleIcon>
          <img src="@/assets/images/school.svg" alt="fee" />
        </template>
      </page-header>
      <page-body tab1="Chưa thu" tab2="Đã thu">
        <template #tabMenu>asd</template>
      </page-body>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    PageBody: () => import("@/components/commons/page-body/PageBody"),
  },
};
</script>

<style lang="scss" scoped>
</style>