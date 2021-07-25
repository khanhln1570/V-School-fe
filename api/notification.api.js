export default (axios, resource) => ({
  setNotificationRead(payload) {
    return axios.put(resource.setNotificationRead, payload);
  },

  addNotificationRead(payload) {
    return axios.post(resource.addNotificationRead, payload);
  },
});
