import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http: Http) { }

  create(datos: any) {
    return this._http.post('https://gy7228.myfoscam.org:8443/stock-pwfe/categoria', datos);
  }
  get() {
    return this._http.get('https://gy7228.myfoscam.org:8443/stock-pwfe/categoria');
  } 
}
