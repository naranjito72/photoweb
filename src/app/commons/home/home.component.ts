import { Component, OnInit } from '@angular/core';
import { Fotografia } from 'src/app/web-list';
import { Pagina } from 'src/app/enlace-list';
import { paginas } from 'src/app/mockEnlace';
import { fotografias } from 'src/app/mockWebList';
import { PaginasService } from 'src/app/services/paginas.service';
import { FotografiasService } from 'src/app/services/fotografias.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paginas: Pagina [] = paginas;
  fotografias: Fotografia [] = fotografias;

  constructor(public paginasService: PaginasService, public fotografiasService: FotografiasService) { }

  ngOnInit() {
    this.paginas = this.paginasService.getPaginas();
    this.fotografias = this.fotografiasService.getFotografias();
  }

}
