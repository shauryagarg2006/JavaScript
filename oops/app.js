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