import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: USed for Basic Angular Forms and ngModel for two-way binding
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from "./components/employeecomponent/app.employee.component";
import { DropDownComponent } from "./directives/componentdirective/app.dropdown.component";
import { EmployeeReactiveFormComponent } from "./components/reactiveforms/app.employeereactiveform.component";

// BrowserModule: The module responsible for rendering the Angular application in the browser
// We can have 'only-one' instance of BrowserModule per angular application

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,DropDownComponent,
    EmployeeReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeReactiveFormComponent]
})
export class AppModule { }
