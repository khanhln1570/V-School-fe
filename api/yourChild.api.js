export default (axios, resource) => ({
  getStudentsByPhone(payload) {
    return axios.get(resource.getStudentsByPhone.replace(":phone",payload));
  },
});
