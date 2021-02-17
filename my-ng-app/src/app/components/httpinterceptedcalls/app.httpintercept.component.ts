import { SecureInterceptService } from './../../services/app.secureservice-intercept';
import { LoginUser, ProductResponse } from './../../models/app.users.mode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpintercept-component',
  templateUrl: './app.httpintercept.view.html'
})

export class HttpInterceptComponent implements OnInit {
  newmessage:string;
  responsProducts: Array<ProductResponse>
  constructor(private serv: SecureInterceptService) {
    this.newmessage= "";
    this.responsProducts = new Array<ProductResponse>();
   }

  ngOnInit() { }

  loginUser():void {
    let authUserData: LoginUser = new LoginUser("myuser007@msit.com", "P@ssw0rd_");
    this.serv.authUser(authUserData).subscribe((response)=>{
      // print the token
      this.newmessage = JSON.stringify(response);
      // save the token in sessionStorage
      sessionStorage.setItem("authToken", response.Message);
   },(error)=>{
    this.newmessage = `Error Occures ${error.message}`
   });
  }
  getData():void {

    this.serv.getProducts().subscribe((response)=>{
      this.responsProducts = response;
   },(error)=>{
    this.newmessage = `Error Occures ${error.message}`
   });
  }
}
