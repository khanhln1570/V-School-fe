
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

  async getCurentSchool({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.school.getSchoolDetails(payload);
      if (response.data.ok) {
        commit("setSchoolDetails", response.data.data);
      }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },

  async resetpassParent({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.school.resetpassParent(payload);
      if (response.data.ok) {
        this.$toast.success(`Đặt lại mật khẩu thành mặc định thành công !`, {
          duration: 4000
        });
      }
    } catch (error) {
      // throw error;
      errorHandle(error);
    }
  },
};
