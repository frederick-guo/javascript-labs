console.log("\nThe Dice Game\n");
const readline = require('readline-sync');

let wins = 0;
let losses = 0;


let play = (readline.question("Are you ready to toss the dice (Yes or No)? "));

while (play === 'y'){
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die1 + " " + die2);
    let sum = die1 + die2;
    if(sum === 7 || sum === 11){
        console.log(`You tossed a ${sum}. You win!`)
        wins++;
    }
    else{
        console.log(`You tossed a ${sum}. You lose!`)
        losses++;
    }
    play = (readline.question("Are you ready to toss the dice (Yes or No)? "));
}

console.log(`Wins: ${wins}`);
console.log(`Losses: ${losses}`);
console.log(`Thank you for playing dice!!!`);