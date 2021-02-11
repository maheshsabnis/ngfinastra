for (var i = 0; i < 5; i++) {
    console.log('i in loop ' + i);
}
function process(x) {
    if (x) {
        var y = 10;
        console.log(y);
    }
    console.log(y);
}
process(true);
process(false);
