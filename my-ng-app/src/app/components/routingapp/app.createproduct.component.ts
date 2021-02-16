import { HttpService } from './../../services/app.http.service';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-createproduct-component',
  template:`
    <h2>
      Create Product Component
    </h2>
    <input type="button" value="save" (click)="save()"/>
    <br/>
      <strong>{{message}}</strong>
    <br/>
    <a [routerLink]="['']">Back to List</a>
  `
})
export class CreateProductComponent implements OnInit {
  product: ProductInfo;
  message: string;
  // Inject Router object. This will be resolved by
  // RouterModule that is imported in NgModule
  // using AppRouteringModule
  constructor(private serv: HttpService, private router:Router) {
    this.product = new ProductInfo(0,'','','','','',0);
    this.message = '';
   }

  ngOnInit(): void { }

  save():void {
    this.product = new ProductInfo(0,'Prd9002','MacBook-Pro',
      'Electronics','Apple','32 GB RAM Core i9',450000);
     this.serv.postData(this.product).subscribe((response)=>{
      // navigate to the Product List
      this.router.navigate(['']);
    }, (error)=>{
        this.message = `Error Occured ${error.message}`
    });;
  }
}
