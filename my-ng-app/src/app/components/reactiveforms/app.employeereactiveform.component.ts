import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { Employee } from "../../models/employee.model";
import { EmpLogic } from "../../models/emplogic.model";
import { Departments, Designations } from "../../models/constants";
import { CustomValidator } from "./app.custom.validator";
@Component({
  selector: 'app-employeereactiveform-component',
  templateUrl: './app.employeereactiveform.view.html'
})
export class EmployeeReactiveFormComponent implements OnInit {
  emp: Employee;
  employees: Array<Employee>;
  private logic: EmpLogic;
  departments = Departments;
  designations = Designations;
  columnHeaders: Array<string>;
  frmEmp: FormGroup;
  constructor() {
    this.emp = new Employee();

    this.employees = new Array<Employee>();
    this.logic = new EmpLogic();
    this.columnHeaders = new Array<string>();
    // define the FormModel for Mapping with Employee object
    // the Key can be same as the property from model class in which the state will be stored
    // the 'key' wil be bound to UI elements using the 'formControlName' attribute
    this.frmEmp = new FormGroup({
        EmpNo: new FormControl(this.emp.EmpNo,
            Validators.compose([
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(6),
              Validators.pattern('[0-9]+'),  // positive integer
              CustomValidator.checkEven // custom validator
            ])),
        EmpName: new FormControl(this.emp.EmpName),
        DeptName: new FormControl(this.emp.DeptName),
        Designation: new FormControl(this.emp.Designation),
        Salary: new FormControl(this.emp.Salary)
    });
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
    this.emp = this.frmEmp.value;
    this.employees = this.logic.addEmployee(this.emp);
    console.log(JSON.stringify(this.employees));
  }
  clear():void {
    this.emp = new Employee();
    this.frmEmp.setValue(this.emp);
  }
  getSelectedEmp(e:Employee):void{
     // this.emp = Object.assign({},e);
     this.frmEmp.setValue(e);
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
