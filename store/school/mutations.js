export default {
  setSchools(state, item) {
    if (item) {
      state.schools = item.items;
      state.countSchool = item.count;
    }
  },
};
