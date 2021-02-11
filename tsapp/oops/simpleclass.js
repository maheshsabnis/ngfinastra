var MyCalss = /** @class */ (function () {
    // constructor(a,b){
    //     this.x = a;
    //     this.y = b;
    // }
    function MyCalss(x, y) {
        this.x = x;
        this.y = y;
        // private x:number = 0;
        // private y:number = 0;
        this.res = 0;
    }
    MyCalss.prototype.add = function () {
        this.display();
        return this.x + this.y;
    };
    MyCalss.prototype.display = function () {
        console.log('The Private dfisplay');
    };
    MyCalss.prototype.mult = function () {
        this.display();
        return this.x * this.y;
    };
    return MyCalss;
}());
// define an instance of class
var obj = new MyCalss(10, 20);
console.log("Add = " + obj.add());
console.log("Mult = " + obj.mult());
