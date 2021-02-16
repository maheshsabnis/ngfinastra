import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <h1>The Angular Single Page Application</h1>
    <table class="table table-bordered table-striped">
      <tbody>
         <tr>
            <td>
              <a [routerLink]="['']">List of Products</a>
            </td>
            <td>
              <a [routerLink]="['create']">Create a new Product</a>
            </td>
         </tr>
      </tbody>
    </table>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
