import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotografiasRoutingModule } from './fotografias-routing.module';
import { FotografiasListComponent } from './fotografias-list/fotografias-list.component';
import { FotografiaDetalleComponent } from './fotografia-detalle/fotografia-detalle.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FotografiasListComponent, FotografiaDetalleComponent],
  imports: [
    CommonModule,
    FotografiasRoutingModule,
    MaterialModule
  ],
  exports: [FotografiasListComponent, FotografiaDetalleComponent]
})
export class FotografiasModule { }
