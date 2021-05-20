<template>
  <div>
    <v-container>
      <page-header title="Niên khoá 2020-2021">
        <template #titleIcon>
          <img src="@/assets/images/school.svg" alt="fee" />
        </template>
      </page-header>
      
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
  },
};
</script>

<style lang="scss" scoped>
</style>