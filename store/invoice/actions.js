import { SET_INVOICE_MUTATION, SET_COUNT_INVOICE_MUTATION } from "./invoice.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getInvoices({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
    try {
      const response = await this.$api.invoice.getInvoices(payload);
      commit("setInvoices", { ...response });
      // if (response.data.ok) {
      //   commit("setSchools", { ...response.data });
      //   console.log(response.data);
      // }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },
  async getInvoiceById({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.invoice.getInvoiceById(payload);

      if (response.data.ok) {
        commit('setCurrentInvoice', response.data.data[0]);
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async getAllInvoices({ commit, dispatch }, payload) {
    try {
      
      const response = await this.$api.invoice.getAllInvoices(payload);

      if (response.data.ok) {
        // console.log('response.data',response.data);
        commit('setInvoices', response.data.data);
        commit('setCountInvoices', response.data.count);
      }
    } catch (error) {
      // console.log(error);
      errorHandle(error);
    }
  },
};
