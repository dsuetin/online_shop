import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'iPhone' },
      { id: 2, name: 'iPad' },
      { id: 3, name: 'Android' },
      { id: 4, name: 'Windows Phone' },
      { id: 5, name: 'Blackberry' },
    ];

    this._brands = [
      { id: 1, name: 'SAMSUNG' },
      { id: 2, name: 'LG' },
      { id: 3, name: 'HTC' },
      { id: 4, name: 'Apple' },
      { id: 5, name: 'Motorola' },
      { id: 6, name: 'Nokia' },
    ];
    this._devices = [
      { id: 1, name: 'iPhone', brand: 1, type: 1, price: 2500, rating: 4, img: 'client/public/logo512.png' },
      { id: 2, name: 'iPad', brand: 2, type: 2, price: 3500, rating: 4, img: 'client/public/logo512.png' },
      { id: 3, name: 'Android', brand: 3, type: 3, price: 4000, rating: 4, img: 'client/public/logo512.png' },
      { id: 4, name: 'Windows Phone', brand: 4, type: 4, price: 3500, rating: 4, img: 'client/public/logo512.png' },
      { id: 5, name: 'Blackberry', brand: 5, type: 5, price: 3500, rating: 4, img: 'client/public/logo512.png' },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrands(brands) {
    this._selectedBrands = brands;
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDeivces(devices) {
    this._devices = devices;
  }

  getTypes() {
    return this._types;
  }

  getBrands() {
    return this._brands;
  }

  getDeivces() {
    return this._devices;
  }

  getSelectedType() {
    return this._selectedType;
  }

  getSelectedBrands() {
    return this._selectedBrands;
  }
}
