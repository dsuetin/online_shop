import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    // this._isAuth = true;
    this._user = {};
    this._users = [];
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

  setUsers(users) {
    this._users = users;
  }

  getUsers() {
    return this._users;
  }
}
