import { HttpService } from './../../services/app.http.service';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-productlist-component',
  templateUrl: './app.productlist.view.html'
})

export class ProductListComponent implements OnInit {
  products: Array<ProductInfo>;
  constructor(private serv: HttpService, private router: Router) {
    this.products = new Array<ProductInfo>();
   }

  ngOnInit() {
    this.serv.getData().subscribe((resp)=>{
      this.products = resp;
    },(error)=>{
      console.log(error);
    });
  }
  navigateToEdit(id:number):void {
    // navigate to the edit path with parameter in URL as 'id'
    this.router.navigate(['edit', id]);
  }
}
