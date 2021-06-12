
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String = "Login";
  user={
    username:'',
    password:''
    }
  constructor(private _auth:AuthService,private _router : Router) { }

  ngOnInit(): void {
  }
  loginUser(user:any){
    localStorage.setItem("username", this.user.username);
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{  
        localStorage.setItem('token',res.token);
        sessionStorage.setItem("user", this.user.username);
        this._router.navigate(['/books']);
      })
  }
}
