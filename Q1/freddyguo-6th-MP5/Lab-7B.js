console.log("\nThrowing Percentage\n\n");
const readline = require('readline-sync');
let completed = Number(readline.question("Enter the number of passes completed: "));
let thrown = Number(readline.question("Enter the number of passes thrown: "));

let throwingPCT = completed/thrown;


console.log(`The throwing percentage is ${throwingPCT}.`)
