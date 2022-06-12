import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { LocalStorageService } from '../commonServices/local-storage-service/local-storage.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.getTokenLocalStorage();
    console.log('this is the token of the user');
    console.log(token);
    if (token) {
      // clone means copying the existing request which comes to the interceptor
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
