// implict array of 'any' data type
let arr = [10,20,30, 'A', 'B', 'C', true, false, {}]; 
// explict
let arrN:Array<number> = new Array<number>();
arrN.push(10); 
arrN.push(20); 
arrN.push(30); 
arrN.push(40); 
console.log('Sort Array ' + arrN.sort());
console.log('Reverse Array ' + arrN.reverse());
let arrS:Array<string> =  new Array<string>();
arrS.push("Mahesh");
arrS.push("Tejas");
arrS.push("Ramesh");
arrS.push("Ram");
arrS.push("Sabnis");
console.log('Sort Array ' + arrS.sort());
console.log('Reverse Array ' + arrS.reverse());


