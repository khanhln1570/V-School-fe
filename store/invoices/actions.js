import { AUTH_TOKEN_KEY } from "./auth.constants";

export default {
  async login({ commit, dispatch }, payload) {

    commit("setAuth", { token: 'fakeToken' });
    // try {
    //   const response = await this.$api.auth.login(payload);
    //   if (response.data.ok) {
    //     commit("setAuth", { ...response.data.data });
    //   }
    // } catch (error) {
    //   throw error;
    // }
  },

};
