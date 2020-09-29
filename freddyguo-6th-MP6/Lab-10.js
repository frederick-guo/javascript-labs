console.log("\nThe Guessing Game\n");
const readline = require('readline-sync');


let low = 1;
let high = 100;

let number = Math.floor(Math.random() * 100) + 1;
let userGuess = 0;
let numTries = 1;




while (numTries <= 7){
    console.log(`low = ${low} high = ${high}\n`)
    userGuess = Number(readline.question("Enter your guess: "));

    if(number === userGuess){
        break;
    }
    else if(userGuess < number){
        console.log("Your number is too low!");
        low = userGuess + 1;
    }
    else{
        console.log("Your number is too high!");
        high = userGuess - 1;
    }
    numTries += 1;
}

if(userGuess === number){
    console.log("You guess the number!!!")
}
else{
    console.log(`You lose. The number was ${number}`)
}

