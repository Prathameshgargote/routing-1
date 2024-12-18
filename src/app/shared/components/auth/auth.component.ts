import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!:FormGroup
  singUpForm!:FormGroup

  allreadyhaveAcc:boolean=true

  constructor(
    private AuthServices:AuthService
  ) { }

  ngOnInit(): void {
    this.createloginform()
    this.createsingupform()
  }

  createloginform(){
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    })
  }

  createsingupform(){
    this.singUpForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      confirmpassword:new FormControl(null,[Validators.required])
    })
  }

  onlogin(){
    console.log(this.loginForm);
    
    if(this.loginForm.valid){
    console.log(this.loginForm.value);
    let obj:{email:string,password:string}=this.loginForm.value
    this.AuthServices.onAppLogin(obj)

    }
  }

  onsignup(){
    if(this.singUpForm.valid){
      console.log(this.singUpForm.value);
      
    }
  }
}
