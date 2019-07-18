import { Component, OnInit } from '@angular/core';
import { Pagina } from '../enlace-list';
import { paginas } from '../mockEnlace';
import { PaginasService } from '../services/paginas.service';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css']
})
export class WebHomeComponent implements OnInit {
  paginas: Pagina [] = paginas;

  constructor(public paginasService: PaginasService) { }

  ngOnInit() {
    this.paginas = this.paginasService.getPaginas();
  }

}
