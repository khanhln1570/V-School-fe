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
              <div class="col-12 col-md-6 pa-0">
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
                      <p class="d-flex justify-space-between font-italic txt-secondary--text">MST: <span> {{ currentSchool.MST }}</span></p>
                      <p class="d-flex justify-space-between blue--text">Số điện thoại: <span> {{ currentSchool.phone }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Địa chỉ: <span class="d-block"> {{ currentSchool.account.address }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Email: <span> {{ currentSchool.account.email }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Năm hoạt động: <span> {{ currentSchool.account.age }}</span></p>
                      <p class="text--secondary d-flex justify-space-between" >Trạng thái: <span :class="currentSchool.account.status === 'ban' ? 'red--text':'success--text'"> {{ currentSchool.account.status === 'ban' ? 'cấm hoạt động' : 'hoạt động' }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Ngày lập tài khoản: <span> {{ moment(currentSchool.account.createDate).format('DD-MM-YYYY') }}</span></p>
                    </div>

                  </div>
                </div>
              </div>
              <div class="d-flex flex-column">
                <text-button class="mb-5" @click.native="saveStudents" color="primary" :text="false">
                  Cập nhật dữ liệu Học Sinh
                </text-button>
                <text-button class="mb-5" @click.native="saveParents" color="primary" :text="false">
                  Cập nhật dữ liệu Phụ Huynh
                </text-button>
                <text-button class="" @click.native="saveInvocies" color="primary" :text="false">
                  Lưu dữ liệu phí thu
                </text-button>
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
      async saveStudents() {
        await this.$store.dispatch(
          "yourChild/saveStudents",
          {mst : this.currentSchool.MST}
        );
      },
      async saveParents() {
        await this.$store.dispatch(
          "parent/saveParents",
           {mst : this.currentSchool.MST}
        );
      },
      async saveInvocies() {
        const d = new Date();
        let month = ('0'+(d.getMonth()+1)).slice(-2);
        await this.$store.dispatch(
          "invoice/saveInvocies",
          {mst : this.currentSchool.MST, month: month }
        );
        console.log(month);
      },
  },
};
</script>

<style lang="scss" scoped>
</style>
