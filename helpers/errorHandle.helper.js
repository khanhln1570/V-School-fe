const errorHandle = (err) => {
  if (process.server) {
    return
  }
  if (!$nuxt) return;

  let errorMessage = 'Something went wrong!';
  if (err.response && err.response.data) {
    errorMessage = err.response.data?.message;
  }
  console.log("err", err.response);

  return $nuxt?.$toast?.error(errorMessage, {
    duration: 3000
  });
}

export default errorHandle;