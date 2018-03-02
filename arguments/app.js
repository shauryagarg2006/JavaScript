//arguments contains all the paramaters that were passed to the function we are calling
//It is created during creation of execution context

function greet(firstname, lastname, language) {
    console.log('f- ' + firstname);
    console.log('lt-' + lastname);
    console.log('lang-' + language);
    console.log(arguments);//arguments are array like not exactly array... its missing some of the features.
    //we can check arguments.length to know the number of parameters passes to the function
    // A new parameter is called spread -> ...
}

//hoisting takes care of the creation of the variables - so they were set to undefined
greet();


greet('John');

greet('John','Garg');//Left to right processing of parameters
//In next version we will be able to set default values so till then we can use language = language || 'en';

//SPREAD -> everything else is wrapped in array named other
function greet_spread(firstname, lastname, language, ...other) {
    console.log(other);  
}
greet_spread(1,2,3,4,5);