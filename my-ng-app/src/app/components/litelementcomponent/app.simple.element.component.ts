import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-element-component',
  templateUrl: './app.simple.element.view.html'
})
export class SimpleEleementComponent implements OnInit {
  myname:string;
  constructor() {
    this.myname = '';
  }

  ngOnInit() { }

  // the mehod that will be subscribing to the event
  receiveData(event:any):void {
    // the 'data' is the key that is used by 'detail' object of the
    // custom event
    console.log(`Data received from lit element ${event.detail.data}`);
  }
}
