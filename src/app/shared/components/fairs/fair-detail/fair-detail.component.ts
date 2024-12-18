import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/shared/model/fair';
import { FairService } from 'src/app/shared/services/fair.service';

@Component({
  selector: 'app-fair-detail',
  templateUrl: './fair-detail.component.html',
  styleUrls: ['./fair-detail.component.scss']
})
export class FairDetailComponent implements OnInit {
  fairId!:string
fairDetail!:Ifairs
  constructor(
    private _route:ActivatedRoute,
    private _fairServices:FairService
  ) { }

  ngOnInit(): void {

    this._route.params
    .subscribe((params:Params)=>{
      console.log(params);
      this.fairId=params['fairId']
      if(this.fairId){
        this._fairServices.fetchFairDetail(this.fairId)
        .subscribe(data=>this.fairDetail=data)
      }

    })
  }

}
