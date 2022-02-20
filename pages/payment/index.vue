<template>
  <auth-card v-if="getCurrentCustomer">
    <div class="px-xl-8">
      <v-stepper
      :elevation="0"
      vertical
      v-model="step"
    >
        <v-stepper-step
          :complete="step > 1"
          step="1"
          complete-icon="mdi-account-check"
          class="font-weight-bold"
          >
          Xác nhận thông tin khách hàng
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card
            class="mb-10 body-2"
            flat
          >
            <div class="d-flex justify-space-between">
              <p>Mã BHYT: </p>
              <p class="font-weight-bold text-right">{{getCurrentCustomer.BHYT}}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="mr-3  ">Họ và tên Học Sinh: </p>
              <p class="font-weight-bold text-right text-">{{getCurrentCustomer.name}}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="mr-3">Tên Lớp: </p>
              <p class="font-weight-bold text-right">{{getCurrentCustomer.classcode}}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="mr-3  ">Mã trường học: </p>
              <p class="font-weight-bold text-right">{{getCurrentCustomer.school.MST}}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="mr-3 mb-0">Tên trường học: </p>
              <p class="font-weight-bold text-right mb-0">{{getCurrentCustomer.school.account ? getCurrentCustomer.school.account.name : ''}}</p>
            </div>
          </v-card>
          <text-button
            color="primary"
            @click.native="step = 2"
            small
            :text="false"
          >
            Tiếp tục
          </text-button>
          <text-button
            @click.native="handleCancelClick"
            color="red"
            small
            >
            Huỷ giao dịch
          </text-button>
        </v-stepper-content>

        <v-stepper-step
          :complete="step > 2"
          class="font-weight-bold"
          step="2"
          >
          Thông tin học phí
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card
            class="mb-10"
            flat
            v-if="invoices.length"
            >
            <invoice-row
              v-for="(item, index) in invoices"
              :invoice="item"
              :key="index"
              :headers="headers"
              >
              <template #description="{ value, item }">
                <v-checkbox
                v-model="selectedInvoices"
                :value="item.id"
                hide-details
                dense
                :ripple="false"
                ></v-checkbox>
                <span class="body-2">{{ value }}</span>
              </template>
              <template #ammount="{ value, item }">
                <span class="txt-active--text ml-3 body-2">{{ numberToMoney(value) }}</span>
              </template>
              <template #action="{ item }">
                <text-button small class="ml-2" @click.native="currentInvoice = item">
                  <p class="mb-0 font-weight-medium" v-if="!$vuetify.breakpoint.mobile">
                    Chi tiết
                  </p>
                  <v-icon v-else>mdi-eye</v-icon>
                </text-button>
              </template>
            </invoice-row>
            <p>Tổng tiền thanh toán: <span class="font-weight-bold txt-active--text">{{numberToMoney(total)}}</span></p>
          </v-card>
          <v-card
            class="mb-10"
            flat
            v-else
            >
            <p>Hiện tại học sinh không có hoá đơn nào cần thanh toán !</p>
          </v-card>
          <text-button
            color="primary"
            @click.native="step = 3"
            small
            :text="false"
            :disabled="selectedInvoices.length ? false : true"
          >
            Tiếp tục
          </text-button>
          <text-button
            @click.native="step -= 1"
            color="red"
            small
            >
            Quay lại
          </text-button>
        </v-stepper-content>

        <v-stepper-step
          class="font-weight-bold"
          :complete="step > 3"
          step="3"
          >
          Chọn phương thức thanh toán
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            class="mb-10"
            flat
            >
            <v-row no-gutters>
              <v-col class="col-12 col-md-3">
                <v-card flat class="pa-3 d-flex justify-center align-center flex-column">
                  <v-checkbox
                    v-model="selectedPayment"
                    value="viettelGate"
                    hide-details
                    dense
                    :ripple="false"
                    class="mb-1"
                    ></v-checkbox>
                  <img class="mb-1" width="80%" src="@/assets/images/Viettelpay-Red.svg" alt="viettel">
                  <span class="text-center">Cổng thanh toán Viettel</span>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
          <text-button
            color="primary"
            @click.native="step = 4"
            small
            :text="false"
            :disabled="selectedPayment ? false : true"
          >
            Tiếp tục
          </text-button>
          <text-button
            @click.native="step -= 1"
            color="red"
            small
            >
            Quay lại
          </text-button>
        </v-stepper-content>

        <v-stepper-step
          step="4"
          class="font-weight-bold"
          >
          Nhập thông tin liên lạc
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            class="mb-10"
            flat
            >
            <group-validator
              class="mt-md-3 mt-xl-10 "
              :validation="$v.form.phone"
            >
              <template slot-scope="{ errors }">
                <main-input
                  placeholder="Nhập số điện thoại"
                  name="phone"
                  type="text"
                  v-model.trim="$v.form.phone.$model"
                  :errors="errors"
                />
              </template>
            </group-validator>
          </v-card>
        <text-button
            color="primary"
            @click.native="onSubmit"
            small
            :text="false"
            :disabled="$v.form.$invalid ? true : false"
          >
            Thanh toán
          </text-button>
          <text-button
            @click.native="step -= 1"
            color="red"
            small
            >
            Quay lại
          </text-button>
        </v-stepper-content>
      </v-stepper>

      <main-modal
        :modal="currentInvoice ? true : false"
        :hideNext="true"
        @closeClick="currentInvoice = null"
        persistent
        >
        <template #modalHeader>
          <h4 class="mb-0 subtitle">Chi tiết học phí</h4>
        </template>
        <template #modalBody v-if="currentInvoice">
          <div class="d-flex justify-space-between mb-2 flex-column">
            <h3 class="font-weight-bold">{{currentInvoice.description}}</h3>
            <p class="font-weight-bold txt-success--text">{{numberToMoney(currentInvoice.ammount)}}</p>
          </div>
          <div class="d-flex justify-space-between">
              <p>Mã Phí thu: </p>
              <p class="font-weight-bold text-right">{{currentInvoice.id}}</p>
          </div>
          <div class="d-flex justify-space-between">
              <p>Tên trường: </p>
              <p class="font-weight-bold text-right">{{currentInvoice.schoolName}}</p>
          </div>
          <div class="d-flex justify-space-between">
              <p>Số điện thoại phụ huynh: </p>
              <p class="font-weight-bold text-right">{{currentInvoice.tel1}}</p>
          </div>

        </template>
      </main-modal>
    </div>
  </auth-card>
  <div v-else>
    <v-btn to="/" color="primary" class="mt-5 mx-auto">Trang chủ</v-btn>
  </div>
</template>

<script>
import { payment } from "~/validations/payment/payment.validate";
import { LOG_IN_ACTION, GET_PROFILE_ACTION } from "~/store/auth/auth.constants";
import { ADD_BIlL_PUBLIC_ACTION } from "~/store/payment/payment.constants";
import { mapGetters } from "vuex";
import { numberToMoney } from '@/helpers/utils.helper';

export default {
  layout: "auth",
  components: {
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    InvoiceRow: () => import("@/components/yourChild/invoice-row/InvoiceRow"),
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
  },
   computed: {
    ...mapGetters({
      getCurrentCustomer: "payment/getCurrentCustomer",
    }),
    invoices() {
      return this.getCurrentCustomer?.invoice;
    },
    total() {
      // console.log('this.selectedInvoices', this.selectedInvoices);
      // console.log('this.invoices', this.invoices);
      let checkedInvoices = [];
      this.invoices.filter((item) => {
        this.selectedInvoices.map(selectedId => {
          if(selectedId === item.id) {
            checkedInvoices.push(item);
          }
        })
      })
      // console.log('checkedInvoices', checkedInvoices);
      return checkedInvoices.reduce((prev, current) => {
        return prev + parseInt(current.ammount);
      }, 0);
    }
  },
  data() {
    return {
      form: {
        phone: null,
      },
      loading: false,
      message: null,
      step: 1,
      headers: [
        {
          text: "Tiêu đề phí thu",
          value: "description",
        },
        {
          text: "Số tiền",
          value: "ammount",
        },
        {
          text: "Số tiền",
          value: "action",
        },
      ],
      selectedInvoices: [],
      selectedPayment: null,
      currentInvoice: null,
    };
  },
  validations: {
    form: payment,
  },
  created() {
    // if(!this.getCurrentCustomer) {
    //   this.$router.push('/');
    // }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // do your submit logic here
      this.loading = true;
      try {
        const result = await this.$store.dispatch(ADD_BIlL_PUBLIC_ACTION, {
            listInvoice: this.selectedInvoices,
            phone: this.form.phone
          });
        // await this.$store.dispatch(GET_PROFILE_ACTION);
      } catch (error) {
        this.message = "";
      } finally {
        this.loading = false;
      }
      this.loading = false;
      // this.$router.push('/payment');

    },
    handleCancelClick() {
      this.$router.back()
    },
    numberToMoney: numberToMoney
  },
};
</script>

<style lang="scss" scoped>
@import ".././__styles/auth.scss";
.v-stepper--vertical {
  box-shadow: none;
}
</style>
