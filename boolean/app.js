var a;
//goes out to internet and finds the value
//This is evaluate to false if undefined, empty string or null but 0 will also evaluate to false
if(a){
    console.log("Something is there");
}else{
    console.log('It is Empty');
}


function greet(name){
    console.log('Hello '+name);
}

function better_greet(name){
    name = name || '<Your Name Here>';
    console.log('Hello '+name);
}

//Javascript doesnt care if we dont supply the required parameters.
greet('Tony');
greet();//coercion will occur and convert undefined to a string
better_greet();