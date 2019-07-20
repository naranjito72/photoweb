import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  WebHomeComponent } from './web-home/web-home.component';
import {  EnlacesComponent } from './enlaces/enlaces.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WebHomeComponent},
  {path: 'pagina/:id', component: EnlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
