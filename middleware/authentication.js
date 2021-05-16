import { AUTH_TOKEN_KEY } from "../store/auth/auth.constants";

export default async function ({ isHMR, app, store, route, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }

  const isLoggedIn = app.$cookies.get(AUTH_TOKEN_KEY);
  const excludeRoutes = ['signin', 'reset-password', 'reset-password-token'];
  if (!isLoggedIn) {
    if (excludeRoutes.includes(route.name)) {
      return true;
    }
    // return redirect(
    //   '/signin'
    // )
  } else {
    if (excludeRoutes.includes(route.name)) {
      return redirect(
        '/'
      )
    }
    return true;
  }
}
