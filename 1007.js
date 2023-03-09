var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
var d = parseInt(input[3]);

var DIFERENCA = ((a * b) - (c * d));

console.log("DIFERENCA = " + DIFERENCA);
