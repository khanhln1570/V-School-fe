export default (axios, resource) => ({
  login(payload) {
    return axios.post(resource.login, payload);
  },

  getProfile() {
    return axios.get(resource.getProfile);
  },

  updateProfile(payload) {
    return axios.post(resource.updateProfile, payload);
  },
});
