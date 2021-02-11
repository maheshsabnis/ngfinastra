let names:Array<string> = new Array<string>();
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Jason Bourn');
names.push('Iron Man');
names.push('Capt. America');
// standard iteration using for..loop
for(let i=0;i<names.length;i++){
    console.log(`Name atr ${i}ths position is = ${names[i]}`);
}
// ES 3 for..loop simplification using for..in loop
// the  'in' operators will read the array till its length
// and return value at each index
for(let i in names) {
    console.log(`Name atr ${i}ths position is = ${names[i]}`);
} 

// ES 6, the iteration over array (iterators) using for..of loop
// of is the iteration operator and its uses the symbol.iteratotr() behind the scene
// it yierld data at every index
for(let n of names){
    console.log(`Names = ${n}`);
}




