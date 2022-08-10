import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './libs/service/service.module';
import { ComponentsModule } from './libs/component/components.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    FontAwesomeModule,
    ComponentsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
