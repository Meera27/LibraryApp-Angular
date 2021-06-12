import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user:any)
  {
    // return this.http.post<any>("http://localhost:1514/login",user);
    return this.http.post<any>("http://localhost:1514/login",user);
    
  } 

  constructor(private http : HttpClient) { }
  rolesVerify(){
    let admin=sessionStorage.getItem('user');
    if(admin==='admin'){
      return true
    }
    else{
      true
    }
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
   return localStorage.getItem('token')
  }
  
}
