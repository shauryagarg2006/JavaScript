// Objects, function and this
//When a function is invoked a new execution context is created dont confuse it with the function object; when the code inside the code property is executed then the context is created

//Variable Environment(Scope) , Outer Environment (Scope chaining) 
//A 'this' variable is created which will point to different things depending on how the function was invoked

console.log(this);//Window object points to the global object which in browser is the window object


function a() {
    console.log(this);
    this.newvariable = 'hello';
}

a();//Its still the window object


var b = function () {
    console.log(this);
}
b();//Its still the window object
console.log(newvariable);
console.log(window.newvariable);
console.log(this.newvariable);

// For code ABove---Whenever we create a function or function expression at this level its always will be window object

var c = {
    name : 'the c object',
    log: function(){
        this.name = 'updated c object',
        console.log(this);
    }
}

c.log();//this points to the object c is pointing to

//Bug in JS?

var dd = {
    name : 'the c object',
    log: function(){
        this.name = 'updated c object',
        console.log(this);
        var setname = function(newname){
            this.name = newname;//This will be created on the global object & this points to window
        }
        setname('updated again  the c object');
        console.log(this);
    }
}

dd.log();

//To avoid above this ambigutiy
console.log('_____________________________________');
var ee = {
    name : 'the c object',
    log: function(){
        var self = this;
        self.name = 'updated c object',
        console.log(self);
        var setname = function(newname){
            self.name = newname;//This will be created on the global object & this points to window
        }
        setname('updated again  the c object');
        console.log(self);
    }
}

ee.log();


