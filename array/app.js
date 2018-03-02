var arr = new Array();
//OR
var arr = [1, 2, 3]
arr[0]; //for the first one
//Usually lang have array of numbers or array of strings but in JS an array each element can be of different type
var arr = [
    1,
    false,
    {
        name: 'shaurya'
    },
    function (name) {
        console.log(name);
    },
    'hello'
];

console.log(arr);



var b = function greet(name) {
    console.log("hello");
};

console.log(b);
b();