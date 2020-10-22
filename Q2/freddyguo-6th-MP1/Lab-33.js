console.log("\nList\n");
const readline = require('readline-sync');

function printNamesAndAges(names, ages){
    for(let i = 0; i < names.length; i++){
        console.log(`${names[i]} ${ages[i]}`)
    }
}

let names = []
let ages = []

while(true){
    let name = readline.question("Enter a Name: ")
    if(name === ""){
        break;
    }

    let age = readline.question("Enter their Age: ")
    if(age === ""){
        break;
    }

    names.push(name)
    ages.push(age)
    console.log("\n")
}

console.log("\n")

printNamesAndAges(names, ages);

console.log("\n")

names.sort(); //ages are not sorted, so when printing the sorted list, the names and ages are not corectly paired!!
              //I assume this is problem...

printNamesAndAges(names, ages); 