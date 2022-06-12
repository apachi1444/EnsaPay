import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const api_key = '12345';
    const role_key = 'CLIENT';
    // clone means copying the existing request which comes to the interceptor
    return next.handle(request.clone({ setHeaders: { api_key, role_key } }));
  }
}
