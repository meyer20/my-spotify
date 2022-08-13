import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccessToken } from '../../domain/access-token/access-token';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthGuard implements CanActivate {

  constructor(private tokenService: TokenService) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.extractApiResponse(next.fragment);
    if (token) {
      this.tokenService.setToken(token.access_token, token.expires_in);
    }

    return !!token;
  }

  private extractApiResponse(responseFragment: string | null): AccessToken | null {
    if(!!responseFragment){
      return new AccessToken(this.splitResponseData(responseFragment));
    }

    return null;
  }

  private splitResponseData(responseFragment: string): AccessToken {
    return this.objectify(responseFragment.split('&').map((s) => s.split('=')))
  }

  private objectify(array: any[]): AccessToken {
    return array.reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
  }
}

