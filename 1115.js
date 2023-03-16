var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  let valores = lines[i].split(" ").map((item) => parseInt(item));
  let [X, Y] = valores;

  let primeiro = X > 0 && Y > 0;
  let segundo = X < 0 && Y > 0;
  let terceiro = X < 0 && Y < 0;
  let quarto = X > 0 && Y < 0;
  let nulo = X === 0 || Y === 0;

  if (primeiro) {
    console.log("primeiro");
  } else if (segundo) {
    console.log("segundo");
  } else if (terceiro) {
    console.log("terceiro");
  } else if (quarto) {
    console.log("quarto");
  } else if (nulo) {
    break;
  }
}