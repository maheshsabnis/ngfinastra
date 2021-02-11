var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.showBaseMessage = function () {
        console.log('Base Show Message');
    };
    return Base;
}());
var Derive = /** @class */ (function (_super) {
    __extends(Derive, _super);
    function Derive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derive.prototype.showDeriveMessage = function () {
        console.log('Derive Show Message');
    };
    return Derive;
}(Base));
// derive class have access to all public methods of base
// instance of derive class
var obj = new Derive();
obj.showBaseMessage();
obj.showDeriveMessage();
// instace of base class
var o1 = new Base();
o1.showBaseMessage();
// o2 is of the type of Base so only have access of BAse class methods
var o2 = new Derive();
o2.showBaseMessage();
console.log("Type of o2 = " + typeof (o2));
