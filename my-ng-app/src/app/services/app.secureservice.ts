import { LoginUser, ResponseObject, ProductResponse } from './../models/app.users.mode';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../models/app.users.mode';

@Injectable({providedIn: 'root'})
export class SecureService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user:RegisterUser):Observable<ResponseObject> {
    let resp:Observable<any>;
    resp = this.httpClient.post<ResponseObject>('https://tokenbasedsecureapi.azurewebsites.net/api/AuthService/RegisterNewUser',
         user, {
           headers: {
             "Content-Type":"application/json"
           }
         });
    return resp;
  }

  authUser(user:LoginUser):Observable<ResponseObject> {
    let resp:Observable<any>;
    resp = this.httpClient.post<ResponseObject>('https://tokenbasedsecureapi.azurewebsites.net/api/AuthService/Login',
         user, {
           headers: {
             "Content-Type":"application/json"
           }
         });
    return resp;
  }

  getProducts(token:string):Observable<ProductResponse[]> {
    let resp:Observable<ProductResponse[]>;
    resp = this.httpClient.get<ProductResponse[]>('https://tokenbasedsecureapi.azurewebsites.net/api/ProductService',
         {
           headers: {
             "Authorization": `bearer ${token}`
           }
         });
    return resp;
  }


}
