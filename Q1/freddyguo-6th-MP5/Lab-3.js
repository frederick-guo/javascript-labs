console.log("\nArea of a Rectangle\n\n");
const readline = require('readline-sync');
let length = readline.question("Enter the length of a rectangle: ");
let width = readline.question("Enter the width of a rectangle: ");

let area = length * width;

console.log(`The area is ${area} square units.`)