

export default (axios, resource) => ({
  getSchools(payload) {
    const params = {
      params: payload
    };

    return axios.get(resource.getSchools, params);
  },

  getSchoolDetails(payload) {
    return axios.get(resource.getSchoolDetails.replace(':id', payload));
  },
  resetpassParent(payload) {
    return axios.put(resource.resetpassParent, payload);
  },

  addSchool(payload) {
    return axios.post(resource.addSchool, payload);
  },
});
