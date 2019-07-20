import { Injectable } from '@angular/core';
import { fotografias } from '../mockWebList';
import { Fotografia } from '../web-list';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  fotografias: Fotografia [] = fotografias;

  constructor() { }
  public getFotografias() {
    return this.fotografias;
  }
  getFotografia(id: number) {
    let fotografiaItem: Fotografia;
    this.fotografias.forEach((singleFotografia) => {
      if (singleFotografia.id === Number(id)) {
        fotografiaItem = singleFotografia;
      }
    });
    return fotografiaItem;
  }
  }

