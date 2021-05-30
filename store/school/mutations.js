export default {
  setSchools(state, item) {
    if (item) {
      state.schools = item.data;
      state.countSchool = item.count;
    }
  },

  setSchoolDetails(state, item) {
    if (item) {
      state.curentSchool = item.data;
    }
  },
};
