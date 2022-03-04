import { SET_INVOICE_MUTATION, SET_COUNT_INVOICE_MUTATION } from "./invoice.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getBills({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
    try {
      const response = await this.$api.bill.getAllBills(payload);
      commit("setBills", response.data);
      // if (response.data.ok) {
      //   commit("setSchools", { ...response.data });
        console.log(response.data);
      // }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },

  async getBillDetails({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.bill.getBillDetails(payload);
      commit("setCurrentBill", response.data.data);
    } catch (error) {
      errorHandle(error);
    }
  },
};
