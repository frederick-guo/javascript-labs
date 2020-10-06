console.log("\nThe GCF of Two Numbers\n");
const readline = require('readline-sync');

let n1 = Number(readline.question("Enter the first number: "));
let n2 = Number(readline.question("Enter the second number: "));

if(n1 != 0 && n2 != 0){
    while(n1 != 0 && n2 != 0){
        gcf(n1, n2)
    
    n1 = Number(readline.question("Enter the first number: "));
    if(n1 === 0){
        console.log(`Goodbye!`);
        return
    }
    n2 = Number(readline.question("Enter the second number: "));
}
}

console.log(`Goodbye!`);



function gcf(num1, num2){

    let list1 = [];
    for(let i = 1; i <= num1; i++){
        if(num1 % i === 0){
            list1.push(i);
            }
        }
           
    let list2 = [];
    for(let i = 1; i <= num2; i++){
        if(num2 % i === 0){
            list2.push(i);
        }
    }
            
    let gcf = 1;
        for(let i = 0; i < list1.length; i++){
        if(list2.includes(list1[i]) && (list1[i] > gcf)){
            gcf = list1[i];
        }
    }
    console.log(`The GCF of ${num1} and ${num2} is ${gcf}`)
            
            
}





