var g = G$('Shaurya', 'Garg');
console.log(g);
g.greet().greet(true).setLang('es').greet();

$('#login').click(function () {
    var loginGrtr = G$('john', 'Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})