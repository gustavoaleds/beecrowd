var input = require('fs').readFileSync('stdin', 'utf8');

var distancia = input;
var tempo = 2;

var calculo = parseInt(distancia) * tempo;

console.log(calculo + " minutos");