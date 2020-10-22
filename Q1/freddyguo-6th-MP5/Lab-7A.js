console.log("\nBattign Average\n\n");
const readline = require('readline-sync');
let hits = Number(readline.question("Enter the number of hits: "));
let bats = Number(readline.question("Enter the number of at bats: "));
let walks = Number(readline.question("Enter the number of walks: "));

let battingAvg = hits/bats;
let onBasePCT = (hits + walks) / (bats + walks);

console.log(`The user's batting average is ${battingAvg}.`)
console.log(`The user's on base average is ${onBasePCT}.`)