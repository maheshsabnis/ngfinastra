import { Component, OnInit } from '@angular/core';
import { Employee } from "./../../models/employee.model";
import { EmpLogic } from "./../../models/emplogic.model";
import { Departments, Designations } from "./../../models/constants";
@Component({
  selector: 'app-employee-component',
  templateUrl: './app.employee.view.html'
})
export class EmployeeComponent implements OnInit {
  emp: Employee;
  employees: Array<Employee>;
  private logic: EmpLogic;
  departments = Departments;
  designations = Designations;
  columnHeaders: Array<string>;
  color:string;
  constructor() {
    this.emp = new Employee();
    this.employees = new Array<Employee>();
    this.logic = new EmpLogic();
    this.columnHeaders = new Array<string>();
    this.color ='';
   }

  ngOnInit(): void {
   // debugger;
    this.employees = this.logic.getEmployees();
    console.log(JSON.stringify(this.employees));
    // read all keys of the 0th record of the employees array
    this.columnHeaders  =Object.keys(this.emp);
  }

  save():void {
  //  debugger;
    this.employees = this.logic.addEmployee(this.emp);
    console.log(JSON.stringify(this.employees));
  }
  clear():void {
    this.emp = new Employee();
  }
  getSelectedEmp(e:Employee):void{
    this.emp = Object.assign({},e);
  }
  receiveDeptName(evt:any):void {
    console.log(`Receibed Value fo DeptName ${evt}`);
     this.emp.DeptName = evt;
  }
  receiveDesignation(evt:any):void {
    console.log(`Receibed Value fo Designation ${evt}`);
    this.emp.Designation = evt;
 }
}
