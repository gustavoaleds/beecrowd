var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var a = (parseFloat(input[0])) * 3.5;
var b = (parseFloat(input[1])) * 7.5;

var MEDIA = ((a + b) / 11);

console.log("MEDIA = " + MEDIA.toFixed(5));