import { SET_INVOICE_MUTATION, SET_COUNT_INVOICE_MUTATION } from "./invoice.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getParents({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
    try {
      const response = await this.$api.parent.getParents(payload);
      commit("setParents", response.data);
      // if (response.data.ok) {
      //   commit("setSchools", { ...response.data });
        console.log(response.data);
      // }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },

  async getParentDetails({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.parent.getParentDetails(payload);
      commit("setCurrentParent", response.data.data);
    } catch (error) {
      errorHandle(error);
    }
  },
};
