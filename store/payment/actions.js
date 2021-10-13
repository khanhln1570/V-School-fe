// import { SET_CUSTOMER_DETAILS } from "./payment.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getCustomerDetails({ commit }, payload) {
    try {
      const response = await this.$api.payment.getCustomer(payload);
      if (response.data.ok) {
        commit('setCurrentCustomer', { ...response.data.data });
      }
    } catch (error) {
      // console.log(error);
      errorHandle(error);
      throw error;
    }
  },
  async getPublicSchool({ commit }, payload) {
    try {
      const response = await this.$api.payment.getPublicSchool();
      if (response.data.ok) {
        // commit('setCurrentCustomer', { ...response.data.data });
        return response.data.data;
      }
    } catch (error) {
      // console.log(error);
      errorHandle(error);
      throw error;
    }
  },
  async getPublicStudentBHYT({ commit }, payload) {
    try {
      const response = await this.$api.payment.getPublicStudentBHYT(payload);
      if (response.data.ok) {
        // commit('setCurrentCustomer', { ...response.data.data });
        return response.data.data;
      }
    } catch (error) {
      // console.log(error);
      errorHandle(error);
      throw error;
    }
  },
  async addBillPublic({ commit }, payload) {
    try {
      console.log("payload", payload);
      const response = await this.$api.payment.addBillPublic(payload);
      if (response.data.ok) {
        // commit('setCurrentCustomer', { ...response.data.data });
        window.open(`https://pay3.viettel.vn/PaymentGateway/payment?version=2.0&command=PAYMENT&merchant_code=${response.data.trans.merchant_code}&order_id=${response.data.trans.billcode}&trans_amount=${response.data.trans.amount}&locale=Vi&desc=${response.data.trans.desc}&billcode=${response.data.trans.billcode}&return_url=https://v-school.vn/payment/result?status=success&check_sum=${response.data.trans.check_sum}`);
        return response.data.data;
      }
    } catch (error) {
      // console.log(error);
      errorHandle(error);
      throw error;
    }
  },
};
