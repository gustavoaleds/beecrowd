var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n').map(item => parseInt(item));

let contPares = 0;
let contImpar = 0;
let contPositivos = 0;
let contNegativos = 0;

lines.map(i => {
    if(i % 2 === 0){
        contPares++;
    }

    if(i % 2 !== 0){
        contImpar++;
    }

    if(i > 0){
        contPositivos++;
    }
    if(i < 0){
        contNegativos++;
    }
});

console.log(`${contPares} valor(es) par(es)`)
console.log(`${contImpar} valor(es) impar(es)`)
console.log(`${contPositivos} valor(es) positivo(s)`)
console.log(`${contNegativos} valor(es) negativo(s)`)