import { AutoCompleteComponent } from './materialdemos/autocompleteapp/app.autocomplete.component';
import { ColorDirective } from './directives/attributedirective/app.color.diretive';
import { HttpInterceptComponent } from './components/httpinterceptedcalls/app.httpintercept.component';
import { SecurityInterceptorService } from './services/app.httpinterceptor.service';
import { MainComponent } from './components/routingapp/app.main.component';
import { EditProductComponent } from './components/routingapp/app.editproduct.component';
import { CreateProductComponent } from './components/routingapp/app.createproduct.component';
import { ProductListComponent } from './components/routingapp/app.productlist.component';
import { ElementConsumerComponent } from './components/elementconsumer/app.elementconsumer.component';
import { CommunicationService } from './services/app.communication.services';
// CUSTOM_ELEMENTS_SCHEMA: is a bridge between the DOM and Angular
// ecosystem for providing a instance of Custom Element to the Browser's DOM
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: USed for Basic Angular Forms and ngModel for two-way binding
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// HttpClientModule for Http Communication from Angular App
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from "./components/employeecomponent/app.employee.component";
import { DropDownComponent } from "./directives/componentdirective/app.dropdown.component";
import { EmployeeReactiveFormComponent } from "./components/reactiveforms/app.employeereactiveform.component";
import { UtilityService } from "./services/app.utility.service";
import { UtilityServiceComponent } from "./components/utilityservicecomponent/app.utilityservce.cmponent";
import { DeptSenderComponent } from "./components/servicecommunicationcomponents/app.deptsender.component";
import { EmpReceiverComponent } from "./components/servicecommunicationcomponents/app.empreceiver.component";
import { HttpServiceComponent } from "./components/httpservicecomponent/app.httpservice.component";


// impoer the createCustomElement()

import { createCustomElement } from "@angular/elements";

// importing the component that will act as an Element
import { TestElementComponent } from "./elements/app.test.element";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importing the AutoComplete Material
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';


import {MatTableModule} from '@angular/material/table';

// BrowserModule: The module responsible for rendering the Angular application in the browser
// We can have 'only-one' instance of BrowserModule per angular application

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,DropDownComponent,
    EmployeeReactiveFormComponent,HttpServiceComponent,
    DeptSenderComponent,EmpReceiverComponent,
    TestElementComponent, HttpInterceptComponent,
     ElementConsumerComponent,
     ProductListComponent, CreateProductComponent, EditProductComponent,
     MainComponent, ColorDirective,
     AutoCompleteComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, HttpClientModule,
    // importing the routing by
    // registerting Route Tabale on root of the application
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDatepickerModule, MatNativeDateModule,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // the NgModule specifies that TestElementComponent
  // will be executed directly on DOM as createCustomElement()
  // using @angular/elements package
  entryComponents:[TestElementComponent],
  // define the HTTP_INTERCEPTOR for a Angular Service
  // to intercept outgoing calls
  // useClass: The class used for interception
  // multi: intercept each outgoing call  from the service
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:SecurityInterceptorService, multi:true}
  ], // the angular service DI Registration
  bootstrap: [AutoCompleteComponent]
})
export class AppModule {
 // the AppModule instance in the Browser will inform to
 // the browser that the Angular Module is exporting
 // a custom element that has to be managed in
 //  the CustomElementRegistry in Borwser's DOM
 // use the 'Injector' from @angular/core for
 // injecting the custom element
 constructor(private injector: Injector){
   // convert the Angular Component as the Element
   const testElement = createCustomElement(TestElementComponent,
      {injector:this.injector});
    // define a custom HTML tag so that the element will be
    // used in DOM
     customElements.define('ng-test-element', testElement);
 }
}
