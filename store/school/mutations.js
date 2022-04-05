export default {
  setSchools(state, item) {
    if (item) {
      // console.log("item", item);
      state.schools = item;
      state.countSchool = item.count;
    }
  },

  setSchoolDetails(state, item) {
    if (item) {
      state.currentSchool = item;
    }
  },
};
