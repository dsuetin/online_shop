import JwtDecode from 'jwt-decode';
import { $authHost, $host } from './index';

export const fetchRoles = async () => {
  // $authHost - присоединяет к запросу токен авторизации
  const { data } = await $authHost.get('api/role/');
  console.log('fetchRoles data', data);
  return data;
};

export const fetchRoleUsers = async () => {
  // $authHost - присоединяет к запросу токен авторизации
  const { data } = await $authHost.get('api/user/users/');
  console.log('fetchRoleUsers data', data);
  return data;
};
