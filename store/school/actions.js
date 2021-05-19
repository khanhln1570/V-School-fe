
export default {
  async getSchools({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
    try {
      const response = await this.$api.school.getSchools(payload);
      console.log(response);
      commit("setSchools", { ...response });
      // if (response.data.ok) {
      //   commit("setSchools", { ...response.data });
      //   console.log(response.data);
      // }
    } catch (error) {
      // throw error;
      console.log(error);
    }
  },
};
