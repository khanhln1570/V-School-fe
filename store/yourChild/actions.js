export default {
  async setCurrentChild({ commit, sdispatch, state }, payload) {
    commit("setCurrentChild", state.yourChild.find(child => child.id === Number.parseInt(payload)));
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
