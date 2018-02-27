var greet = 'hola';
var greet = 'hello';

console.log(greet);//the above variables can be in different files which are included and a collision will occur

//To avoid collision we can fake name space using objects
var english = {};
var spanish = {};
//english.greetings.greet = 'Hello' will give an error as first english.greetings will be resolved which will be undefined 
//english.greeting = {}; then english.greetings.greet = 'hello'; will work
english.greet = 'hello';
spanish.greet = 'hola';

/* A better way to do 
var english = {
    greetings: {
        basic: 'hello'
    }
}
*/

