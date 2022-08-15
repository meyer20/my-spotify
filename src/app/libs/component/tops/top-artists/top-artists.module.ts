import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModule } from '../../../service/service.module';
import { TopArtistsComponent } from './top-artists.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
  ],
  declarations: [TopArtistsComponent],
  exports: [TopArtistsComponent]
})
export class TopArtistsModule { }
