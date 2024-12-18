import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iprod, Iproduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
   prodId!:string
  prodInfo!:Iproduct
  prodForm!:FormGroup
  IseditMode:boolean=false
  constructor(
    private _routs:ActivatedRoute,
    // private route:Router,
    private _prodservices:ProductService,
    private _uuidservices:UuidService
  ) { }

  ngOnInit(): void {
    
    this.prodForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      pstatus:new FormControl('Available')
    })
    // this.prodForm.disable()

    this._routs.queryParams
      .subscribe((params:Params)=>{
        console.log(params);
        if(params['pstatus'].toLowerCase().includes('Discontinued')){
          this.prodForm.disable()
        }else{

        }
        
      }) 
    this.prodId=this._routs.snapshot.params['id']
  if(this.prodId){
    this.IseditMode=true
    this.prodInfo=this._prodservices.fetchprod(this.prodId)
    this.prodForm.patchValue(this.prodInfo)
  }
  }

  onProdAdd(){
    if(this.prodForm.valid){
      console.log({...this.prodForm.value ,id:this._uuidservices.generateUUID()});
      let prodObj:Iproduct= {...this.prodForm.value ,id:this._uuidservices.generateUUID()}
      this.prodForm.reset()
      this._prodservices.AddprodData(prodObj)
    }
    
  }

  onupdate(){
    console.log(this.prodForm.value);
    let updatedobj={...this.prodForm.value,id:this._routs.snapshot.params['id']}
    console.log(updatedobj);
    this._prodservices.editproduct(updatedobj)
  }

}
