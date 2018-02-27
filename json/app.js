//JSON - JavaScript Object Notation
//Inspired by js object literal notation

var object_literal = {
    firstname: 'Mary',
    lastname: 'Jane',
    iscoder: true
}

console.log(object_literal);

//Json is just a string of data which looks very similar to object literal notation
// in json properties are wrapped in "" quotes which is also a valid syntax for object literal so we can say json is a subsset of object literal . Json has stricter rules. 
//Json is not a part of JS but since its so popular it not has many functions inbuilt to support json

console.log(JSON.stringify(object_literal));

var parsed_json = JSON.parse('{"firstname":"shaurya","lastname":"garg"}');
console.log(parsed_json);