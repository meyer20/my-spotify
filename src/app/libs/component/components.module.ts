import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SpotifyAuthComponent } from './spotify-auth-component/spotify-auth-component.component';
import { ServiceModule } from '../service/service.module';

@NgModule({
  imports: [CommonModule, ServiceModule],
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SpotifyAuthComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
