var input = require('fs').readFileSync('stdin', 'utf8');

var linhas = input.split("\n");

var tempoViagem = linhas[0];
var mediaVelocidade = linhas[1];
var distanciaPercorrida = parseInt(tempoViagem) * parseInt(mediaVelocidade);

console.log((distanciaPercorrida / 12).toFixed(3));
