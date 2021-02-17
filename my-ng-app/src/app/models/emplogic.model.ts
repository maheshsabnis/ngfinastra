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
    let emp1 = new Employee();
    emp1.EmpNo = 1;
    emp1.EmpName = "Mahesh";
    emp1.DeptName ="IT";
    emp1.Designation = "Manager";
    emp1.Salary=1222;
    let emp2 = new Employee();
    emp2.EmpNo = 1;
    emp2.EmpName = "Mahesh";
    emp2.DeptName ="IT";
    emp2.Designation = "Manager";
    emp2.Salary=1222;
    this.employees.push(emp);
    this.employees.push(emp1);
    this.employees.push(emp2);
  }

  getEmployees(): Array<Employee> {
    console.log(JSON.stringify(this.employees));
    return this.employees;
  }
  addEmployee(emp:Employee): Array<Employee> {
    this.employees.push(emp);
    return this.employees;
  }
}
