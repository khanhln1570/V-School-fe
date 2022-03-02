import { AUTH_TOKEN_KEY } from "../store/auth/auth.constants";
import { publicRoutes } from '../shared/publicRoutes';
export default async function ({ isHMR, app, store, route, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }

  // pass public routes
  // console.log('route.name', route.name);
  if (publicRoutes.includes(route.name)) {
    return true;
  }

  const isLoggedIn = app.$cookies.get(AUTH_TOKEN_KEY);
  const currentUser = store.state.auth.currentUser;
  // console.log(route);
  const excludeRoutes = ['signin', 'reset-password', 'reset-password-token', 'payment-result', 'about'];
  if (!isLoggedIn) {
    if (excludeRoutes.includes(route.name)) {
      return true;
    }
    return redirect(
      '/signin'
    )
  } else {
    app.$axios.defaults.headers.common[
      "Authentication"
    ] = isLoggedIn;

    if (!currentUser.id && isLoggedIn) {
      await store.dispatch('auth/getProfile');
    }
    // if (excludeRoutes.includes(route.name) && currentUser.accRole === "PARENT") {
    //   return redirect(
    //     '/your-child'
    //   )
    // } else
    if (excludeRoutes.includes(route.name)) {
      return redirect(
        '/dashboard'
      )
    }
    return true;
  }
}
