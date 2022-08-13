import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModule } from '../../service/service.module';
import { SpotifyAuthComponent } from './spotify-auth-component.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
  ],
  declarations: [SpotifyAuthComponent],
  exports: [SpotifyAuthComponent]
})
export class SpotifyAuthModule { }
