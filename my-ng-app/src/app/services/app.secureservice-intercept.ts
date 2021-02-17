import { LoginUser, ResponseObject, ProductResponse } from './../models/app.users.mode';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../models/app.users.mode';

@Injectable({providedIn: 'root'})
export class SecureInterceptService {

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

  getProducts():Observable<ProductResponse[]> {
    let resp:Observable<ProductResponse[]>;
    // define an empty headers object
    const headerValue = new HttpHeaders();
    resp = this.httpClient.get<ProductResponse[]>('https://tokenbasedsecureapi.azurewebsites.net/api/ProductService');
    return resp;
  }


}
