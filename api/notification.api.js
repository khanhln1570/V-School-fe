export default (axios, resource) => ({
  setNotificationRead(payload) {
    return axios.put(resource.setNotificationRead, payload);
  },
});
