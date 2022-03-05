export default {
  setParents(state, item) {
    if (item) {
      state.parents = item.data;
      state.countParent = item.count;
    }
  },
  setCurrentParent(state, item) {
    if (item) {
      state.currentParent = item;
    }
  },
};
