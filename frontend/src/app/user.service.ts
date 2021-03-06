import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  newUser(item:any){
    return this.http.post("http://localhost:1514/newuser",{user:item})
      .subscribe(data => {console.log(data)})
  }
  getUser(email:any){
    return this.http.get("http://localhost:1514/getuser/"+email);
  }
  checkUser(email:any){
    return this.http.get("http://localhost:1514/checkuser/"+email);
  }
}
