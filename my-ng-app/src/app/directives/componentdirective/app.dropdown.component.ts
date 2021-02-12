import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './app.dropdown.component.view.html'
})
export class DropDownComponent implements OnInit {
  private modelProperty:any;
  private dataSource:Array<any>;
  @Output() notifyBack:EventEmitter<any>;
  constructor() {
    this.dataSource = new Array<any>();
    this.notifyBack = new  EventEmitter<any>();
   }

  ngOnInit(): void { }

  @Input()
  set DataSoure(value:Array<any>) {
    this.dataSource = value;
  }
  get DataSource():Array<any>{
    return this.dataSource;
  }
  @Input()
  set ModelProperty(value:any){
    this.modelProperty = value;
  }
  get ModelProperty():any{
    return this.modelProperty;
  }
  onNotifyBack(event:any):void {
    console.log(`Value Emitted by Child ${event.target.value}`);
    // the value will be emitted and parent will listened to it
    this.notifyBack.emit(event.target.value);
  }
}
