import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ServiceModule } from '../../service/service.module';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    MdbDropdownModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
