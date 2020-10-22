console.log("\nPrime Numbers\n\n");
const readline = require('readline-sync');


let number = Number(readline.question("Enter a number: "));

if(number != 0){
    while(number != 0){
        let prime = isPrime(number);
        if(prime){
            console.log(`${number} is prime.`)
        }
        else{
            console.log(`${number} is NOT prime.`)
        }
        
        number = Number(readline.question("Enter a number: "));
    }
    
}

console.log(`Goodbye!`);

function isPrime(num){
    let count = 0;
        for(let i = 1; i <= number; i++){
            if(number % i === 0){
                count++;
            }
        }
        if(count === 2){
            return true;
        }
        else{
            return false;
        }
}