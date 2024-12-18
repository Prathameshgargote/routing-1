import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  UserArr:Array<Iuser>=[
    {
      UserName:'jhon Deo',
      UserId:'123',
      UserPositon:'candidate'
    }, 
    {
      UserName:'june Deo',
      UserId:'124',
      UserPositon:'candidate'
    },
    {
      UserName:'may Deo',
      UserId:'125',
      UserPositon:'admin'
    },
    {
      UserName:'pratham Deo',
      UserId:'12',
      UserPositon:'candidate'
    },
   ]
  constructor(
    private _routs:Router,
    private _snackbar:SnackbarService
  ) { }
  defaultuserfetch(){
    this.UserArr.push(this.UserArr[0])
  }
  FetchUserData():Array<Iuser>{
    //api call for the fetch the data tpo DB

    return this.UserArr
  }
  fetchParams(id:string):Iuser{
    //API call for params from cuttent url
    return this.UserArr.find(user=>user.UserId===id)!
  }
  addpost(post:Iuser){
    //apl call to add post in DB
   this.UserArr.push(post)
   this._routs.navigate(['/users'])
   this._snackbar.opensnakbar(`New User ${post.UserName} is added sucessfully!!!`)

  }

  updateduser(updateuser:Iuser){
    //api call to update user
    console.log(updateuser);
    
    let getindex=this.UserArr.findIndex(user=>user.UserId===updateuser.UserId);
    console.log(getindex);
    
     
    this.UserArr[getindex]=updateuser;

    this._routs.navigate(['/users', updateuser.UserId],{
      queryParams:{UserPositon:updateuser.UserPositon}
    })
    this._snackbar.opensnakbar(`update user having id: ${updateuser.UserId}`)
  }


  removeuser(id:string){
    let getIndex=this.UserArr.findIndex(user=>user.UserId===id)
    this.UserArr.splice(getIndex,1)
    this._routs.navigate(['/users'])
    this._snackbar.opensnakbar(` User is deleted sucessfully!!!`)
  }
}
