var Statck = /** @class */ (function () {
    function Statck() {
        this.arr = new Array();
    }
    Statck.prototype.push = function (item) {
        this.arr.push(item);
    };
    Statck.prototype.pop = function () {
        return this.arr.pop();
    };
    Statck.prototype.print = function () {
        return this.arr;
    };
    return Statck;
}());
var numStack = new Statck();
numStack.push(10);
numStack.push(20);
numStack.push(30);
numStack.push(40);
console.log("Records in stack " + numStack.print());
console.log("Poped value " + numStack.pop());
console.log("Records in stack after pop" + numStack.print());
var numString = new Statck();
numString.push("A");
numString.push("B");
numString.push("C");
numString.push("D");
console.log("Records in stack " + numString.print());
console.log("Poped value " + numString.pop());
console.log("Records in stack after pop" + numString.print());
var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
    }
    return Employee;
}());
var stkEmp = new Statck();
stkEmp.push(new Employee(101, 'A'));
stkEmp.push(new Employee(102, 'B'));
stkEmp.push(new Employee(103, 'C'));
stkEmp.push(new Employee(104, 'D'));
stkEmp.push(new Employee(105, 'E'));
console.log("Records in stack " + JSON.stringify(stkEmp.print()));
console.log("Poped value " + JSON.stringify(stkEmp.pop()));
console.log("Records in stack after pop" + JSON.stringify(stkEmp.print()));
