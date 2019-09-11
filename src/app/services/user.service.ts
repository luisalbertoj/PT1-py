import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public User: any;
  constructor(private _http:HttpClient,private router: Router) { 
    this.loadUser();
  }
  loadUser() {
    if(localStorage.getItem('user')) {
      this.User = JSON.parse(localStorage.getItem('user'));
    }
    else {
      this.router.navigate(['pages/login']);
    }
  }
  login() {
    return this._http.get(environment.urlApi+'stock-pwfe/persona');
  }
}
