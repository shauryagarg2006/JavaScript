//Function overloading is not available in JS


function greet(firstname,lastname,language){
    language = language || 'english';
    if(language === 'english'){
        console.log('hello');
    }if(language === 'spanish'){
        console.log('hola');
    }

}

greet('John','Doe','english');
greet('John','Doe','spanish');

//One way to solve this - very simple one - makes method calls very easy
function greet_english(firstname,lastname){
    greet(firstname,lastname,'engligh');
}

function greet_spanish(firstname,lastname){
    greet(firstname,lastname,'spanish');
}



