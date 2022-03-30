import axios from 'axios';
import promise from 'promise';

import { blockPageScroll, unblockPageScroll } from '../common/helpers';
import { constants } from '../common';

const initilizeHttpClient = () => {
  const instance = axios.create();
  instance.defaults.headers.common = {};
  axios.defaults.baseURL = constants.API_URL;

  axios.interceptors.request.use(
    (config) => {
      blockPageScroll();

      // here you can handle sending session tokens in headers

      return config;
    },
    (error) => {
      unblockPageScroll();
      return promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (response) => {
      unblockPageScroll();
      return response;
    },
    (error) => {
      unblockPageScroll();

      return Promise.reject(error);
    },
  );
};

export default initilizeHttpClient;
