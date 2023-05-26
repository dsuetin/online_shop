import { $authHost, $host } from './index';

export const CreateType = async (type) => {
  const { data } = await $authHost.post('api/type', { type });
  console.log('CreateType', data);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  console.log('fetchTypes', data);
  return data;
};

export const CreateBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', { brand });
  console.log('CreateBrand', data);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  console.log('fetchBrands', data);
  return data;
};

export const CreateDevice = async (device) => {
  const { data } = await $authHost.post('api/device', { device });
  console.log('CreateDevice', data);
  return data;
};

export const fetchDevices = async () => {
  const { data } = await $host.get('api/device');
  console.log('fetchDevices', data);
  return data;
};

export const fetchOneDevice = async (DeviceId) => {
  const { data } = await $host.get(`api/device${DeviceId}`);
  console.log('fetchDevices', data);
  return data;
};
