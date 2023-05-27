import { $authHost, $host } from './index';

export const createType = async (type) => {
  console.log('CreateType555', type);
  const typeName = type.value;
  console.log('354637', typeName);
  // const { data } = await $authHost.post('api/type', { type });
  const { typeData } = await $authHost.post('api/type', { name: typeName });
  // console.log('CreateType', data);
  return typeData;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  console.log('fetchTypes', data);
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', { brand });
  console.log('CreateBrand', data);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  console.log('fetchBrands', data);
  return data;
};

export const createDevice = async (device) => {
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
  const { data } = await $host.get(`api/device/${DeviceId}`);
  console.log('fetchDevices', data);
  return data;
};
