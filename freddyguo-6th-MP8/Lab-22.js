console.log("\nBinary Numbers\n\n");
const readline = require('readline-sync');


let num = Number(readline.question("Enter a number to convert into binary: "));

if(num != 0){
    while(num != 0 ){
        let binary = bin(num);
        console.log(`The number ${num} in binary form is ${binary}`)
        num = Number(readline.question("Enter a number to convert into binary: "));
    }
}

console.log(`Goodbye!`);


function bin(num){
        return num.toString(2);
}