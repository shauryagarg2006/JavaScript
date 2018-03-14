//we know that 'this' variable can point to global object in some cases and in some cases to the object that contains the function

//We can control what 'this' is in JS
//function has name property and code property which is invocable using '()'
//all function have access to call() apply() and bind() methods

var person = {
    firstname : 'John',
    lastname: 'Doe',
    getFullName : function (){
        var fullname = this.firstname + ' '  + this.lastname;
        return fullname;
    }
}

var logName = function (lang1, lang2){
    console.log('-----------------');
    console.log('Arguments '+ lang1 + ' ' + lang2);
    console.log('Logged: ' + this.getFullName());
};
//Will give error as this.getFullName is undefined
//logName();

var logPersonName = logName.bind(person); //return a new funtion which is copy of logname in which this is set to person 
logPersonName('en','es');
logName.call(person,'en','es');

/*
We could have done this also and just used logName
var logName = function (lang1, lang2){
    console.log('Logged: ' + this.getFullName());
}.bind(person);

logname() is equivalent to logname.call()
logname.call(person,'en','es') call does not create a copy it just executes the function and let us set the this object as well

logname.apply(person,['en','es']); same as call but wants array of arguments




*/


(function (lang1, lang2){
    console.log('-----------------');
    console.log('Arguments '+ lang1 + ' ' + lang2);
    console.log('Logged: ' + this.getFullName());
}).apply(person,['en','es']);



//Function borrowing

var person2 = {
    firstname: 'John',
    lastname: 'Does'
}
//We borrowed th function but the name of the properties should be same
console.log(person.getFullName.apply(person2));


//function currying -> has to do with bind()
function multiply(a, b){
    return a*b;
}


var multiplyByTwo = multiply.bind(this,2); /*giving a parameter sets the permanent values in the function when the copy is made so in this case 'a' will always be two
like 

function multiply(b){
    return 2*b;
}
*/

console.log(multiplyByTwo(4));//4 will end us as second parameter which is 'b'

