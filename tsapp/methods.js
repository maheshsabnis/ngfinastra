var names = new Array();
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Jason Bourn');
names.push('Iron Man');
names.push('Capt. America');
// the forEach() method
// the method with explicit callback
names.forEach(printName);
// the function
function printName(name, index) {
    console.log("Name at " + index + " = " + name);
}
// use the implict callback
console.log();
names.forEach(function (name, index) {
    console.log("Name at " + index + " = " + name);
});
console.log();
// using arraow operatos
names.forEach(function (name, index) {
    console.log("Name at " + index + " = " + name);
});
// printing length gerater than 10
console.log('Strings greated that 10');
names.forEach(function (name, index) {
    if (name.length > 10) {
        console.log("Name at " + index + " = " + name);
    }
});
// using the 'filter()' method. Iterator over an array and 
// Returns a new array based on the Expression passed to it 
var newarray = names.filter(function (name, index) {
    return name.length > 10;
});
console.log("String greater than 10 = " + newarray);
// using map
console.log('using map');
names.map(function (name, index) {
    console.log("Name at " + index + " = " + name);
});
