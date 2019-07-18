import { Injectable } from '@angular/core';
import { Pagina } from '../enlace-list';
import { paginas } from '../mockEnlace';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {
  paginas: Pagina [] = paginas;

  constructor() { }

  public getPaginas() {
    return this.paginas;
  }
  getPagina(id: string) {
    let paginaItem: Pagina;
    this.paginas.forEach((singlePagina) => {
      if (singlePagina.id === Number(id)) {
        paginaItem = singlePagina;
      }
    });
    return paginaItem;
  }

}
