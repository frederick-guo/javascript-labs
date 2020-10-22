console.log("\nSurface Area of a Cube\n\n");
const readline = require('readline-sync');
let side = readline.question("Enter the length of one side: ");

let surfaceArea = 6 * side * side;

console.log(`The area of the circle is ${surfaceArea} square units.`)