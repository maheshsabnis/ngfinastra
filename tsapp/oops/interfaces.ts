interface IRecords {
     listRecords():Array<object>;
     addRecord(record:object):void;
     findRecord(id:number):object;   
}

class Employee{
    constructor(
        public EmpNo:number,
        public EmpName: string
    ){}
}

class EmployeeLogic implements IRecords {
     emps:Array<Employee>;
     constructor(){
         this.emps = new Array<Employee>();
         this.emps.push(new Employee(1,"A"));
         this.emps.push(new Employee(2,"B"));
     }
    listRecords():Array<object>{
        return this.emps;
    }
    addRecord(record:Employee): void {
        this.emps.push(record);
    }
    findRecord(id:number):Employee {
       let res =  this.emps.filter((e,i)=>{
            return e.EmpNo === id
        })[0];

        console.log(JSON.stringify(res));
        return res;
    }
}

let obj:IRecords = new EmployeeLogic();
console.log(`list of employees ${JSON.stringify(obj.listRecords())}`);
obj.addRecord(new Employee(3, "C"));
console.log(`list of employees ${JSON.stringify(obj.listRecords())}`);
console.log(`Search record ${JSON.stringify(obj.findRecord(1))}`);