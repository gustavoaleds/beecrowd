var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const X = parseInt(lines.shift());
const Y = parseInt(lines.shift());
let soma = 0;

for (let i = Y + 1; i < X; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(soma);