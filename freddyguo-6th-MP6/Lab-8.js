console.log("\nLetter Grades\n\n");
const readline = require('readline-sync');
let grade = Number(readline.question("Enter the numerical grade: "));

console.log("\n");

if(grade >= 95){
    console.log(`\nThe letter grade is A.`)
}
else if(grade >= 87 && grade <= 94){
    console.log(`The letter grade is B`)
}
else if(grade >= 75 && grade <= 86){
    console.log(`The letter grade is C`)
}
else if(grade >= 70 && grade <= 74){
    console.log(`The letter grade is D`)
}
else{
    console.log(`The letter grade is F`)
}

