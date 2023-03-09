var input = require('fs').readFileSync('stdin', 'utf8');

var linhas = input.split("\n");

var linhaItem1 = linhas.shift().split(" ");
var linhaItem2 = linhas.shift().split(" ");

var idItem1 = linhaItem1.shift();
var qntItem1 = linhaItem1.shift();
var valorItem1 = linhaItem1.shift();
var calculoTotalItem1 = qntItem1 * valorItem1;

var idItem2 = linhaItem2.shift();
var qntItem2 = linhaItem2.shift();
var valorItem2 = linhaItem2.shift();
var calculoTotalItem2 = qntItem2 * valorItem2;
var totalCompra = calculoTotalItem1 + calculoTotalItem2;

console.log("VALOR A PAGAR: R$ " + totalCompra.toFixed(2));