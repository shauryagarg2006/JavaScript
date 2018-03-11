//Function returning a function
function greet(whatToSay) {

    return function (name) {
        console.log(whatToSay + ' ' + name);
    }
}

var greetFunc = greet('Hello');
//How does it remember the whatToSay variable - Closure


greet('Hi')('Tony');

greetFunc('Tony');


//Closure are a feature of JS language. JS engine will make sure that what ever function we are running has access to all that variables that it is supposed to have even thought the outer function has finished execution.


//Example
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) { // i is also called a free variable
        arr.push(
            function () {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
//All will print 3 -> All are referencing the variable i and go to the outer reference which in the end is 3
fs[0]();
fs[1]();
fs[2]();


function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) { // i is also called a free variable
        let j = i;//Each time of loop a new variable j is created. ES6 (let is scoped)
        arr.push(
            function () {
                console.log(j);
            }
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
//All will print 3 -> All are referencing the variable i and go to the outer reference which in the end is 3
fs2[0]();
fs2[1]();
fs2[2]();



function buildFunctions3() {
    var arr = [];
    for (var i = 0; i < 3; i++) { // i is also called a free variable
        let j = i;//Each time of loop a new variable j is created. ES6 (let is scoped)
        arr.push(
            (function (j) {
                return function () {
                    console.log(j)
                };
            }(i))
        )
    }
    return arr;
}

var fs3 = buildFunctions3();
//All will print 3 -> All are referencing the variable i and go to the outer reference which in the end is 3
fs3[0]();
fs3[1]();
fs3[2]();