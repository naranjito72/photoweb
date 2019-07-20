import { Component, OnInit } from '@angular/core';
import { Pagina } from '../enlace-list';
import { paginas } from '../mockEnlace';
import { PaginasService } from '../services/paginas.service';
import { Fotografia } from '../web-list';
import { fotografias } from '../mockWebList';
import { FotografiasService } from '../services/fotografias.service';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css']
})
export class WebHomeComponent implements OnInit {
  paginas: Pagina [] = paginas;
  fotografias: Fotografia [] = fotografias;
  constructor(public paginasService: PaginasService, public fotografiasService: FotografiasService) { }

  ngOnInit() {
    this.paginas = this.paginasService.getPaginas();
    this.fotografias = this.fotografiasService.getFotografias();
  }

}
