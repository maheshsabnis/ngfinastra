import { Injectable,EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {
  notified: EventEmitter<number>;
  constructor() {
    this.notified = new EventEmitter<number>();
  }

  receiveDataToNotify(id:number):void {
    // emit an event with data
    this.notified.emit(id);
  }

}
