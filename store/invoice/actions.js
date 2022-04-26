import { SET_INVOICE_MUTATION, SET_COUNT_INVOICE_MUTATION } from "./invoice.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getInvoicesByToken({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
    try {
      const response = await this.$api.invoice.getInvoicesByToken(payload);
      commit("setInvoices", response.data);
      // if (response.data.ok) {
      //   commit("setSchools", { ...response.data });
      //   console.log(response.data);
      // }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },

  async getCurrentInvoice({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.invoice.getCurrentInvoice(payload);
      commit("setCurrentInvoice", response.data.data[0]);
    } catch (error) {
      errorHandle(error);
    }
  },

  async saveInvocies({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.invoice.saveInvocies(payload);
      console.log(response);
      if (response.data.ok) {
        this.$toast.success(`Lưu dữ liệu thành công!`, {
          duration: 4000
        });
      }
      else {
        this.$toast.error(`${response.data.message}`, {
          duration: 4000
        });
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async saveInvoicesBySchool({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.invoice.saveInvoicesBySchool(payload);
      if (response.data.ok) {
        this.$toast.success(`Lưu dữ liệu thành công!`, {
          duration: 4000
        });
      }
    } catch (error) {
      errorHandle(error);
    }
  },
};
