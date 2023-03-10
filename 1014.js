var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

var distancia = parseInt(input[0]);
var litros = parseFloat(input[1]);

var consumoMedio = ( distancia / litros)
console.log(consumoMedio.toFixed(3) + " km/l")