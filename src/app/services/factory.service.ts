import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private _http: HttpClient) { }
  create(model: string,data: any) {
    return this._http.post(environment.urlApi + 'stock-pwfe/' + model, data, {headers:environment.httpHeaders});
  }
  get(model: string) {
    return this._http.get(environment.urlApi+ 'stock-pwfe/' + model);
  }
  delete(model: string,id: any) {
    return this._http.delete(environment.urlApi + 'stock-pwfe/'+ model + '/' + id, {headers: environment.httpHeaders});
  }
  update(model: string,data: any) {
    return this._http.put(environment.urlApi + 'stock-pwfe/' + model, data, {headers:environment.httpHeaders});
  }
}
