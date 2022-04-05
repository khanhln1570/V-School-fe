<template>
  <div>
    <v-container>
      <page-header title="Chi tiết trường học">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="currentSchool">
            <div class="d-flex justify-space-between flex-column flex-md-row">
              <div class="col-12 col-md-3 pa-0">
                <h2 class="font-weight-medium">
                  {{ currentSchool.description }}
                </h2>
                <!-- <p class="blue--text">{{ currentSchool.expiry }}</p> -->
                <div class="d-flex flex-column">
                  <v-sheet width="80px">
                    <img
                    src="@/assets/images/schoolAvatar.svg"
                    alt="school"
                    class="w-50"
                    />
                  </v-sheet>
                  <div class="d-flex justify-space-between flex-column flex-md-row">
                    <div class="w-100">
                      <p class="d-flex justify-space-between">Họ và tên: <span class="font-weight-bold">{{ currentSchool.account.name }}</span></p>
                      <p class="d-flex justify-space-between font-italic txt-secondary--text">id: <span> {{ currentSchool.id }}</span></p>
                      <p class="d-flex justify-space-between blue--text">Số điện thoại: <span> {{ currentSchool.phone }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Địa chỉ: <span class="d-block"> {{ currentSchool.account.address }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Email: <span> {{ currentSchool.account.email }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Tuổi: <span> {{ currentSchool.account.age }}</span></p>
                      <p class="text--secondary d-flex justify-space-between" >Trạng thái: <span :class="currentSchool.account.status === 'ban' ? 'red--text':'success--text'"> {{ currentSchool.account.status === 'ban' ? 'cấm hoạt động' : 'hoạt động' }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Ngày lập tài khoản: <span> {{ moment(currentSchool.account.createDate).format('DD-MM-YYYY') }}</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column">
              </div>
            </div>
          </v-card>
        </template>
      </main-tabs>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from '@/helpers/utils.helper';
import moment from "moment";

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      currentSchool: "school/getCurrentSchool",
    }),
  },
  data() {
    return {
      items: [
        {
          label: "Chi tiết",
          value: "personal",
        },
      ],
      from: '',
    };
  },
  async fetch() {
    await this.$store.dispatch(
      "school/getCurentSchool",
      this.$route.params.id
    );
    console.log(this);
  },
  methods: {
      moment: moment,
  },
};
</script>

<style lang="scss" scoped>
</style>
