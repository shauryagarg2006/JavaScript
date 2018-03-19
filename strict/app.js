//Strict mode
"use strict" //at the top of the file or top of a function

var person;
/*
persom = {};
console.log(persom); //prints {} to avoid this we can use ''strict mode
*/

persom = {};
//console.log(persom); will throw error because of strict mode


function logNewPerson(){
    "use strict";

    var person2 = {};
    persom2 ={};
    console.log(persom2);
}

logNewPerson();