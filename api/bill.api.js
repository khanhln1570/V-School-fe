export default (axios, resource) => ({
  getAllBills(payload) {
    return axios.get(resource.getAllBills, {params: payload.params});
  },
  getBillDetails(payload) {
    return axios.get(resource.getBillDetails.replace(":id", payload.id));
  },
});
