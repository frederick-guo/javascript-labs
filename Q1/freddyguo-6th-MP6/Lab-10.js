console.log("\nMultiplication Table\n");
const readline = require('readline-sync');

let num = Number(readline.question("Enter a number (0 - 9): "));

for(let i = 1; i <= 9; i++){
    let answer = num * i;
    console.log(`${num} x ${i} = ${answer}`);
}

