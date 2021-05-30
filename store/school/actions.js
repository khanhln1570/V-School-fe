
import { SET_SCHOOLS_MUTATION } from "./school.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getSchools({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.school.getSchools(payload);
      if (response.data.ok) {
        commit(SET_SCHOOLS_MUTATION, response.data.data);
      }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },

  async getSchoolDetails({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.school.getSchools(payload);
      if (response.data.ok) {
        commit(SET_SCHOOLS_MUTATION, response.data.data);
      }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },
};
