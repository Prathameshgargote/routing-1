import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userLoginState:boolean=false
  constructor(
    private _routs:Router
  ) { }


  onAppLogin(USerCondition:{email :string, password:string}){
    if(USerCondition.email==='jhon@gmail.com'&& USerCondition.password==='jhon'){
      this.userLoginState=true
      this._routs.navigate(['home'])
    }
  }
}

//login




//sign Up



//logout


