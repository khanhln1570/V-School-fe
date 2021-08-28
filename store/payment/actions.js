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


};
