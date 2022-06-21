import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { off } from 'process';
import { catchError, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage-service/local-storage.service';
import { LoginServiceService } from '../login-service/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.getTokenLocalStorage();
    if (token) {
      console.log('we are inside the session tokenService');
      // clone means copying the existing request which comes to the interceptor
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
