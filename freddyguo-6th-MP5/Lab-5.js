console.log("\nFahrenheit to Celcius\n\n");
const readline = require('readline-sync');
let fah = readline.question("Enter the Fahrenheit temperature: ");

let cel = (5/9) * (fah - 32);

console.log(`The Celsius temperature is ${cel} degrees.`);