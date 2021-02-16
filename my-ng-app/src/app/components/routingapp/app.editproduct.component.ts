import { HttpService } from './../../services/app.http.service';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
// import ActivatedRoute for reading parameter from URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editproduct-component',
  template:`
    <h2>
      Edit Product Component
    </h2>
    <div>
      <strong>
        Received Product from Server = {{product|json}}
      </strong>
    </div>
    <input type="button" value="save" (click)="save()"/>
    <br/>
    <a [routerLink]="['']">Go Back to List</a>


  `
})
export class EditProductComponent implements OnInit {
  product: ProductInfo;
  // Inject 'ActivatedRoute' this will be resolved by
  // RoutreModule
  constructor(private serv: HttpService, private act:ActivatedRoute) {
    this.product = new ProductInfo(0,'','','','','',0);
   }

  ngOnInit(): void {
    let id = 0;
    // subscribe to the Route Parameter and read it
    this.act.params.subscribe((p)=>{
      id = p.id;
      // retrive the product based on id
      this.serv.getDataById(id).subscribe((resp)=>{
         console.log(`received Record from Server = ${JSON.stringify(resp)}`);
         this.product = resp;
      },(error)=>{
        console.log(`Error Occured ${error.message}`)
      });
    });

  }

  save():void {
    this.product = new ProductInfo(0,'Prd9002','MacBook',
      'Electronics','Apple','16 GB RAM Core i9',350000);
     this.serv.putData(this.product).subscribe((response)=>{

    }, (error)=>{

    });;
  }
}
