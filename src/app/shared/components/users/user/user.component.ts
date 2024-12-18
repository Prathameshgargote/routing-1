import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userArr!:Array<Iuser>
userId!:string
userInfo!:Iuser
  constructor(
    private _routs:ActivatedRoute,
    private userServices:UsersService,

  ) { }

  ngOnInit(): void {
    
  this._routs.params
       .subscribe((params:Params)=>{
        console.log(params['UserId'])
       this.userId=params['UserId']
       this.userInfo=this.userServices.fetchParams(this.userId)
       
       })
       


    // console.log(this._routs.snapshot.params['UserId']);
    // this.userId=this._routs.snapshot.params['UserId'];
    // this.userInfo=this.userServices.fetchParams(this.userId)
    // console.log(this.userInfo);
    
  //  this.userArr= this.userServices.FetchUserData()

  }
  onremove(){
    this._routs.params
    .subscribe((params:Params)=>{
     console.log(params)
    this.userId=this._routs.snapshot.params['UserId'];})
    this.userServices.removeuser(this.userId)
  }
 

}
