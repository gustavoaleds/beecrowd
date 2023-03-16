var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let inteiro = parseInt(lines.shift());

for (let i = 0; i < inteiro; i++) {
  let array = lines[i].split(" ").map((item) => parseInt(item));
  let [R1, R2] = array;
  console.log(R1 + R2);
}