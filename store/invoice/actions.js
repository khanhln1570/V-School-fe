export default {
  async getInvoices({ commit, dispatch }, payload) {
    // commit("setAuth", { token: 'fakeToken', currentUser: { id: 1, name: 'Lam', role: 'parent' } });
    try {
      const response = await this.$api.invoice.getInvoices(payload);
      console.log(response);
      commit("setInvoices", { ...response });
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
