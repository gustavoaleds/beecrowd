var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n').map(item => parseInt(item));

let contPares = 0;


lines.map(i => {
    if(i % 2 === 0){
        contPares++;
    }
});

console.log(`${contPares} valores pares`)