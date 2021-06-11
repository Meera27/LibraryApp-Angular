import { Component, OnInit } from '@angular/core';
// import {FormControl,FormGroup} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String="Sign Up";


  constructor(private fb : FormBuilder) { }
  registerForm = this.fb.group(
    {
      email:['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password :['',[Validators.minLength(6),Validators.required]]
    }
  )
  ngOnInit(): void {
  }

}
// regx=^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(.[a-z]{2,3})?$