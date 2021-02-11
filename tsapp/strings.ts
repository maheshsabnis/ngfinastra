let fname:string = "Tejas";
let mname:string = "Mahesh";
let lname:string = "Sabnis";
console.log('String Methds and properties ' + fname.toUpperCase() + ' \n' + mname.toLowerCase() + ' ' + lname.length);
// ES 6 using Template String for String object management as interpolation

let fullName:string;
// the string object will be evalauted based on ${<EXPRESSION>}
// all expreassions are interpolated into 'Single Stroing' Object
fullName = `The Full Name is ${fname} 
            ${mname} ${lname}`.toUpperCase();
console.log(`Steing = ${fullName}`);
