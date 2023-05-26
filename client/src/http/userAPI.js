import JwtDecode from 'jwt-decode';
import { $authHost, $host } from './index';

export const registration = async (email, password) => {
  // const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
  const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
  localStorage.setItem('token', data.token);
  console.log('registration', data);
  return JwtDecode(data.token);
  // return data;
};

export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  console.log('login', data);
  return JwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  // const { data } = await $host.get('api/user/auth');
  console.log('JwtDecode(data.token)', JwtDecode(data.token));
  localStorage.setItem('token', data.token);
  return JwtDecode(data.token);
};
