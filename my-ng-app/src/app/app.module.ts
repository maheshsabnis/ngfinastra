import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: USed for Basic Angular Forms and ngModel for two-way binding
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from "./components/employeecomponent/app.employee.component";
import { DropDownComponent } from "./directives/componentdirective/app.dropdown.component";
import { EmployeeReactiveFormComponent } from "./components/reactiveforms/app.employeereactiveform.component";
import { UtilityService } from "./services/app.utility.service";
import { UtilityServiceComponent } from "./components/utilityservicecomponent/app.utilityservce.cmponent";
import { DeptSenderComponent } from "./components/servicecommunicationcomponents/app.deptsender.component";
import { EmpReceiverComponent } from "./components/servicecommunicationcomponents/app.empreceiver.component";
// BrowserModule: The module responsible for rendering the Angular application in the browser
// We can have 'only-one' instance of BrowserModule per angular application

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,DropDownComponent,
    EmployeeReactiveFormComponent,
    DeptSenderComponent,EmpReceiverComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [], // the angular service DI Registration
  bootstrap: [DeptSenderComponent,EmpReceiverComponent]
})
export class AppModule { }
