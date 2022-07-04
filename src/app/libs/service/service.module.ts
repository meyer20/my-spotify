import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { SpotifyAuthService } from './spotify/spotify-auth.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import {SpotifyService} from "./spotify/spotify.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthGuard,
    AuthService,
    SpotifyAuthService,
    LocalStorageService,
    SpotifyService,
    // TODO Remover daqui
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
})
export class ServiceModule { }
