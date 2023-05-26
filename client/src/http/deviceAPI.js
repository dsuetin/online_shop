import { $authHost, $host } from './index';

export const CreateType = async (type) => {
  const { data } = await $authHost.post('api/type', { type });
  console.log('CreateType', data);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.post('api/type');
  console.log('fetchTypes', data);
  return data;
};
