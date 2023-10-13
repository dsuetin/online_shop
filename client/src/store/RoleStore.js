import { makeAutoObservable } from 'mobx';

export default class RoleStore {
  constructor() {
    this._roles = [];
    this._selectedRole = NaN;
    makeAutoObservable(this);
  }

  setRoles(roles) {
    this._roles = roles;
  }

  getRoles() {
    return this._roles;
  }

  setSelectedRole(role) {
    this._selectedRole = role;
  }

  getSelectedRole() {
    return this._selectedRole;
  }
}
