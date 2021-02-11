var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
    }
    return Employee;
}());
var EmployeeLogic = /** @class */ (function () {
    function EmployeeLogic() {
        this.emps = new Array();
        this.emps.push(new Employee(1, "A"));
        this.emps.push(new Employee(2, "B"));
    }
    EmployeeLogic.prototype.listRecords = function () {
        return this.emps;
    };
    EmployeeLogic.prototype.addRecord = function (record) {
        this.emps.push(record);
    };
    EmployeeLogic.prototype.findRecord = function (id) {
        var res = this.emps.filter(function (e, i) {
            return e.EmpNo === id;
        })[0];
        console.log(JSON.stringify(res));
        return res;
    };
    return EmployeeLogic;
}());
var obj = new EmployeeLogic();
console.log("list of employees " + JSON.stringify(obj.listRecords()));
obj.addRecord(new Employee(3, "C"));
console.log("list of employees " + JSON.stringify(obj.listRecords()));
console.log("Search record " + JSON.stringify(obj.findRecord(1)));
