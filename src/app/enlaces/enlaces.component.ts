import { Component, OnInit } from '@angular/core';
import { FotografiasService } from '../services/fotografias.service';
import { ActivatedRoute } from '@angular/router';
import { enlaces } from '../mockEnlaces.model';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent implements OnInit {
  /*Necesito lista jSon. */
  public id: any;
  public fotografia: any = {};
  public enlaces = enlaces; /*llamada a enlaces */

  constructor(public fotografiaService: FotografiasService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
    this.id = params.id;
    this.fotografia = this.fotografiaService.getFotografia(this.id);
    });
  }

}

