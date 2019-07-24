import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fotografia } from '../classes/fotografia';

@Injectable({
  providedIn: 'root'
})
export class ApiFotografiasService {

  private apiURL = `${environment.API_URL}loremPicsum`;
  constructor(private http: HttpClient) { }
  getFotografias$() {
    return this.http.get(this.apiURL);
  }
  getFotografia$(id: string) {
    this.apiURL = `${this.apiURL}${id}`;
    return this.http.get<Fotografia>(this.apiURL);
  }
  deleteFotografias$(id: string) {
    this.apiURL = `${this.apiURL}${id}`;
    return this.http.delete<Fotografia>(this.apiURL);
  }
}
