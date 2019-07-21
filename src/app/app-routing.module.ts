import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { HomeComponent } from './commons/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pagina/:id', component: EnlacesComponent}
  /* {path: 'enlaces/:downloadUrl', component: } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
