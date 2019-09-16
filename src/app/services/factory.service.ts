import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { encode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private _http: HttpClient) { }
  create(model: string, data: any) {
    return this._http.post(environment.urlApi + 'stock-pwfe/' + model, data, { headers: environment.httpHeaders });
  }
  get(model: string, orderBy?: any,orderDir?: any, base?: number, tope?: number, query?: any, like?: boolean) {
    if (model && orderBy && orderDir && base && tope && query && like) {
      console.log('ejecutando like');
      return this._http.get(environment.urlApi + 'stock-pwfe/' + model +
      '?orderBy='+ orderBy +'&orderDir='+orderDir+'&inicio='+base+'&cantidad='+tope
      +'&like=S' + '&ejemplo='+encodeURI(JSON.stringify(query)));
    } else if (model && orderBy && orderDir && base && tope && query) {
      console.log('ejecutando query');
      return this._http.get(environment.urlApi + 'stock-pwfe/' + model +
      '?ejemplo='+encodeURI(JSON.stringify(query)));
    } else if (model && orderBy && orderDir && base && tope) {
      console.log('ejecutando get paginado');
      return this._http.get(environment.urlApi + 'stock-pwfe/' + model +
      '?orderBy='+ orderBy +'&orderDir='+orderDir+'&inicio='+base+'&cantidad='+tope);
    }
    else {
      console.log('ejecutando get limpio');
      return this._http.get(environment.urlApi + 'stock-pwfe/' + model);
    }
  }
  delete(model: string, id: any) {
    return this._http.delete(environment.urlApi + 'stock-pwfe/' + model + '/' + id, { headers: environment.httpHeaders });
  }
  update(model: string, data: any) {
    return this._http.put(environment.urlApi + 'stock-pwfe/' + model, data, { headers: environment.httpHeaders });
  }
}
