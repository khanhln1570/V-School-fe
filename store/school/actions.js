
export default {
  async login({ commit, dispatch }, payload) {

    commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
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
