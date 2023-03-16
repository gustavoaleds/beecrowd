var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let totalValores = parseInt(lines.shift());

let inside = 0;
let outside = 0;

for (let i = 0; i < totalValores; i++) {
  let valores = parseInt(lines.shift());
  if (valores >= 10 && valores <= 20) {
    inside++;
  } else {
    outside++;
  }
}

console.log(`${inside} in`);
console.log(`${outside} out`);