var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

let valor = parseFloat(lines.shift());

const cemReais = Math.trunc(valor / 100);
valor = (valor % 100).toFixed(2);

const cinquentaReais = Math.trunc(valor / 50);
valor = (valor % 50).toFixed(2);

const vinteReais = Math.trunc(valor / 20);
valor = (valor % 20).toFixed(2);

const dezReais = Math.trunc(valor / 10);
valor = (valor % 10).toFixed(2);

const cincoReais = Math.trunc(valor / 5);
valor = (valor % 5).toFixed(2);

const doisReais = Math.trunc(valor / 2);
valor = (valor % 2).toFixed(2);

const umReal = Math.trunc(valor / 1);
valor = (valor % 1).toFixed(2);

const cinquentaCentavos = Math.trunc(valor / 0.5);
valor = (valor % 0.5).toFixed(2);

const vinteCincoCentavos = Math.trunc(valor / 0.25);
valor = (valor % 0.25).toFixed(2);

const dezCentavos = Math.trunc(valor / 0.10);
valor = (valor % 0.1).toFixed(2);

const cincoCentavos = Math.trunc(valor / 0.05);
valor = (valor % 0.05).toFixed(2);

const umCentavo = Math.trunc(valor / 0.01);
valor = (valor % 0.01).toFixed(2);

console.log(`NOTAS:`)
console.log(`${cemReais} nota(s) de R$ 100.00`)
console.log(`${cinquentaReais} nota(s) de R$ 50.00`)
console.log(`${vinteReais} nota(s) de R$ 20.00`)
console.log(`${dezReais} nota(s) de R$ 10.00`)
console.log(`${cincoReais} nota(s) de R$ 5.00`)
console.log(`${doisReais} nota(s) de R$ 2.00`)
console.log(`MOEDAS:`);
console.log(`${umReal} moeda(s) de R$ 1.00`)
console.log(`${cinquentaCentavos} moeda(s) de R$ 0.50`)
console.log(`${vinteCincoCentavos} moeda(s) de R$ 0.25`)
console.log(`${dezCentavos} moeda(s) de R$ 0.10`)
console.log(`${cincoCentavos} moeda(s) de R$ 0.05`)
console.log(`${umCentavo} moeda(s) de R$ 0.01`)

