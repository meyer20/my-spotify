import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Auth } from '../../domain/auth/auth';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private localStorageService: LocalStorageService) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const response = this.extractApiResponse(next.fragment);
    if (response) {
      this.authService.token = response.access_token;
      // TODO Não é melhor setar nos cookies?
      this.localStorageService.setDataByKey('access_token', response.access_token);
    }

    return !!response;
  }

  private extractApiResponse(responseFragment: string | null): Auth | null {
    if(!!responseFragment){
      return new Auth(this.splitResponseData(responseFragment));
    }

    return null;
  }

  private splitResponseData(responseFragment: string): Auth {
    return this.objectify(responseFragment.split('&').map((s) => s.split('=')))
  }

  private objectify(array: any[]): Auth {
    return array.reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
  }
}

