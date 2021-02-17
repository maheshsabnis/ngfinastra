import { EmployeeComponent } from './components/employeecomponent/app.employee.component';
import { EditProductComponent } from './components/routingapp/app.editproduct.component';
import { CreateProductComponent } from './components/routingapp/app.createproduct.component';
import { ProductListComponent } from './components/routingapp/app.productlist.component';
import { NgModule } from '@angular/core';
// object model for routing
import { RouterModule, Routes } from '@angular/router';

// define route table
const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'create', component: CreateProductComponent,
   children:[
     {path: 'employee', component:EmployeeComponent}
   ]},
  // parameterized route
  {path:'edit/:id', component: EditProductComponent},
  // loadChildren: this will perform the module lookup
  // in dynamically loaded js file in the browser
  {path: 'lazy', loadChildren:()=> import('./../lib/app.lazy.module')
       .then(module=>module.LazyModule)},
  {path: '**', redirectTo: ''} // redirect to root
];

@NgModule({
  // registering the route table on root of the applicaiton
  // using forRooe() method
  // where this module is imported i.e. AppModule
  imports: [RouterModule.forRoot(routes)],
  // exporting of RouterModule will register the
  // RouterModule in the Angular Module where the AppRoutingModule
 // is imported i.e. AppModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
