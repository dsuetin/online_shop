import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    // this._isAuth = true;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(isAuth) {
    this._isAuth = isAuth;
  }

  setUser(user) {
    this._user = user;
  }

  getIsAuth() {
    return this._isAuth;
  }

  getUser() {
    return this._user;
  }
}
