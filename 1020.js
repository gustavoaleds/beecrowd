var input = require('fs').readFileSync('stdin', 'utf8');

let diasIniciais = parseInt(input);

const ano = parseInt(diasIniciais / 365);
diasIniciais = diasIniciais % 365;

const mes = parseInt(diasIniciais / 30);
diasIniciais = diasIniciais % 30;

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${diasIniciais} dia(s)`)