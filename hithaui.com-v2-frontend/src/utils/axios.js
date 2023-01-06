import Axios from 'axios';
// eslint-disable-next-line import/named
import { authLogout, authSetAccessToken } from 'src/store/auth/auth.action';
import store from '../store';
import constants from '../constants';

const { endpoints, errorMessage } = constants;

const axios = (() => {
  const instance = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
  });

  const getToken = (refreshToken) => {
    return instance.post(endpoints.refreshToken, {
      refreshToken
    });
  };

  instance.interceptors.request.use((config) => {
    const { token } = store.getState().auth.data;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      const { refreshToken } = store.getState().auth.data;

      if (err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig.retry) {
          originalConfig.retry = true;

          try {
            const rs = await getToken(refreshToken);
            const { token } = rs.data;
            store.dispatch(authSetAccessToken(token));
            originalConfig.headers.Authorization = `Bearer ${token}`;
            return instance(originalConfig);
          } catch (_error) {
            store.dispatch(authLogout());
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }

            return Promise.reject(_error);
          }
        }

        if (err.response.status === 403 && err.response.data) {
          return Promise.reject(err.response.data);
        }
      }

      if (err.response && err.response.data) {
        return Promise.reject(new Error(err.response.data.msg));
      }

      switch (err.message) {
        case 'Network Error':
          return Promise.reject(new Error(errorMessage.ERROR_NETWORK));
        default:
          return Promise.reject(err);
      }
    }
  );

  return instance;
})();

export default axios;
