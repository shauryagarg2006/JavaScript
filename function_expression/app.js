//Function statements(just do work) and fuction expression(results in a value doesnt have to be saved in a variable)
var a;
if (a === 3) { //If is a statement and inside the () we have an expression

}
1 + 2; //An expression 


//This is a function statement - This gets hoiseted and put in memory - name property will be greet
function greet() {
    console.log('hi');
}

//Function expression - we are creating a function object on fly
// anonymousGreet will have the address of the function object but the function object will have no name. It is an anonymous function.
var anonymousGreet = function () {
    console.log('hi');
}

//we can invoke it anonymousGreet() 
//If we place the invocation before it is declared then it will throw an error and the variable gets the function object when the code is exectued in the execution phase.
anonymousGreet();


function log(a) {
    console.log(a);
}

log({ firstname: 'shaurya', nested: { name: 'shaurya' } });


function log2(a) {
    a();
}

//Passing function as an argument as it is also an object so we can do that
log2(function () {
    console.log('hi');
});