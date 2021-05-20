import { setExpireTime } from '~/helpers/utils.helper.js';
import { AUTH_TOKEN_KEY } from "./auth.constants";

export default {
  setAuth(state, item) {
    if (item) {
      this.$axios.defaults.headers.common[
        "token"
      ] = item.token;
      const setMaxAge = setExpireTime();
      this.$cookies.set(AUTH_TOKEN_KEY, item.token, { maxAge: setMaxAge, path: '/' });
      state.isLoggedIn = true;
      // state.currentUser = item.currentUser;
      this.$router.push('/');
    }
  },
  clearAuth(state) {
    state.isLoggedIn = false;
    state.currentUser= {};
    this.$cookies.remove(AUTH_TOKEN_KEY, {path: '/',});
    this.$axios.defaults.headers.common[
      "token"
    ] = "";
    this.$router.push('/signin');
  },
};