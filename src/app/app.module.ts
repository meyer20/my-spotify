import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyAuthComponent } from './libs/component/spotify-auth-component/spotify-auth-component.component';
import { ServiceModule } from './libs/service/service.module';
import { HomeComponent } from './libs/component/home/home.component';
import { ProfileComponent } from './libs/component/profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  declarations: [
    AppComponent,
    SpotifyAuthComponent,
    HomeComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
