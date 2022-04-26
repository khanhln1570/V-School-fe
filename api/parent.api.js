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
<<<<<<< HEAD
    return axios.post(resource.saveParents, payload);
=======
    return axios.post(resource.saveParents, { params: payload });
>>>>>>> 4d2ce118e49c39f6d514a36438c3652d3af53a33
  },
});
