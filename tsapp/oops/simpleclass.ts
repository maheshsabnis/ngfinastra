class MyCalss {
    // private x:number = 0;
    // private y:number = 0;
    private res:number = 0;
    // constructor(a,b){
    //     this.x = a;
    //     this.y = b;
    // }

    constructor(private x:number, public y:number){}

    add():number {
        this.display();
        return this.x + this.y;
    }
    private display():void {
        console.log('The Private dfisplay');
    } 
    mult():number {
        this.display();
        return this.x * this.y;
    }
}

// define an instance of class
let obj = new MyCalss(10,20);
 
console.log(`Add = ${obj.add()}`);
console.log(`Mult = ${obj.mult()}`);
