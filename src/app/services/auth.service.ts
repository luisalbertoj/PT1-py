import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    /* localStorage.setItem('user', '{"name": "luis"}'); */
    if(JSON.parse(localStorage.getItem('user'))) return true;
    return false;
  }
}
