<template>
  <v-container>
    <page-header title="Danh sách trường học">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="school">
      </template>
    </page-header>
  </v-container>
</template>

<script>
  export default {
    components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    }
  }
</script>

<style lang="scss" scoped>

</style>