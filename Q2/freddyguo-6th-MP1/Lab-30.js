console.log("\nFibonacci Numbers\n");
const readline = require('readline-sync');




function findFibonacciNumbers(num){
    let list = [1,1]

    for(let i = 2; i < num; i++){
        let nextNum = list[i-2] + list[i-1]
        list.push(nextNum)
    }
    return list;
}

function printFiboList (list){    
    console.log(list.join(' '));
}

while (true){
    let num = Number(readline.question("How many fibonacci numbers do you want to see? "));

    if(num === 0){
        break;
    }
    
    let fiboList = findFibonacciNumbers(num);
    printFiboList(fiboList);
}

console.log('\nGoodbye\n');