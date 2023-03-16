var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let inteiro = parseInt(lines.shift());
let acumulador = "";

let novoJ = 4;

for (let i = 0; i < inteiro; i++) {
  for (let j = novoJ - 3; j <= novoJ; j++) {
    if (j % 4 !== 0) {
      acumulador += j + " ";
    } else {
      acumulador += "PUM";
    }
  }
  console.log(acumulador);
  acumulador = "";
  novoJ += 4;
}