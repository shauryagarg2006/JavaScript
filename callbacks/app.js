//callbacks
function sayHiLater() {
    var greeting = 'Hi';
    //Drops an event after 3000 seconds
    setTimeout(function () {
        console.log(greeting);//access to greeting because of closure
    }, 3000);
}

sayHiLater();

//callback -> a function we give to another function to be called when the other function is finished
function tellMeWhenDone(callback) {
    var a = 1000;
    var name = 'shaurya';

    callback();
}

tellMeWhenDone(function () {
    console.log("Yipeeeee!!");
});

tellMeWhenDone(function () {
    console.log("All Done!!");
});