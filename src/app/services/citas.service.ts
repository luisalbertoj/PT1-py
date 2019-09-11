import { Injectable } from '@angular/core';
import { Cita } from '../models/cita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { HttpClient,  HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'usuario' : 'gustavo'});
  constructor(private _http:HttpClient) { }
  
  get(): Observable<Cita[]> {
    return this._http.get(environment.urlApi+'stock-pwfe/personaHorarioAgenda').pipe(
      map(response => response as unknown as Cita[])
    );
  }
  create(data: any): Observable<Cita> {
    return this._http.post<Cita>(environment.urlApi+'stock-pwfe/personaHorarioAgenda', JSON.stringify(data), {headers: this.httpHeaders});
  }
}
