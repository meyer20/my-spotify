import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceModule } from './libs/service/service.module';
import { NavbarModule } from './libs/component/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './libs/component/components.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ComponentsModule,
    NavbarModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
