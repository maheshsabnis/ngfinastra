import { Component, OnInit } from '@angular/core';

// import the service class
import { UtilityService } from "./../../services/app.utility.service";

@Component({
  selector: 'app-utilityservice-component',
  template: `
     <h2>The Angular Service Demo</h2>
     <div>
        <strong>
           Length of {{str}} = {{length}}
        </strong>
        <hr/>
        <strong>
           Lower case {{str}} = {{lcase}}
        </strong>
        <hr/>
        <strong>
           Upper case {{str}} = {{ucase}}
        </strong>
     </div>
  `
})

export class UtilityServiceComponent implements OnInit {
  str: string;
  length: number;
  ucase:string;
  lcase:string;
  // inject the service as ctor injection
  // make sire that the sevice instance must be resolved
  // either in providers:[] of NgModule or
  // Injectable({provideedIn:'root'})
  constructor(private serv: UtilityService) {
    this.str = "The Simple Utility Service in Angular";
    this.length = 0;
    this.lcase = '';
    this.ucase = '';
  }

  ngOnInit() {
    this.length = this.serv.getLength(this.str);
    this.lcase = this.serv.changeCase(this.str, "L");
    this.ucase = this.serv.changeCase(this.str, "U");
  }
}
