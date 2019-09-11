import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http: HttpClient) { }

  create(datos: any) {
    return this._http.post('https://gy7228.myfoscam.org:8443/stock-pwfe/categoria', datos, {headers:environment.httpHeaders});
  }
  get() {
    return this._http.get('https://gy7228.myfoscam.org:8443/stock-pwfe/categoria');
  } 
  delete(id) {
    return this._http.delete(environment.urlApi+'stock-pwfe/categoria/'+id, {headers:environment.httpHeaders});
  }
}
