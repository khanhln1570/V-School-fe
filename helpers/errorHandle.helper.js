const errorHandle = (err) => {
  if (!$nuxt) return;

  let errorMessage = 'Something went wrong!';
  if (err.response && err.response.data) {
    errorMessage = err.response.data?.errors?.[0] || err.response.data;
  }

  return $nuxt?.$toast?.error(errorMessage, {
    duration: 3000
  });
}

export default errorHandle;