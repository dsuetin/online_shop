import {makeAutoObservable} from "mobx";
export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Велосипеды'},
            {id: 2, name: 'Рамы'},
            {id: 3, name: 'Звезды'},
            {id: 4, name: 'Колеса'},
            {id: 6, name: 'Рули '},
        ]

        this._brands = [
            {id: 1, name: 'bufu'},
            {id: 2, name: 'gedonism'},
            {id: 3, name: 'gedonism_la'},
            // {id: 3, name: 'gedonism_la'},


        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 100000, rating: 0,
                img: "photo_2023-01-22_22-03-18.jpg", typeId: 2, brandId: 2},
            {id: 2, name: '12 pro4' , price: 100000, rating: 0,
                img: "hshs.jpg", typeId: 2, brandId: 2},
            {id: 3, name: '12 pro4255' , price: 100000, rating: 0,
                img: "комета.jpg", typeId: 2, brandId: 2},
            {id: 4, name: '12 pro4255e' , price: 100000, rating: 0,
                img: "photo_2023-01-22_22-02-26.jpg", typeId: 2, brandId: 2},
            {id: 5, name: '3f' , price: 100000, rating: 0,
                img: "photo_2023-01-22_22-02-50.jpg", typeId: 2, brandId: 2},
            {id: 6, name: '3fw' , price: 100000, rating: 0,
                img: "photo_2023-01-22_22-03-05.jpg", typeId: 2, brandId: 2},
            {id: 8, name: '3fwe' , price: 100000, rating: 0,
                img: "photo_2023-01-22_22-03-14.jpg", typeId: 2, brandId: 2},
            {id: 9, name: '3fwer' , price: 100000, rating: 0,
                img: "photo_2023-01-22_22-03-18.jpg", typeId: 2, brandId: 2},
            {id: 9, name: '3fwer' , price: 100000, rating: 0,
                img: "photo_2023-01-22_22-03-22.jpg", typeId: 2, brandId: 2},
            {id: 9, name: '3fwer' , price: 100000, rating: 0,
                img: "55469915-0071-446a-94c9-75df616ae4d9.jpg", typeId: 2, brandId: 2},
            {id: 9, name: '3fwer' , price: 100000, rating: 0,
                img: "55469915-0071-446a-94c9-75df616ae4d9.jpg", typeId: 2, brandId: 2},
            {id: 9, name: '3fwer' , price: 100000, rating: 0,
                img: "55469915-0071-446a-94c9-75df616ae4d9.jpg", typeId: 2, brandId: 2},
            {id: 9, name: '3fwer' , price: 100000, rating: 0,
                img: "55469915-0071-446a-94c9-75df616ae4d9.jpg", typeId: 2, brandId: 2},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}