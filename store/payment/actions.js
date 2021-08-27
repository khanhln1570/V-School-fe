import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getCustomerDetails({ commit, dispatch }, payload) {

    try {
      // const response = await this.$api.auth.login(payload);
      // if (response.data.ok) {
      //   commit(SET_AUTH_MUTATION, { ...response.data.data });
      // }
      // dispatch('getProfile')
    } catch (error) {
      errorHandle(error);
    }
  },


};
