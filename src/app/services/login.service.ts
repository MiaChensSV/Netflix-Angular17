import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  login(email: string, password: string) {
    //suppose have sucessfully loggin in and get a token from server
    //store the token in localstorage
    localStorage.setItem('token', Math.random() + '');
  }

  get isLoggedIn(){
    if(localStorage.getItem("token")){return true}
    return false
  }
}
