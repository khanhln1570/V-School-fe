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
            <img src="@/assets/images/parentAvatar.svg" v-if="currentUser.role === 'PARENT'" alt="parent"/>
            <img src="@/assets/images/schoolAvatar.svg" v-if="currentUser.role === 'SCHOOL'" alt="school" />
            <img src="@/assets/images/superAdminAvatar.svg" v-if="currentUser.role === 'SUPERADMIN'" alt="superAdmin" />
          </template>
          <template #contentCard>
            <div class="ml-xl-5 ml-md-12">
              <h2 class="font-weight-medium">
                {{ currentUser.name }}
              </h2>
              <div class="mt-5">
                <p class="font-weight-medium mb-1">
                  {{ currentUser.phone }}
                </p>
                <p class="text--secondary mb-1">
                  {{ currentUser.address }}
                </p>
                <p class="text--secondary mb-1">
                  {{ currentUser.email }}
                </p>
                <p>
                  <img src="../assets/images/children.svg" />
                  <slot name="sub-5">{{ currentUser.totalChild }}</slot>
                </p>
              </div>
            </div>
          </template>
          <template #btn-right-1>
            <v-btn
              elevation="0"
              block
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
import { mapGetters } from "vuex";

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
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
    }),
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>