//Functional programming

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);

//Functional programming - abstracted out the looping - classic example of functional programming
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

var result = mapForEach(arr1, function (input) {
    return input * 2;
});

console.log(result);


var resultBol = mapForEach(arr1, function (input) {
    return input > 2;
});

console.log(resultBol);


var checkPastLimit = function (limiter, item) {
    return item > limiter;
}.bind(this, 1); //limit is set to  , the probem is that the function takes two input parameters so to solve that problem we kind of preset one of the parameter using bind() call and collected its copy

var resultLimiter = mapForEach(arr1, checkPastLimit);
console.log(resultLimiter);


var resultLimiter2 = mapForEach(arr1, function (limiter, item) {
    return item > limiter;
}.bind(this, 2));
console.log(resultLimiter2);


//Simplified Version
var checkPastLimit3 = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var resultLimiter3 = mapForEach(arr1, checkPastLimit3(3));
console.log(resultLimiter3);

//Try not to mutate data with functions in functional programming

//Underscore.js very common & useful library.