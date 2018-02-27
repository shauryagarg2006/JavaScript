var person = {};//short hand notation -> JS engine looks at {} and interprets as object creation
console.log(person);

var another_person = {
    firstname: 'Tony',
    lastname: 'Garg',
    address: {
        street: 'Main St.',
        city: 'Delhi'
    
    }
};

console.log(another_person);

//We can create object on the fly as well
function greet(person){
    console.log('Hi ' + another_person.lastname);
}

greet('Tony');
greet({firstname:'Tony',lastname:'Chags'});