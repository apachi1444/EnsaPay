import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setUsernameLocaleStorage(username: any) {
    localStorage.setItem('username', username);
  }

  setTokenLocalStorage(token: any) {
    localStorage.setItem('token', token);
  }

  getTokenLocalStorage(): any {
    return localStorage.getItem('token');
  }

  getUsernameLocalStorage() {
    localStorage.getItem('username');
  }

  getUserName() {
    const jwt = this.getTokenLocalStorage();
    console.log('this is the jwt ' + jwt);
    if (jwt != null) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      return decodedJwtData.sub;
    }
  }

  getRole() {
    const jwt = this.getTokenLocalStorage();
    console.log('this is the jwt ' + jwt);
    if (jwt != null) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      return decodedJwtData.role[0];
    }
  }

  removeItem(item: any) {
    localStorage.removeItem(item);
  }
}
