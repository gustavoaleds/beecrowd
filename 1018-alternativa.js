// MÉTODO USANDO LET

var input = require('fs').readFileSync('stdin', 'utf8');

let valorNotas = parseInt(input);

console.log(valor);

let quantidadeNotas = parseInt(valorNotas / 100);
console.log(`${quantidadeNotas} nota(s) de R$ ${100},00`);
valorNotas = valorNotas % 100;

quantidadeNotas = parseInt(valorNotas / 50);
console.log(`${quantidadeNotas} nota(s) de R$ ${50},00`);
valorNotas = valor % 50;

quantidadeNotas = parseInt(valorNotas / 20);
console.log(`${quantidadeNotas} nota(s) de R$ ${20},00`);
valorNotas = valor % 20;

quantidadeNotas = parseInt(valorNotas / 10);
console.log(`${quantidadeNotas} nota(s) de R$ ${10},00`);
valorNotas = valor % 10;

quantidadeNotas = parseInt(valorNotas / 5);
console.log(`${quantidadeNotas} nota(s) de R$ ${5},00`);
valorNotas = valor % 5;

quantidadeNotas = parseInt(valorNotas / 2);
console.log(`${quantidadeNotas} nota(s) de R$ ${2},00`);
valorNotas = valor % 2;

quantidadeNotas = parseInt(valorNotas / 1);
console.log(`${quantidadeNotas} nota(s) de R$ ${1},00`);
valorNotas = valor % 1;


