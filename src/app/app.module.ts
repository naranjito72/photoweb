import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebHomeComponent } from './web-home/web-home.component';
import { EnlacesComponent } from './enlaces/enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    WebHomeComponent,
    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [WebHomeComponent, EnlacesComponent]
})
export class AppModule { }
