/*Building Objects one way isObject literal syntax
new, function constructors
It was called js to attract java developers - marketing gimmick
var john = new Person(); JS needed something like this to convince java developers
*/

//Function constructors and new keyword

//function constructor - a normal function used to construct object by placing new in front of it which changes this to a new blank object and returns it towards the end

function Person() {
    console.log(this);
    this.firstname = 'John';
    this.lastname = 'Doe';
}


var john = new Person(); //not just invoking Person() but it has a new keyword in front of it as well
//new is an operator -> immediately an empty object is created and then it invokes the function
//When the function is called it creates a new execution context and generated `this` variable, new changes what this points to and it makes it points to the newly created object
//new will return the object which was set as the this variable
//Only works if the above function does not return anything

console.log(john);


function Person2(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
}

var jane = new Person2('jane', 'dar');
console.log(jane);


//Setting the prototype
//When we use the function constructor it already sets the prototype
//Function is a special type of object so it has some properties like prototype, name, code etc.
//prototype is used by the new operator -> meaning when we are using function constructor
//prototype property is not __proto__
//it is the prototype of the objects that are created using this function

function Person3(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
}
Person3.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

var jen = new Person3('jen', 'dar');
console.log(jen); //new will set the prototype property is where the prototype chain gets pointed  
//jen.__proto__ will point to Person3.prototype

Person3.prototype.getFormalFullName = function () {
    return 'Ms. ' + this.firstname + ' ' + this.lastname;
}

console.log(jen.getFormalFullName());
//Usually members/variables are inside function constructor and methods are on prototype as otherwise each object will have its own copy of methods thus wasting memory space


//Start function name with a capital letter if its intended to be used as a function constructors - Some linters then can help in case we forgot the new keyword




//Builtin function constructors
var a = new Number(3);
console.log(a); //outputs an object not a primitive and Number will have a Number.protoype

var s = new String("John");
//String.prototype will have all the string related function which will become a.__proto__ 
//Above we are creating objects which contains the primitive value


//If we want to add feature to all strings in our JS code
String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
};

console.log("John".isLengthGreaterThan(2)); //John was converted to object automatically

Number.prototype.isPositive = function () {
    this > 0;
}
//Error - Js will not convert number to object
//console.log(3.isPositive());

console.log(new Number(3).isPositive());
//new Number(3)  is not a number its an object which boxes the primitive value