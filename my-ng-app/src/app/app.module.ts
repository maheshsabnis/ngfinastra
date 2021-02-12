import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: USed for Basic Angular Forms and ngModel for two-way binding
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from "./components/employeecomponent/app.employee.component";
import { DropDownComponent } from "./directives/componentdirective/app.dropdown.component";
// BrowserModule: The module responsible for rendering the Angular application in the browser
// We can have 'only-one' instance of BrowserModule per angular application

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,DropDownComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
