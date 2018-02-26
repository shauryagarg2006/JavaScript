//Objects and functions are very much realted and almost the same
//Objects are name value pairs
//Objects is a collection of values which are -> property/primitive data type OR another object(also considered a property) OR it can also contain a function(called as method)

var person = new Object();
person["firstName"] = 'Tony';
person['lastName'] = 'Garg';

var firstNamePropery = 'firstName';
console.log(person);
console.log(person[firstNamePropery]);
console.log(person['firstName']);

//More Common Approach
console.log(person.firstName);

person.address = new Object();
person.address.street = '555 Main St.';
person.address.city = 'Palo Alto';
console.log(person);

