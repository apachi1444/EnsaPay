import { Injectable } from '@angular/core';
import { CanActivate, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage-service/local-storage.service';
import { LoginServiceService } from '../login-service/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  currentRoute = '';
  returnValue = true;
  constructor(
    private router: Router,
    private loginService: LoginServiceService,
    private localStorage: LocalStorageService
  ) {}

  // canActivate(): boolean {
  //   if (this.loginService.loggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigateByUrl('/unauthorized');
  //     return false;
  //   }
  // }
  canActivate(): boolean {
    if (this.loginService.loggedIn()) {
      console.log('firstConnection');
      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          let role = event.url.split('/')[1];
          console.log('this is the role ' + role);
          console.log(
            'this is the role we have in the localstorage' +
              this.localStorage.getRole().slice(5).toLowerCase()
          );
          if (this.localStorage.getRole().slice(5).toLowerCase() !== role) {
            this.router.navigateByUrl('/unauthorized');
            this.returnValue = false;
          }
        }
      });
      console.log(this.returnValue);
      return this.returnValue;
    } else {
      this.router.navigateByUrl('/unauthorized');
      return false;
    }
  }
}
