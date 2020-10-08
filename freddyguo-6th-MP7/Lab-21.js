console.log("\nPerfect Numbers\n\n");
const readline = require('readline-sync');


let num = Number(readline.question("Enter a number: "));

if(num != 0){
    while(num != 0 ){
        let perfect = isPerfect(num);
        if(perfect){
            console.log(`${num} is perfect.`)
        }
        else{
            console.log(`${num} is NOT perfect.`)
        }
        num = Number(readline.question("Enter a number: "));
    }
}

console.log(`Goodbye!`);

function isPerfect(number){
        let sum = 0;
        for(let i = 1; i < number; i++){
            if(number % i === 0){
                sum += i;
            }
        }
        if(sum === number){
            return true;
        }
        else{
            return false;
        }
        
}