import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Iproduct } from '../../model/Iproduct';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productArr!:Array<Iproduct>
  selectedId!:string
  constructor(
    private _routs:ActivatedRoute,
    private _prodServices:ProductService,
    private _Routes:Router
  ) { }

  ngOnInit(): void {
    this.productArr=this._prodServices.fetchAllProductData()

    this._routs.params
    .subscribe((params:Params)=>{
      console.log(params);
    })
    // this._Routes.navigate([this.productArr[0].id],{
    //   relativeTo:this._routs
    // })

  }

  onselectprod(id:string){
    console.log(id);
    this.selectedId=id
    
  }
  

}
