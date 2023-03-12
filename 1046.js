var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var horaInicio = parseInt(line[0]);
var horaFim = parseInt(line[1]);
if (horaInicio > horaFim) { 
    console.log('O JOGO DUROU ' + (24 - (horaInicio - horaFim)) + ' HORA(S)');
} else if (horaFim > horaInicio) {
    console.log('O JOGO DUROU ' + (horaFim - horaInicio) + ' HORA(S)');
} else {
   console.log('O JOGO DUROU 24 HORA(S)');
}