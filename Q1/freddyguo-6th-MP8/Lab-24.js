console.log("\nBase Sixteen (Hex) Numbers\n\n");
const readline = require('readline-sync');


let num = Number(readline.question("Enter a number: "));

if(num != 0){
    while(num != 0 ){
        let baseSixteen = hex(num);
        console.log(`The number ${num} in base 16 is ${baseSixteen}`)
        num = Number(readline.question("Enter a number: "));
    }
}

console.log(`Goodbye!`);


function hex(num){
        return num.toString(16);
}