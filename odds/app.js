//Initialzation
var people = [
    {   //John Object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            'first address',
            'second addresss'
        ]
    },
    {
        //Jane Object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            'first address',
            'second addresss'
        ]
    }
]


//Figuring out type of something using typeof and instanceof
//typeof tells what type of thing it is
var a = 3;
console.log(typeof a);

var b = 'string type';
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);

console.log(Object.prototype.toString.call(d));//[object Array]


function Person(name){
    this.name = name;
}

var e = new Person('Jane');

console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); //undefined
console.log(typeof null); //weird prints object -> too late to fix in JS


var z = function(){};
console.log(typeof z);//function