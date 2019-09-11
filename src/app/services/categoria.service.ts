import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http: HttpClient) { }

  create(datos: any) {
    return this._http.post('https://gy7228.myfoscam.org:8443/stock-pwfe/categoria', datos);
  }
  get() {
    return this._http.get('https://gy7228.myfoscam.org:8443/stock-pwfe/categoria');
  } 
}
