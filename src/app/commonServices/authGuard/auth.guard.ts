import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  NavigationEnd,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
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

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.localStorage.getTokenLocalStorage() !== null) {
      const role = route.data['roles'] as string;

      if (role) {
        const match = this.loginService.ismatch(role);
        console.log(match);
        if (match) {
          return true;
        } else {
          this.router.navigateByUrl('/unauthorized');
          return false;
        }
      }
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
