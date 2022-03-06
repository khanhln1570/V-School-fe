export default (axios, resource) => ({
  getParents(payload) {
    return axios.get(resource.getParents, { params: payload.params });
  },
  getParentDetails(payload) {
    return axios.get(resource.getParentDetails.replace(":id", payload.id));
  },
});
