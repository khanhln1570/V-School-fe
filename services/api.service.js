/**
 * Get all file api from folder API in root project -> import
 */

const requireContext = require.context(
  // The relative path of the components folder
  '@/api',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /.*\.api.js$/
);

const modules = (axios, resoucre) => requireContext.keys().map(file => {
  const name = file.replace(/(^.\/)|(\.api.js$)/g, '').split('/');
  let filename = name[0];
  return [filename, requireContext(file)];
}).reduce((modules, [name, module]) => {
  return {
    ...modules,
    [name]: module.default(axios, resoucre)
  }
}, {});


export default ({
  app
}) => {
  const $config = app.$appConfig;
  const resoucre = $config.api;
  const apiResouces = modules(app.$axios, resoucre);

  return apiResouces;
};