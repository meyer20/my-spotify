import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './guard/auth.guard';
import { SpotifyAuthService } from './spotify/spotify-auth.service';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { SpotifyService } from './spotify/spotify.service';
import { SpotifyStore } from './spotify/spotify.store';
import { TokenService } from './token/token.service';
import { AuthService } from './auth/auth.service';
import { LocalStorageService } from './localstorage/localstorage.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthGuard,
    SpotifyAuthService,
    SpotifyService,
    SpotifyStore,
    TokenService,
    CookieService,
    AuthService,
    LocalStorageService,
    // TODO Remover daqui
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
})
export class ServiceModule { }
