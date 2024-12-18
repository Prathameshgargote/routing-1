import { Injectable } from '@angular/core';
import { Iproduct } from '../model/Iproduct';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArr :Array<Iproduct>= [
    { id: '1', name: "Product A", pstatus: 'Available' },
    { id: '2', name: "Product B", pstatus: "Out of Stock" },
    { id: '3', name: "Product C", pstatus: "Available" },
    { id: '4', name: "Product D", pstatus: "Discontinued" }
]
  constructor(
    private _router:Router,
    private _snackbar:SnackbarService
  ) { }

  fetchAllProductData(){
    return this.productsArr
  }
  fetchprod(id:string):Iproduct{
    return this.productsArr.find(prod=>prod.id===id)!
  }

  AddprodData(product:Iproduct){
   this.productsArr.push(product)
   this._router.navigate(['products'])
   this._snackbar.opensnakbar(`the product ${product.name} is added sucessfully!!!`)
  }
  editproduct(product:Iproduct){
    console.log(product);
    
    let getindex=this.productsArr.findIndex(prod=>prod.id===product.id)
    console.log(getindex);
    
    this.productsArr[getindex]=product
    this._router.navigate(['/products',product.id],{
      queryParams:{pstatus:product.pstatus}
    })
    this._snackbar.opensnakbar(`the product has been updated having id is ${product.id}`)

  }
}
