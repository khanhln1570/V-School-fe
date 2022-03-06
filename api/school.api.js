

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
});
