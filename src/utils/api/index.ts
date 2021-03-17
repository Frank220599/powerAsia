import axios from 'axios';
import { API } from '../../constants/API';

const request = axios.create({
  baseURL: API.BASE_URL,
});

// request.defaults.headers.common['Accept'] = 'application/json';
// request.defaults.headers.common['Content-Type'] =
//   'application/json; charset=utf-8';

export { request };
