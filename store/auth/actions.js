import { AUTH_TOKEN_KEY, SET_AUTH_MUTATION, SET_PROFILE_MUTATION } from "./auth.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async login({ commit, dispatch }, payload) {

    // commit("setAuth", { token: 'fakeToken' });
    try {
      const response = await this.$api.auth.login(payload);
      if (response.data.ok) {
        commit(SET_AUTH_MUTATION, { ...response.data.data });
      }
      dispatch('getProfile')
    } catch (error) {
      errorHandle(error);
    }
  },

  async getProfile({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken' });
    try {
      const response = await this.$api.auth.getProfile(payload);
      if (response.data.ok) {
        commit(SET_PROFILE_MUTATION, { ...response.data.data });
        this.$toast.success(`Xin chào ${response.data.data?.name}!`, {
          duration: 3000
        });
      }
    } catch (error) {
      // commit("clearAuth");
      errorHandle(error);
    }
  },

  async updateProfile({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken' });
    try {
      console.log("payload", payload);
      const response = await this.$api.auth.updateProfile(payload);
      if (response.data.ok) {
        this.$toast.success(`Cập nhật thông tin thành công!`, {
          duration: 3000
        });
      }
      dispatch('getProfile')
    } catch (error) {
      // commit("clearAuth");
      errorHandle(error);
    }
  },

};
