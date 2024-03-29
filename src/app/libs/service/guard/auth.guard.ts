import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild();
  }

  public canActivateChild(): boolean {
    return this.authService.authenticated;
  }
}

