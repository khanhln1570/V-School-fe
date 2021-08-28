export default (axios, resource) => ({
  getCustomer(payload) {
    return axios.get(resource.getCustomer.replace(':BHYT', payload.BHYT));
  },
});
