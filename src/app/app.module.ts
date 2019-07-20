import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EnlacesComponent } from './enlaces/enlaces.component';
import { CommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [
    AppComponent,

    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EnlacesComponent]
})
export class AppModule { }
