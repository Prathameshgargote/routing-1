import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userId!:string
  userInfo!:Iuser
  userForm!:FormGroup
  Iseditmode:boolean=false
  updatebtnflag:boolean=false

  constructor(
    private _routes:ActivatedRoute,
    private _userservices:UsersService,
    private _uuidservicer:UuidService,
    private _quryrouts:Router
  ) { }

  ngOnInit(): void {
   this.userForm=new FormGroup({
    UserName:new FormControl(null,Validators.required),
    UserPositon:new FormControl("condidate")
   })
   this.userId=this._routes.snapshot.params['UserId'];
   if(this.userId){
    this.Iseditmode=true
    this.userInfo=this._userservices.fetchParams(this.userId);
   this.userForm.patchValue(this.userInfo)
   }


  this._routes.queryParams
  .subscribe((params:Params)=>{
    console.log(params);

    if(params['UserPositon'].toLowerCase().includes('candidate')){
      this.userForm.disable()
      this.updatebtnflag=true
    }else{
      this.userForm.enable()
      this.updatebtnflag=false
    }
    
  })

  }

  onuserAdd(){
if(this.userForm.valid){
  // console.log(this.userForm.value);
  let userobj={
    ...this.userForm.value, 
    UserId:this._uuidservicer.generateUUID()}
    console.log(userobj);
    this.userForm.reset()
  this._userservices.addpost(userobj)  
}
 }


 onupdate(){
  let updatedObj:Iuser={...this.userForm.value,
   UserId:this._routes.snapshot.params['UserId']
  }
  console.log(updatedObj);
  
 
  this._userservices.updateduser(updatedObj)
 
  // this.userForm.reset()

 }
}
