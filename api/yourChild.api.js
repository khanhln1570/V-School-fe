export default (axios, resource) => ({
  getStudentsByPhone(payload) {
    return axios.get(resource.getStudentsByPhone.replace(":phone",payload));
  },
  getStudentsByMST(payload) {
    return axios.get(resource.getStudentsByMST.replace(":mst",payload));
  },
});
