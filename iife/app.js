//Immediately invoked function expression (IIFE)S

//function statement
function greet() {
    console.log('hello');
}
greet();

//using function expression
var greetfunc = function (name) {
    console.log('Hello ' + name);
};

greetfunc('Shaurya');


//IIFE - running it immediately after creating it
var greeting = function (name) {
    return 'Hello ' + name;
}('IFFE');

console.log(greeting);


//Valid JS expression
3;

var fname = 'shaurya';
//outer brackets to trick parser and tell it that it is a expression - IIFE
(function (name){
    console.log( 'Hello ' + name);
}(fname));