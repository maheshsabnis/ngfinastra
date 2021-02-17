import { FirstComponent } from './components/app.first.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// define the route table for component(s) for the LazyModule

const routes:Routes = [
  {path:'',component:FirstComponent}
]


@NgModule({
  declarations: [FirstComponent],
  // register the routes array as childRoot so that
  // the parent Angular appication will load the module
  // as lazy module
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LazyModule {}
