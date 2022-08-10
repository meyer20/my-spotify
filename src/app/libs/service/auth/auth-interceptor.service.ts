import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TokenService } from '../token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({ setHeaders: { Authorization: 'Bearer ' + this.tokenService.getToken() }});
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      return event;
    }), catchError((err, caught) => {
      if (err.status === 401) {
        this.tokenService.deleteToken();
        this.router.navigate(['']);
      }

      return caught;
    }));
  }
}
