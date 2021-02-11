var num1 = 100; // implicit to number
console.log('type of num1 = ' + typeof (num1) + ' value of num1 = ' + num1);
var num2;
num2 = 222; // explicit
console.log('type of num2 = ' + typeof (num2) + ' value of num2 = ' + num2);
var val; // runtime type inferance
val = 123;
console.log('type of val = ' + typeof (val) + ' value of val = ' + val);
val = "Mahesh";
console.log('type of val = ' + typeof (val) + ' value of val = ' + val);
val = new Date(2021, 1, 11);
console.log('type of val = ' + typeof (val) + ' value of val = ' + val);
val = {}; // JSON object
val.x = 20;
console.log('type of val = ' + typeof (val) + ' value of val = ' + val);
val = true; // boolean
console.log('type of val = ' + typeof (val) + ' value of val = ' + val);
// union type
var value; // type restrictions for string or number but one at a time
value = 9000; // number
console.log('type of value = ' + typeof (value) + ' value of value = ' + value);
value = 'TypeScript'; // string
console.log('type of value = ' + typeof (value) + ' value of value = ' + value);
