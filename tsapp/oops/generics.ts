class Statck<T>{
    arr:Array<T>;
    constructor(){
        this.arr = new Array<T>();
    }

   push(item:T):void {
       this.arr.push(item);
   }
   pop():T{
       return this.arr.pop();
   }

   print():Array<T>{
       return this.arr;
   }
}

let numStack:Statck<number> = new  Statck<number>();
numStack.push(10);
numStack.push(20);
numStack.push(30);
numStack.push(40);
console.log(`Records in stack ${numStack.print()}`);
console.log(`Poped value ${numStack.pop()}`);
console.log(`Records in stack after pop${numStack.print()}`);

let numString:Statck<string> = new  Statck<string>();
numString.push("A");
numString.push("B");
numString.push("C");
numString.push("D");
console.log(`Records in stack ${numString.print()}`);
console.log(`Poped value ${numString.pop()}`);
console.log(`Records in stack after pop${numString.print()}`);

class Employee{
    constructor(
        public EmpNo:number,
        public EmpName: string
    ){}
}

let stkEmp:Statck<Employee> = new Statck<Employee>();
stkEmp.push(new Employee(101, 'A'));
stkEmp.push(new Employee(102, 'B'));
stkEmp.push(new Employee(103, 'C'));
stkEmp.push(new Employee(104, 'D'));
stkEmp.push(new Employee(105, 'E'));
console.log(`Records in stack ${JSON.stringify(stkEmp.print())}`);
console.log(`Poped value ${JSON.stringify(stkEmp.pop())}`);
console.log(`Records in stack after pop${JSON.stringify(stkEmp.print())}`);

