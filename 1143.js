var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let inteiro = parseInt(lines.shift());
let valorAtual = 1;

for (let i = 0; i < inteiro; i++) {
  let segundoValor = valorAtual * valorAtual;
  let terceiroValor = segundoValor * valorAtual;
  console.log(`${valorAtual} ${segundoValor} ${terceiroValor}`);
  valorAtual++;
}