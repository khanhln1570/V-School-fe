<template>
  <div>
    <page-header title="Chi tiết trường học" backTo="/schools">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="student" />
      </template>
    </page-header>
  </div>
</template>

<script>
  export default {
    components: {
      PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    },
  }
</script>

<style lang="scss" scoped>

</style>