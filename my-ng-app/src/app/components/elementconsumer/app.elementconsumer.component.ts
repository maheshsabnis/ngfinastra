import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementconsumer-component',
  templateUrl:'./app.elementconsumer.component.html'
})

export class ElementConsumerComponent implements OnInit {
  names:Array<string>;
  value:string;
  constructor() {
    this.names = new Array<string>();
    this.names.push("Tejas");
    this.names.push("Mahesh");
    this.names.push("Ramesh");
    this.names.push("Ram");
    this.value = "";
  }

  ngOnInit() { }

  getSelectedValue(event:any):void {
    // event is the bubbled up action from Custom HTML Element
    // created using Angular Element
    // Use event.detail property of CustomElementRegistry from
    // Browser DOM
    this.value = event.detail;
  }
}
