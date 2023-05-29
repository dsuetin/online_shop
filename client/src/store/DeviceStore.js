import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;

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

  setPage(page) {
    this._page = page;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  setTotalCount(totalCount) {
    this.totalCount = totalCount;
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

  getPage() {
    return this._page;
  }

  getTotalCount() {
    return this._totalCount;
  }

  getLimit() {
    return this._limit;
  }
}
