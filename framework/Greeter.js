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

    //Internal to libray not exposed to outside world 
    //other functions in library will have access to it because of closures
    var supportedLanguage = ['en', 'es'];

    var greeting = {
        en: 'Hello',
        es: 'Hola'
    }

    var formalGreeting = {
        en: 'Greetings',
        es: 'Saludos'
    }

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    Greetr.prototype = {
        fullName: function () {
            return this.firstname + ' ' + this.lastname;
        },
        validate: function () {
            if (supportedLanguage.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },
        greeting: function () {
            return greeting[this.language] + ' ' + this.firstname + ' ' + this.lastname;
        },
        formalGreeting: function () {
            return formalGreeting[this.language] + ' ' + this.firstname + ' ' + this.lastname;
        },
        greet: function (formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            return this;
        },
        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ':' + this.lastname());
            }
            return this;
        },
        setLang: function (lang) {
            this.language = lang;
            this.validate();
            return this;
        }
    };

    //Function constructor
    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || 'John';
        self.lastname = lastname || 'Doe';
        self.language = language || 'en';
    }
    Greetr.init.prototype = Greetr.prototype;

    global.G$ = global.Greetr = Greetr;


}(window, jQuery));
