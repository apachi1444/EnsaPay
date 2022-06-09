import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private loginService: LoginServiceService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
  //  intercept(req: any, next: any) {
  // //   console.log(this.loginService.getToken());
  // //   let tokenizedReq = req.clone({
  // //     setHeaders: {
  // //       Authorization: `Bearer ${this.loginService.getToken()}`,
  // //     },
  // //   });
  // //   return next.handle(tokenizedReq);
  //  }
}
