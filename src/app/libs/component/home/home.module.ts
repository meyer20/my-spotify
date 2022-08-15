import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TopArtistsModule } from '../tops/top-artists/top-artists.module';

@NgModule({
  imports: [
    CommonModule,
    TopArtistsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
