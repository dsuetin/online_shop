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
      { id: 1, name: 'barends', brand: 1, type: 1, price: 2500, rating: 4, img: '/barends.jpg' }, // path correcpond to /.../public/
      { id: 2, name: 'bike blue', brand: 2, type: 2, price: 3500, rating: 5, img: '/bike_blue.jpg' },
      { id: 3, name: 'bike frame black', brand: 3, type: 3, price: 4000, rating: 4, img: '/bike_frame_black.jpg' },
      { id: 4, name: 'saddle black', brand: 4, type: 4, price: 3500, rating: 3, img: '/saddle_black.jpg' },
      { id: 5, name: 'hui', brand: 5, type: 5, price: 3500, rating: 5, img: '/hui.jpg' },
      { id: 6, name: 'hz', brand: 1, type: 2, price: 1204, rating: 2, img: '/hz.png' },
      { id: 7, name: 'logo', brand: 1, type: 2, price: 1204, rating: 2, img: '/logo512.png' },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
    console.log('setSelectedBrand', brand.id, brand.name, this._selectedBrand.id);
    // this.getSelectedBrand();
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

  getSelectedBrand() {
    // return (typeof this._selectedBrand === 'undefined' || this._selectedBrand === null)
    // ? null : this._selectedBrand;
    console.log('sss', this._selectedBrand);
    return this._selectedBrand;
  }
}
