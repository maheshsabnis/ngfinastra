var myarr = [1, 2, 3, 4, 5];
// using forEach()
myarr.forEach(function (n, idx) {
    // modify each element in array first and then return it
    return myarr[idx] = n * 2;
});
console.log("With forEach " + myarr);
var res = myarr.map(function (n, idx) {
    return n * 2;
});
console.log("With map " + res);
