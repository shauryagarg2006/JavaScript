//function factory - leveraging the power of closures
function makeGreetings(language) {
   
    return function (firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname );
            console.log(arguments);
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}
//Each has its own execution context so different space in memory for language variable
var greetEnglish = makeGreetings('en');//1st Execution context
var greetSpanish = makeGreetings('es');//2nd Execution context


greetEnglish('shaurya','garg');
greetSpanish('horge','martinez');