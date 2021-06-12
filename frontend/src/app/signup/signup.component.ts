import { Component, OnInit } from '@angular/core';
// import {FormControl,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import {FormBuilder, Validators} from '@angular/forms';
import { UserModel } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String="Sign Up";
  constructor(private fb : FormBuilder, private userService: UserService, private router: Router) { }
  // registerForm = this.fb.group(
  //   {
  //     email:['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  //     password :['',[Validators.minLength(6),Validators.required]]
  //   }
  // )
  ngOnInit(): void {
  }
  user = new UserModel('','','','','');
  userVerify(){
    this.userService.newUser(this.user);
    alert("Success");
    this.router.navigate(['login']);
  }

}
// regx=^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(.[a-z]{2,3})?$