console.log("\nBase Eight Numbers\n\n");
const readline = require('readline-sync');


let num = Number(readline.question("Enter a number: "));

if(num != 0){
    while(num != 0 ){
        let baseEight = oct(num);
        console.log(`The number ${num} in base 8 is ${baseEight}`)
        num = Number(readline.question("Enter a number: "));
    }
}

console.log(`Goodbye!`);


function oct(num){
        return num.toString(8);
}