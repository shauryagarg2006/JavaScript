function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finidhed function');
}

function clickHandler(){
    console.log('click event');
}
//Events are executed only after the global execution is finished/ nothing is on execution stack
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');