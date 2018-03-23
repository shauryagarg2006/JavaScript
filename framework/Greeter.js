/*Our own mini framework
Name -> Greeter.js
what is it for?
To give greetings!

- When given a firstname and lastname it will genereate formal and informal greeting in the given language
- Support english and spanish
- Reusable 
- Easy to type 'G$()' structure
- Support jQuery ~ pass greeter a html element and it will fill it with the required text
*/
(function (global, $) {
    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    Greetr.prototype = {};

    //Function constructor
    Greetr.init = function (firstname, lastname, language) {
        this.firstname = firstname || 'John';
        this.lastname = lastname || 'Doe';
        this.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;
    global.G$ = global.Greetr = Greetr;
    

}(window, jQuery));
