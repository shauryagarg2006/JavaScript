//Object oriented javascript and prototypal inheritance

//Classical v/s Prototypal inhertiance??

//inheritance -> one object gets acess to propeties and methods of another object

//Classical inheritance - the one in java -> the way its been done for a long time
//It is very verbose -> end with massive trees of objects -> so many keywords protected, private, interface

//Prototypal inheritance
//simple, easy, extensible -> not perfect

//Understanding the prototype 
// obj -> has properties and methods which can be accessed using for ex- obj.prop1
//JS engine also adds some properties to objects. All objects have a proto property. The proto property is the protoype
//obj.prop2 will first look in obj properties and if it does not find it it will look into prop object's properties. It looks like its on our main object.
//Its called prototype chain
//In scope chain we look for a variable where we have access to it
//proto can be though of as a special reference where JS looks for a property it is unable to find.(Goes through the prototype chain)

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

//Just for explantaion : DO NOT DO THIS EVER causes performance issues
john.__proto__ = person;
console.log(john.getFullName());//when the function 'getFullName' is invoked 'this' will refer to the object that invoked it

var jane = {
    firstname: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName());//Jane Default
console.log(jane.lastname);//Default





//Everything is an JS is an object or a primitive
//Everything object has a prototype exect the base object
var a = {};
var b = function () { };
var c = [];


//Reflection And Extend

//Reflection -> an object can look at itself listing and changing its properties and its method
//Useful pattern called extend

//Looping over all of the members of the john object
console.log('--------------------');
for (var prop in john) {//gets all the properties on the object and on the protoype
    console.log(prop + ' : ' + john[prop]);
}


console.log('--------------------');
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {//check meta data and see if it really belongs to john
        console.log(prop + ' : ' + john[prop]);
    }
}

var jenny = {
    address : '111 Main St',
    getFormalFullName: function(){
        return this.lastname + ' ' + this.firstname;
    }
};

var jim = {
    getFirstName: function (){
        return firstname;
    }
};

//Underscore.js jennyJim will have properties of both jenny and jim
//_.extend(jennyJim,jenny,jim);