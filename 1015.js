var input = require('fs').readFileSync('stdin', 'utf8');

var linhas = input.split("\n");

var p1 = linhas.shift().split(" ");
var p2 = linhas.shift().split(" ");


var x1 = p1.shift();
var y1 = p1.shift();
var x2 = p2.shift();
var y2 = p2.shift();

var calculo = (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

console.log(Math.sqrt(calculo).toFixed(4))