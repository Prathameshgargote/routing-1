import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  UserArr!:Array<Iuser>
  selectedid!:string

  constructor(
    private _route:Router,
    private _userServices:UsersService,
    private _routs:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.UserArr=this._userServices.FetchUserData()
  this.selectedid = this.UserArr[0].UserId
  this._route.navigate([this.UserArr[0].UserId],{
    relativeTo:this._routs
  })


    // this.UserArr=this._route.FetchUserData()

  }


  onuserclick(id:Iuser){
    this.selectedid= id.UserId
  }

 
















  
}
