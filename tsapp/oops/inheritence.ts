class Base {
    showBaseMessage():void{
        console.log('Base Show Message');
    }
}

class Derive extends Base {
    showDeriveMessage():void {
        console.log('Derive Show Message');
    }
}

// derive class have access to all public methods of base
// instance of derive class
let obj:Derive = new Derive();
obj.showBaseMessage();
obj.showDeriveMessage();
// instace of base class
let o1:Base = new Base();
o1.showBaseMessage();
// o2 is of the type of Base so only have access of BAse class methods
let o2:Base = new Derive();
o2.showBaseMessage();
console.log(`Type of o2 = ${typeof(o2)}`);
