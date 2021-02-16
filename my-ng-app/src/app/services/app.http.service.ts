import { ProductInfo } from './../models/app.productinfo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
  private url:string;
  // the HttpClient will be resolved by HttpClientModule
  constructor(private httpClient: HttpClient) {
    this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
   }

   getData():Observable<ProductInfo[]>{
      let response:Observable<ProductInfo[]>;
      response = this.httpClient.get<ProductInfo[]>(this.url);
      return response;
   }

   getDataById(id:number):Observable<ProductInfo>{
    let response:Observable<ProductInfo>;
    response = this.httpClient.get<ProductInfo>(`${this.url}/${id}`);
    return response;
 }

   postData(prd:ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.httpClient.post<ProductInfo>(this.url, prd, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
   }

   putData(prd:ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.httpClient.put<ProductInfo>(`${this.url}/${prd.ProductName}`, prd, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
   }
   deleteData(id:number):Observable<ProductInfo>{
    let response:Observable<ProductInfo>;
    response = this.httpClient.delete<ProductInfo>(`${this.url}/${id}`);
    return response;
 }


}
