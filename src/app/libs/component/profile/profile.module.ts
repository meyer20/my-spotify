import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModule } from '../../service/service.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }
