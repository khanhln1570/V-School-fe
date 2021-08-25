import { SET_CHILD_MUTATION, SET_COUNT_CHILD_MUTATION } from "./yourChild.constants";
import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async getStudentsByPhone({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.getStudentsByPhone(payload);

      if (response.data.ok) {
        commit(SET_CHILD_MUTATION, response.data.data);
      }
    } catch (error) {
      errorHandle(error);
    }
  },

  async getStudentsByMST({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.yourChild.getStudentsByMST(payload);

      if (response.data.ok) {
        commit(SET_CHILD_MUTATION, response.data.data);
        commit(SET_COUNT_CHILD_MUTATION, response.data.count);
      }
    } catch (error) {
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
