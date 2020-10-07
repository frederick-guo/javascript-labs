console.log("\nThe Capital Letters in a String\n");
const readline = require('readline-sync');


let word = (readline.question("Enter a String: "));

if(word != ''){
    while(word != ''){
        let capLetters = '';
        for(let i = 0; i < word.length; i++){
            let letter = word.charAt(i);
            if(letter >= 'A' && letter <= 'Z'){
            capLetters = capLetters + word.substring(i, i+1);
            }
        }
        console.log(`The capital letters of ${word} are: ${capLetters}`);
        word = (readline.question("Enter a String: "));
    }
    
}

console.log(`Goodbye!`);

