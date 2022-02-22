import { SET_CHILD_MUTATION, SET_COUNT_CHILD_MUTATION } from "./yourChild.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getStudentsByPhone({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.getAllStudents(payload);

      if (response.data.ok) {
        commit(SET_CHILD_MUTATION, response.data.data);
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async getStudentById({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.getStudentById(payload);

      if (response.data.ok) {
        commit('setCurrentChild', response.data.data);
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async getCurrentChildInvoices({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.getAllInvoicesByChild(payload);

      if (response.data.ok) {
        commit('setCurrentChildInvoices', response.data.data);
      }
    } catch (error) {
      commit('clearCurrentChildInvoices');
      console.log("getCurrentChildInvoices");
      errorHandle(error);
    }
  },

  async getAllStudents({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.getAllStudents(payload);

      if (response.data.ok) {
        commit(SET_CHILD_MUTATION, response.data.data);
        commit(SET_COUNT_CHILD_MUTATION, response.data.count);
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async addStudentsByExcel({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.addStudentsByExcel(payload);

      if (response.data.ok) {
        // commit(SET_CHILD_MUTATION, response.data.data);
        // console.log("addStudentsByExcel res", response.data);
        return response.data;
      }
    } catch (error) {
      errorHandle(error, 10000);
      // console.log(error.response.data);
      return error.response.data;
    }
  },
};
