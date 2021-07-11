import errorHandle from '@/helpers/errorHandle.helper';

export default {
  async setNotificationRead({ commit, dispatch }, payload) {
    try {
      const response = await this.$api.notification.setNotificationRead(payload);
      if (response.data.ok) {
        // commit("setNotifications", response.data.data);
      }
    } catch (e) {
      errorHandle(e);
    }
  },
};
