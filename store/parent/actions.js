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

  async banParent({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.parent.banParent(payload);
      if (response.data.ok) {
        this.$toast.success(`Khoá tài khoản ${response.data.data?.name} thành công!`, {
          duration: 4000
        });
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async unbanParent({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.parent.unbanParent(payload);
      if (response.data.ok) {
        this.$toast.success(`Mở khoá tài khoản ${response.data.data?.name} thành công!`, {
          duration: 4000
        });
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async saveParents({ commit, dispatch, state }, payload) {
    try {
      const response = await this.$api.parent.saveParents(payload);
      if (response.data.ok) {
        this.$toast.success(`Lưu dữ liệu thành công!`, {
          duration: 4000
        });
      } else {
        this.$toast.error(`${response.data.message}`, {
          duration: 4000
        });
      }
    } catch (error) {
      errorHandle(error);
    }
  },
};
