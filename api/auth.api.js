export default (axios, resource) => ({
  signin(payload) {
    const headers = {
      "Content-type": "application/json",
    };

    return axios.post(resource.signin, payload, {
      headers,
    });
  },

  signup(payload) {
    const headers = {
      "Content-type": "application/json",
    };

    return axios.post(resource.signup, payload, {
      headers,
    });
  },

  getProfile() {
    return axios.get(resource.getProfile, {});
  },
});
