import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  templateUrl: './app.test.element.view.html'
})
export class TestElementComponent implements OnInit {
  message:string;
  private _Source:Array<string>;
  @Output()
  selectionChanged:EventEmitter<any>;
  constructor() {
    this.message = 'The Test Element';
    this._Source = new Array<any>();
    this.selectionChanged = new EventEmitter<any>();
  }

  ngOnInit(): void { }

  @Input()
  set Source(value:Array<any>) {
    this._Source = value;
  }
  get Source():Array<any> {
    return this._Source;
  }

  onSelectionCanged(event:any):void {
    this.selectionChanged.emit(event.target.value);
  }
}
