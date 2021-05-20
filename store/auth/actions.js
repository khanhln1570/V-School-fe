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

  async signup({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.auth.signup(payload);
      if (response.data.ok) {
        const setMaxAge = setExpireTime();

        this.$cookies.set(AUTH_TOKEN_KEY, response.data.data.token, {
          maxAge: setMaxAge,
          path: "/",
        });
        location.reload();
      }
    } catch (error) {
      console.log(error);
      commit(
        this.$alert.ADD_ERROR_ALERT_MUTATION,
        { message: error.response.data.message },
        { root: true }
      );
    }
  },

  async getProfile({ commit, dispatch }) {
    try {
      const response = await this.$api.auth.getProfile();
      commit("updateAuth", { ...response.data.data });
      await dispatch(GET_SERVERS_ACTION, {}, { root: true });
      await dispatch(GET_MEMBERS_ACTION, {}, { root: true });
    } catch (e) {
      console.log(e);
      commit(
        this.$alert.ADD_ERROR_ALERT_MUTATION,
        { ...e.response.data },
        { root: true }
      );
      commit("clearAuth");
    }
  },

  async updateProfile({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.auth.updateProfile(payload);
      if (response.data.ok) {
        await dispatch("getProfile");
        commit(
          this.$alert.ADD_SUCCESS_ALERT_MUTATION,
          { message: "Update profile success" },
          { root: true }
        );
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  async sendMailResetPassword({ commit }, payload) {
    try {
      const response = await this.$api.auth.sendMailResetPassword(payload);
      if (response.data.ok) {
        commit(
          this.$alert.ADD_SUCCESS_ALERT_MUTATION,
          { message: "Please check your email to reset your password" },
          { root: true }
        );
      }
    } catch (e) {
      console.log(e.response.data);
      commit(
        this.$alert.ADD_ERROR_ALERT_MUTATION,
        { message: e.response.data.message },
        { root: true }
      );
    }
  },

  async resetPassword({ commit }, payload) {
    try {
      const response = await this.$api.auth.resetPassword(payload);
      if (response.data.ok) {
        commit(
          this.$alert.ADD_SUCCESS_ALERT_MUTATION,
          { message: "Reset password success" },
          { root: true }
        );
      }
    } catch (e) {
      console.log(e.response.data);
      commit(
        this.$alert.ADD_ERROR_ALERT_MUTATION,
        { message: "Invalid token, please resend new reset password email" },
        { root: true }
      );
    }
  },

};
