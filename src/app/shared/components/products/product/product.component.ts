import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iprod, Iproduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   prodId!:string
   ProdObj!:Iproduct
  constructor(
    private _routs:ActivatedRoute,
    private _ProdServices:ProductService
  ) { }
  ngOnInit(): void {
  
    // this.prodId= this._routs.snapshot.params['id']
    // this.ProdObj=this._ProdServices.fetchprod(this.prodId)

    this._routs.params
    .subscribe((params:Params)=>{
      console.log(params['id']);
    this.prodId= params['id']
    this.ProdObj=this._ProdServices.fetchprod(this.prodId) 
    })
  }

}
