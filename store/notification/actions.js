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

  async addNotificationRead({ commit, dispatch }, payload) {
    try {
      console.log(payload);
      const response = await this.$api.notification.addNotificationRead(payload);
      if (response.data.ok) {
        this.$toast.success(response.data.message, {
          duration: 3000
        });
      }
    } catch (e) {
      errorHandle(e);
    }
  },
};
