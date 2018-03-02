//Parser reads our code and converts it by going character by character
//It can also modify our code


//Automatic semicolon insertion - related to syntax parser
// As semicolons are optional in JS - If it thinks you are not allowed to go to the next line without a semicolon it will then put it thinking its missing.
//It is always better to put out own semicolons

function getPerson() {
    return
    {
        name: 'Shaurya'
    };
}

console.log(getPerson());//It printed undefined and put a semicolon next to return;

function getPerson2() {
    return { //This is okay
        name: 'Shaurya'
    }
}

console.log(getPerson2());
