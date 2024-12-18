import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fair';
import { FairService } from '../../services/fair.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
fairArr!:Array<Ifairs>
selectedfairid!:string
  constructor(
    private _fairRouts:FairService,
    private _rotes:Router,
    private _Router:ActivatedRoute
  ) { }

  ngOnInit(): void {
 this.fairArr= this._fairRouts.fetchAllFairs()
 this.selectedfairid=this.fairArr[0].fairId;
 this._rotes.navigate([this.fairArr[0].fairId],{
  relativeTo:this._Router
 })
  }

}
