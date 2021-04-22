export default {
  getCurrentUser(state) {
    return state.currentUser;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  getCurrentRole(state) {
    return state.currentUser ? state.currentUser.role : ""
  }
};
