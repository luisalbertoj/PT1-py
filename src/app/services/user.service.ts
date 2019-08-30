import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:Http) { }

  login() {
    return this._http.get('https://gy7228.myfoscam.org:8443/stock-pwfe/persona');
  }
}
