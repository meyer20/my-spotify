import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { TokenService } from '../token/token.service';
import { AccessToken, AccessTokenInterface } from '../../domain/access-token/access-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken!: AccessTokenInterface;
  public readonly authToken$ = new BehaviorSubject<AccessTokenInterface>(this.authToken);

  constructor(private tokenService: TokenService, private router: Router) { }

  public set token(token: AccessTokenInterface) {
    this.authToken = token;
    this.authToken$.next(this.authToken);

    // if (!this.tokenService.tokenExist()) {
    this.tokenService.setToken(this.token.access_token, this.token.expires_in);
    // }
  }

  public get token(): AccessToken {
    return this.authToken;
  }

  public get authenticated(): boolean {
    return this.tokenService.tokenExist();
  }

  public logout(): void {
    this.tokenService.deleteToken();
    this.router.navigate(['']);
  }
}
