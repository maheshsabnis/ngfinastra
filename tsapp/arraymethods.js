var names = new Array();
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Jason Bourn');
names.push('Iron Man');
names.push('Capt. America');
// standard iteration using for..loop
for (var i = 0; i < names.length; i++) {
    console.log("Name atr " + i + "ths position is = " + names[i]);
}
// ES 3 for..loop simplification using for..in loop
// the  'in' operators will read the array till its length
// and return value at each index
for (var i in names) {
    console.log("Name atr " + i + "ths position is = " + names[i]);
}
// ES 6, the iteration over array (iterators) using for..of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("Names = " + n);
}
