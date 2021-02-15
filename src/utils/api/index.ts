import axios from 'axios';

const request = axios.create({
  baseURL: 'http://powerasia.loko.uz/',
});

// request.defaults.headers.common['Accept'] = 'application/json';
// request.defaults.headers.common['Content-Type'] =
//   'application/json; charset=utf-8';

// request.defaults.headers.common[
//   'Authorization'
// ] = `Bearer $2y$10$X.ogjIY1zo67tJWAxwlRNeg9edxhGAEBiIqyY7/vQWd5G9CZUXxwi`;

// const setToken = (store: Store) => {
//   function select(state: RootState) {
//     return state.user.token;
//   }
//
//   let currentValue: string;
//
//   function handleChange() {
//     let previousValue = currentValue;
//     currentValue = select(store.getState());
//
//     if (previousValue !== currentValue) {
//       request.defaults.headers.common[
//         'Authorization'
//       ] = `Bearer $2y$10$X.ogjIY1zo67tJWAxwlRNeg9edxhGAEBiIqyY7/vQWd5G9CZUXxwi`;
//     }
//   }
//
//   store.subscribe(handleChange);
// };

export { request };
