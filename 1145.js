var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

let acumulador = "";

for (let i = 1; i <= Y; i++) {
  if (i % X !== 0) {
    acumulador += i + " ";
  } else if (i % X === 0 && i !== Y) {
    acumulador += i + "\n";
  } else {
    acumulador += i;
  }
}

console.log(acumulador);