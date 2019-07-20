import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [HomeComponent, NavbarComponent, NotFoundComponent]
})
export class CommonsModule { }
