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

  // async signup({ commit, dispatch }, payload) {
  //   try {
  //     const response = await this.$api.auth.signup(payload);
  //     if (response.data.ok) {
  //       const setMaxAge = setExpireTime();

  //       this.$cookies.set(AUTH_TOKEN_KEY, response.data.data.token, {
  //         maxAge: setMaxAge,
  //         path: "/",
  //       });
  //       location.reload();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     commit(
  //       this.$alert.ADD_ERROR_ALERT_MUTATION,
  //       { message: error.response.data.message },
  //       { root: true }
  //     );
  //   }
  // },


};
