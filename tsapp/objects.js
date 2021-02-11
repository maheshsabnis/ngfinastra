// obj1 points to the location identitied as 'x' having value as 10
var obj1 = { x: 10 }; // singleton object definition as JSON
console.log("obj1.x = " + obj1.x);
// assigning the obj1 to obj2
// obj2 also points to same location identitied as 'x' having value as 10
var obj2 = obj1;
console.log("After assigning obj1 to obj2 obj1.x = " + obj1.x + " and obj2.x = " + obj2.x);
obj2.x = 20;
// modification of x by obj2 will also modify obj1
console.log("After modifying obj2.x  t 20 obj1.x = " + obj1.x + " and obj2.x = " + obj2.x);
// using Object.assing() to create a shallow copy of objects 
// with same schema and vallues but diffent locations
// create a balnk location and fill the blank location with
// schema and values of obj1
var obj3 = Object.assign({}, obj1);
console.log("After assigning obj1 to obj3 obj1.x = " + obj1.x + " and obj3.x = " + obj3.x);
obj3.x = 500;
// modification of x by obj3 
console.log("After modifying obj3.x  to 500 obj1.x = " + obj1.x + " and obj2.x = " + obj3.x);
