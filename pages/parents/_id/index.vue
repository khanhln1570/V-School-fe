<template>
  <div>
    <v-container>
      <page-header title="Chi tiết phụ huynh">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="currentParent">
            <div class="d-flex justify-space-between flex-column flex-md-row">
              <div class="col-12 col-md-3 pa-0">
                <h2 class="font-weight-medium">
                  {{ currentParent.description }}
                </h2>
                <!-- <p class="blue--text">{{ currentParent.expiry }}</p> -->
                <div class="d-flex flex-column">
                  <v-sheet width="80px">
                    <img
                    src="@/assets/images/parentAvatar.svg"
                    alt="parent"
                    class="w-50"
                    />
                  </v-sheet>
                  <div class="d-flex justify-space-between flex-column flex-md-row">
                    <div class="w-100">
                      <p class="d-flex justify-space-between">Họ và tên: <span class="font-weight-bold">{{ currentParent.account.name }}</span></p>
                      <p class="d-flex justify-space-between font-italic txt-secondary--text">id: <span> {{ currentParent.id }}</span></p>
                      <p class="d-flex justify-space-between blue--text">Số điện thoại: <span> {{ currentParent.phone }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Địa chỉ: <span class="d-block"> {{ currentParent.account.address }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Email: <span> {{ currentParent.account.email }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Tuổi: <span> {{ currentParent.account.age }}</span></p>
                      <p class="text--secondary d-flex justify-space-between" >Trạng thái: <span :class="currentParent.account.status === 'ban' ? 'red--text':'success--text'"> {{ currentParent.account.status === 'ban' ? 'cấm hoạt động' : 'hoạt động' }}</span></p>
                      <p class="text--secondary d-flex justify-space-between ">Ngày lập tài khoản: <span> {{ moment(currentParent.account.createDate).format('DD-MM-YYYY') }}</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column">
                <text-button v-if="currentParent.account.status === 'ban'" :elevation="5" :text="false" class="fixed__btn2 pa-5 mb-5" color='success' dark="true" @click.native="handleUnbanBtn">
                  <span class="text-capitalize font-weight-bold">Mở khoá tài khoản</span>
                </text-button>
                <text-button v-else :elevation="5" :text="false" class="fixed__btn2 pa-5 mb-5" color='red' dark="true" @click.native="handleBanBtn">
                  <span class="text-capitalize font-weight-bold">Khoá tài khoản</span>
                </text-button>
                <text-button :elevation="5" :text="false" class="fixed__btn2 pa-5 " color='blue' dark="true" @click.native="resetpassParent">
                  <span class="text-capitalize font-weight-bold">Reset mật khẩu</span>
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
      currentParent: "parent/getCurrentParent",
    }),
  },
  data() {
    return {
      items: [
        {
          label: "Chi tiết phụ huynh",
          value: "personal",
        },
      ],
      from: '',
    };
  },
  async fetch() {
    await this.$store.dispatch(
      "parent/getParentDetails",
      {id: this.$route.params.id}
    );
    console.log(this);
  },
  methods: {
      moment: moment,
      async handleBanBtn() {
        await this.$store.dispatch(
          "parent/banParent",
          {id: this.$route.params.id}
        );

        await this.$store.dispatch(
          "parent/getParentDetails",
          {id: this.$route.params.id}
        );
      },
      async handleUnbanBtn() {
        await this.$store.dispatch(
          "parent/unbanParent",
          {id: this.$route.params.id}
        );

        await this.$store.dispatch(
          "parent/getParentDetails",
          {id: this.$route.params.id}
        );
      },
      async resetpassParent() {
        await this.$store.dispatch(
          "school/resetpassParent",
          {userId: this.currentParent.accountId}
        );

        await this.$store.dispatch(
          "parent/getParentDetails",
          {id: this.$route.params.id}
        );
      },
  },
};
</script>

<style lang="scss" scoped>
</style>
