import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SpotifyAuthModule } from './spotify-auth-component/spotify-auth.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    HomeModule,
    ProfileModule,
    SpotifyAuthModule,
    LoginModule
  ],
})
export class ComponentsModule { }
