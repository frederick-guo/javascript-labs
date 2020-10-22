console.log("\nArea of a Circle\n\n");
const readline = require('readline-sync');
let rad = readline.question("Enter the radius of a circle: ");

let area = rad * rad * Math.PI;

console.log(`The area of the circle is ${area} square units.`)