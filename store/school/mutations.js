import { setExpireTime } from '~/helpers/utils.helper.js';
import { AUTH_TOKEN_KEY } from "./auth.constants";

export default {
  setSchool(state, item) {
    if (item) {
      state.schools = item;
    }
  },
};
