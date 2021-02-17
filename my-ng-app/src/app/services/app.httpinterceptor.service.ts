import { SecureInterceptService } from './app.secureservice-intercept';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpHandler, HttpEvent } from "@angular/common/http";
@Injectable()
export class SecurityInterceptorService implements HttpInterceptor {

  // inject the service that will be intercepted

  constructor(private serv:SecureInterceptService ){}

   intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{

     // logic for interception
     // read the token from the storage and use it
     const authToken = sessionStorage.getItem('authToken');
     // get an access of the request header
     let requestHeaders = request.headers;
     console.log(JSON.stringify(requestHeaders.keys()));
     // if the authToken is not blank then append the token in the headers
     if(authToken){
       console.log(authToken);
       requestHeaders = requestHeaders.append('Authorization', `Bearer ${authToken}`);
       console.log(`Is Header Present ${requestHeaders.get("Authorization")}`);
     }
     // clone the requestHeaders in the original request object
     const authenticatedRequest = request.clone({headers:requestHeaders});
     // forwared the request out send it to the next interceptor if any or make an outgoing request
     return next.handle(authenticatedRequest);
   }
}
