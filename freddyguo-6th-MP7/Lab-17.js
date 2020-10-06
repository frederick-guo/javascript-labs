console.log("\nThe Sum of the Digits for a Number\n");
const readline = require('readline-sync');

let notZero = true;

while(notZero){
    let number = Number(readline.question("Enter a number: "));
    if(number === 0){
        console.log(`Goodbye!`)
        break;
    }
    let sumofDigits = sum(number);
    console.log(`The sum of the digits of ${number} is ${sumofDigits}`)
}





function sum(num){

    if(num === 0){
        return 0;
    }
    if(num < 0){
        num = Math.abs(num);
    }
    let sum = 0;
    while(num > 0){
        let rightDigit = num % 10
        sum = sum + rightDigit
        num = Math.floor(num / 10)
    }
    return sum;
            
            
}





