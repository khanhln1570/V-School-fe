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
            <div class="mt-5">
              <img
                src="@/assets/images/parentAvatar.svg"
                v-if="currentUser.role === 'PARENT'"
                alt="parent"
              />
              <img
                src="@/assets/images/schoolAvatar.svg"
                v-if="currentUser.role === 'SCHOOL'"
                alt="school"
              />
              <img
                src="@/assets/images/superAdminAvatar.svg"
                v-if="currentUser.role === 'SUPERADMIN'"
                alt="superAdmin"
              />
            </div>
          </template>
          <template #contentCard>
            <div class="ml-xl-5 ml-md-12">
              <h2 class="font-weight-medium">
                {{ currentUser.name }}
              </h2>
              <div class="mt-5">
                <p class="font-weight-medium mb-1" v-if="currentUser.role !== 'PARENT'">
                  Số điện thoại: {{ currentUser.phone }}
                </p>
                <p class="font-weight-medium mb-1" v-if="currentUser.role === 'SCHOOL'">
                  Mã số thuế: {{ currentUser.MST }}
                </p>
                <p class="text--secondary mb-1">
                  {{ currentUser.address }}
                </p>
                <p class="text--secondary mb-1">
                  {{ currentUser.email }}
                </p>
                <p class="d-flex align-center">
                  <img src="../assets/images/children.svg" class="mr-2"/>
                  <slot name="sub-5">{{ currentUser.totalChild }}</slot>
                </p>
              </div>
            </div>
          </template>
          <template #btn-right-1>
            <text-button class="" @click.native="modalUpdateProfile = !modalUpdateProfile" color="primary" :text="false">
              Đổi thông tin cá nhân
            </text-button>
          </template>
        </main-card>
      </template>
    </main-tabs>

    <!-- control tab for admin -->
    <div class="d-flex flex-column col-md-3 pa-0 mt-10">
      <text-button class="mb-5" @click.native="" color="primary" :text="false">
        Cập nhật dữ liệu Phí Thu
      </text-button>
      <text-button class="mb-5" @click.native="" color="primary" :text="false">
        Cập nhật dữ liệu Phụ Huynh
      </text-button>
      <text-button class="mb-5" @click.native="" color="primary" :text="false">
        Cập nhật dữ liệu Học Sinh
      </text-button>
    </div>

    <main-modal
      :modal="modalUpdateProfile"
      @closeClick="modalUpdateProfile = false"
      @nextClick="handleNextClick"
      persistent
      >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">Thay đổi thông tin cá nhân</h4>
      </template>
      <template #modalBody>
        <main-input :placeholder="currentUser.name" label="Tên" v-model.trim="form.name"></main-input>
        <main-input :placeholder="currentUser.email" label="Email" v-model.trim="form.email"></main-input>
        <main-input :placeholder="currentUser.phone" label="Số điện thoại" :disabled="true"></main-input>
        <main-input :placeholder="currentUser.address" label="Địa chỉ" v-model.trim="form.address"></main-input>
      </template>
    </main-modal>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    MainCard: () => import("@/components/commons/main-card/MainCard"),
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  data() {
    return {
      items: [
        {
          label: "Cá nhân",
          value: "personal",
        },
      ],
      modalUpdateProfile: false,
      form: {
        name: '',
        email: '',
        address: '',
      }
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
    }),
  },
  mounted() {},
  methods: {
    async handleNextClick() {
      this.modalUpdateProfile = !this.modalUpdateProfile;
      await this.$store.dispatch("auth/updateProfile", {
        ...this.form,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
