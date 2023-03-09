var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var NUMBER = parseInt(input[0]);
var HOURS =  parseInt(input[1]);
var SALARY = parseFloat(input[2]);

var CALCULO = (HOURS * SALARY);

console.log("NUMBER = " + NUMBER + "\n" + "SALARY = U$ " + CALCULO.toFixed(2));