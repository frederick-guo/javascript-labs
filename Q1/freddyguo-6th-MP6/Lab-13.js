console.log("\nThe Factors of a Number\n");
const readline = require('readline-sync');



let num = Number(readline.question("Enter a number: "));
let list = [];
for(let i = 1; i <= num; i++){
    if(num % i === 0){
        list.push(i);
    }
}

let listString = "";
for(let i = 0; i < list.length; i++){
    listString = `${listString} ${list[i]} `;
}

console.log(`The factors of ${num} are:${listString}`);
