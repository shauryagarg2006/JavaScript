//For primitive types its pass by value
//a  is primitive type it will contain the memory location of the value
//b = a ; b will point to another location and the value will be copied to the new location
// This is known as pass by value


var a = 3;
var b;
b = a;
console.log(a, b);
a = 4;
//b doesnt change
console.log(a, b);

//Objects are passed by reference
// a is an object it will point to memory location of that object
// b= a or pass a to a function then b will not get a new location but it will also point to the same address


var c = { greeting: 'hi' };
var d;
d = c;
console.log(d, c);
d.greeting = 'hello';
//Both will change
console.log(d, c);


function changeGreeting(input) {
    input.greeting = 'hola';
}

//Both will change
changeGreeting(d);
console.log(d, c);


// Only d will change , c will still point to the object as for d = operator sets up new memory space (new address)
d = 5;
console.log(d, c);


