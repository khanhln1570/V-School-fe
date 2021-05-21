/**
 * https://router.vuejs.org/en/advanced/scroll-behavior.html
 */
// export function scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition
//   }

//   let position = {}

//   if (to.matched.length < 2) {
//     position = {
//       x: 0,
//       y: 0
//     }
//   } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
//     position = {
//       x: 0,
//       y: 0
//     }
//   }
//   if (to.hash) {
//     position = {
//       selector: to.hash
//     }
//   }

//   return position
// }

export function setExpireTime() {
  return 3600 * 24 * 365 * 1;
}

export function arrayToQuery(array) {
  let string = '';
  array.forEach((item, index) => {
    string += item;
    if (index !== (array.length - 1)) {
      string += ',';
    }
  });
  return string;
}