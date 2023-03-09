var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var NOME = input[0];
var SALARIO =  parseFloat(input[1]);
var VENDAS = parseFloat(input[2]);

var TOTAL = SALARIO + ((15 * VENDAS) / 100);

console.log("TOTAL = R$ " + TOTAL.toFixed(2));