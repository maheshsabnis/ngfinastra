import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
    <h3>The First Component from Lazy Module</h3>
    <input type="button" value="click me"/>
  `
})
export class FirstComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  display():void {
    alert('The First Component');
  }
}
