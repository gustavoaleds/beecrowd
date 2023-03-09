var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

var SOMA = (a + b);

console.log("SOMA = " + SOMA);
