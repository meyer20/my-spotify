import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModule } from '../../service/service.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
