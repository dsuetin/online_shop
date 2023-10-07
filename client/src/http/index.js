import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_URL,
});

const authInterceptor = (config) => {
  const newConfig = config;
  newConfig.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return newConfig;
};

$authHost.interceptors.request.use(authInterceptor);

export const API_URL = 'http://localhost:7000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,

});

$api.interceptors.request.use((config) => {
  const cnf = config;
  cnf.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  console.log('config.headers.Authorization998987', cnf.headers.Authorization);
  return cnf;
});

$api.interceptors.response.use((config) => {
  return config;
}, (async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config.isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return $api.request(originalRequest);
    } catch (e) {
      console.log('Error in $api.interceptors.response');
    }
  }
  throw error;
}));

// export default $api;

export {
  $host,
  $authHost,
  $api,
};
