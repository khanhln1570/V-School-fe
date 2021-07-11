import { SET_CHILD_MUTATION } from "./yourChild.constants";
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
