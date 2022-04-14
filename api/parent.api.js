export default (axios, resource) => ({
  getParents(payload) {
    return axios.get(resource.getParents, { params: payload.params });
  },
  getParentDetails(payload) {
    return axios.get(resource.getParentDetails.replace(":id", payload.id));
  },
  banParent(payload) {
    return axios.put(resource.banParent.replace(":id", payload.id));
  },
  unbanParent(payload) {
    return axios.put(resource.unbanParent.replace(":id", payload.id));
  },
  saveParents(payload) {
    return axios.get(resource.saveParents, { params: payload });
  },
});
