import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenService {
  private readonly ACCESS_TOKEN_NAME = 'access_token';

  constructor(private cookieService: CookieService) { }

  public setToken(value: string, expires: number): void {
    this.cookieService.set(this.ACCESS_TOKEN_NAME, value, expires);
  }

  public getToken(): string {
    return this.cookieService.get(this.ACCESS_TOKEN_NAME);
  }

  public tokenExist(): boolean {
    return this.cookieService.check(this.ACCESS_TOKEN_NAME);
  }

  public deleteToken(): void {
    this.cookieService.delete(this.ACCESS_TOKEN_NAME, '/');
  }
}
