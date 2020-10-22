console.log("\nWinning Percentage\n\n");
const readline = require('readline-sync');
let wins = Number(readline.question("Enter the number of wins: "));
let losses = Number(readline.question("Enter the number of losses: "));


let winningPCT = (wins) / (wins + losses);

console.log(`The winning percentage is ${winningPCT}.`);
