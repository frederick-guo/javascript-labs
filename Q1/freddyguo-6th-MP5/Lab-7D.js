console.log("\nSlope of a Line\n\n");
const readline = require('readline-sync');
let x1 = Number(readline.question("Enter the value for x1: "));
let y1 = Number(readline.question("Enter the value for y1: "));
console.log("\n");
let x2 = Number(readline.question("Enter the value for x2: "));
let y2 = Number(readline.question("Enter the value for y2: "));

let slope = (y2 - y1) / (x2 - x1);

console.log(`\nThe slope of the line is ${slope}.`)
