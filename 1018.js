// MÉTODO USANDO VARIÁVEIS

var input = require('fs').readFileSync('stdin', 'utf8');

var valorNotas = parseInt(input);

var quantidadeNotas100 = parseInt(valorNotas / 100);
var quantidadeNotas50 = parseInt((parseInt(valorNotas) % 100) / 50);
var quantidadeNotas20 = parseInt(((parseInt(valorNotas) % 100) % 50) / 20);
var quantidadeNotas10 = parseInt((((parseInt(valorNotas) % 100) % 50) % 20) / 10);
var quantidadeNotas5 = parseInt(((((parseInt(valorNotas) % 100) % 50) % 20) % 10) / 5);
var quantidadeNotas2 = parseInt((((((parseInt(valorNotas) % 100) % 50) % 20) % 10) % 5) / 2);
var quantidadeNotas1 = parseInt(((((((parseInt(valorNotas) % 100) % 50) % 20) % 10) % 5) % 2) / 1);


console.log(valorNotas);
console.log(quantidadeNotas100 + " nota(s) de R$ 100,00");
console.log(quantidadeNotas50 + " nota(s) de R$ 50,00");
console.log(quantidadeNotas20 + " nota(s) de R$ 20,00");
console.log(quantidadeNotas10 + " nota(s) de R$ 10,00");
console.log(quantidadeNotas5 + " nota(s) de R$ 5,00");
console.log(quantidadeNotas2 + " nota(s) de R$ 2,00");
console.log(quantidadeNotas1 + " nota(s) de R$ 1,00");
