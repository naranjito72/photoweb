import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fotografia } from 'src/app/shared/classes/fotografia';

@Component({
  selector: 'app-fotografia-detalle',
  templateUrl: './fotografia-detalle.component.html',
  styleUrls: ['./fotografia-detalle.component.css']
})
export class FotografiaDetalleComponent implements OnInit {
  public identifier: any;
  public selectedFotografias: {
    id: string;
    author: string;
    url: string;
    download_url: string;

  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   /*  this.route.params.subscribe(miParams => {this.identifier = miParams['id']; });
    this.selectedFotografias = Fotografia.find(e => {return e.index == this.identifier}) */
  }

}
