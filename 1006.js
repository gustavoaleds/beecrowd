var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var a = parseFloat(input[0]) * 2;
var b = parseFloat(input[1]) * 3;
var c = parseFloat(input[2]) * 5;

var MEDIA = ((a + b + c) / 10);

console.log("MEDIA = " + MEDIA.toFixed(1));