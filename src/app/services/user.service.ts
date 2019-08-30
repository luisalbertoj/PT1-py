import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public User: any;
  constructor(private _http:Http,private router: Router) { 
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
    return this._http.get('https://gy7228.myfoscam.org:8443/stock-pwfe/persona');
  }
}
