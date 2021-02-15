import { Component, OnInit } from '@angular/core';
import { Depts } from "./../../models/app.data";
import { CommunicationService } from "./../../services/app.communication.services";
@Component({
  selector: 'app-deptsender-component',
  template: `
     <table class="table table-bordered table-striped table-danger">
       <thead>
         <tr>
           <th>DeptNo</th>
           <th>DeptName</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let d of depts"
          (click)="getSelectedDeptNo(d.DeptNo)">
           <td>{{d.DeptNo}}</td>
           <td>{{d.DeptName}}</td>
         </tr>
       </tbody>
     </table>
  `
})

export class DeptSenderComponent implements OnInit {
  depts = Depts;
  constructor(private serv:CommunicationService) {
    console.log(JSON.stringify(this.depts));
  }

  ngOnInit() { }
  getSelectedDeptNo(dno:number):void {
    // call method from Service and pass data to it
    this.serv.receiveDataToNotify(dno);
  }
}
