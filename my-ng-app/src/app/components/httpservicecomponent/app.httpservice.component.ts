import { RegisterUser, LoginUser, ProductResponse } from './../../models/app.users.mode';
import { SecureService } from './../../services/app.secureservice';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../../services/app.http.service";
@Component({
  selector: 'app-httpservice-component',
  templateUrl: './app.httpservice.view.html'
})

export class HttpServiceComponent implements OnInit {
  prod: ProductInfo
  products:Array<ProductInfo>;
  message:string;
  newmessage:string;
  responsProducts: Array<ProductResponse>
  constructor(private serv:HttpService, private secureServ: SecureService) {
    this.prod = new ProductInfo(0,'','','','','',0);
    this.products = new Array<ProductInfo>();
    this.message = '';
    this.newmessage= "";
    this.responsProducts = new Array<ProductResponse>();
   }
   // subscribe to the getData() method of the service
  ngOnInit() {
    this.loadData();
  }
  loadData():void {
    this.serv.getData().subscribe((response)=>{
      this.products = response;
      this.message = 'Successful.....';
    }, (error)=>{
      this.message = `Error Occures ${error.message}`
    });
  }
  save():void {
    this.prod = new ProductInfo(0,'Prd9001','Tablet',
      'Electronics','Apple','iPad-Pro',34000);
    this.serv.postData(this.prod).subscribe((response)=>{
      this.prod = response;
      this.products.push(this.prod);
      this.message = 'Successful.....';
    }, (error)=>{
      this.message = `Error Occures ${error.message}`
    });;
  }

  createUser():void {
     let newUser: RegisterUser = new RegisterUser("myuser007@msit.com", "P@ssw0rd_", "P@ssw0rd_");
     this.secureServ.registerUser(newUser).subscribe((response)=>{
        this.newmessage = JSON.stringify(response);
     },(error)=>{
      this.newmessage = `Error Occures ${error.message}`
     });
  }
  loginUser():void {
    let authUserData: LoginUser = new LoginUser("myuser007@msit.com", "P@ssw0rd_");
    this.secureServ.authUser(authUserData).subscribe((response)=>{
      // print the token
      this.newmessage = JSON.stringify(response);
      // save the token in sessionStorage
      sessionStorage.setItem("authToken", response.Message);
   },(error)=>{
    this.newmessage = `Error Occures ${error.message}`
   });
  }
  getData():void {
    // read the token from the session storage
    let authToken:any  = sessionStorage.getItem("authToken");
    this.secureServ.getProducts(authToken).subscribe((response)=>{
      this.responsProducts = response;
   },(error)=>{
    this.newmessage = `Error Occures ${error.message}`
   });
  }
}
