import { Component, OnInit } from '@angular/core';
import { Emps } from "./../../models/app.data";
import { CommunicationService } from "./../../services/app.communication.services";
@Component({
  selector: 'app-empreceiver-component',
  template: `
     <table class="table table-bordered table-striped table-dark">
       <thead>
         <tr>
         <th>EmpNo</th>
         <th>EmpName</th>
           <th>DeptNo</th>

         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let e of filterEmps">
          <td>{{e.EmpNo}}</td>
          <td>{{e.EmpName}}</td>
          <td>{{e.DeptNo}}</td>
         </tr>
       </tbody>
     </table>
  `
})

export class EmpReceiverComponent implements OnInit {
 emps = Emps;
 deptno:number;
 private _filterEmps:Array<any>;
  constructor(private serv:CommunicationService) {
    this.deptno = 0;
    this._filterEmps = new Array<any>();
  }

  // subscribe to the DeptNo received from the service
  // one time subscription
  ngOnInit() {
    this.serv.notified.subscribe((dno)=>{
      console.log(`Value Received from Service ${dno}`);
      this.deptno = dno;
    });
  }

  // create a read-only property that will  be called by component
  // when the deptno changes
  get filterEmps(): Array<any> {
    this._filterEmps = new Array<any>();
    if(this.deptno > 0){
      this._filterEmps = this.emps.filter((e,i)=>{
          return e.DeptNo === this.deptno;
      });
    } else {
      this._filterEmps = this.emps;
    }
    return this._filterEmps;
  }

}
