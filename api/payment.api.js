export default (axios, resource) => ({
  getCustomer(payload) {
    return axios.get(resource.getCustomer.replace(':BHYT', payload.BHYT));
  },
  getPublicSchool(payload) {
    return axios.get(resource.getPublicSchool);
  },
  getPublicStudentBHYT(payload) {
    return axios.get(resource.getPublicStudentBHYT, {params: payload.params});
  },
  addBillPublic(payload) {
    return axios.post(resource.addBillPublic, payload);
  }
});
