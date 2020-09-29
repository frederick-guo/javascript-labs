console.log("\nPositive or Negative or Zero\n\n");
const readline = require('readline-sync');
let num = Number(readline.question("Enter a number: "));

console.log("\n");

if(num > 0){
    console.log(`${num} is a positive number`)
}
else if(num < 0){
    console.log(`${num} is a negative number`)
}
else{
    console.log(`${num} is zero`)
}

