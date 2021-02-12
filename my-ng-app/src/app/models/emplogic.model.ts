import { ThrowStmt } from "@angular/compiler";
import { Employee } from "./employee.model";
export class EmpLogic {
  employees: Array<Employee>;
  constructor(){
    this.employees = new Array<Employee>();
    // this.employees.push(new Employee(1,'Mahesh', 'IT', 'Manager',10000));
    // this.employees.push(new Employee(2,'Vikram', 'HRD', 'Staff',7000));
    // this.employees.push(new Employee(3,'Suprotim', 'ACCOUNTS', 'Manager',70000));
    // this.employees.push(new Employee(4,'Amit', 'SALES', 'Lead',9000));

    let emp = new Employee();
    emp.EmpNo = 1;
    emp.EmpName = "Mahesh";
    emp.DeptName ="IT";
    emp.Designation = "Manager";
    emp.Salary=1222;
    this.employees.push(emp);
  }

  getEmployees(): Array<Employee> {
    return this.employees;
  }
  addEmployee(emp:Employee): Array<Employee> {
    this.employees.push(emp);
    return this.employees;
  }
}
