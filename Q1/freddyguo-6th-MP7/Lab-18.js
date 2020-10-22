console.log("\nThe Vowels in a String\n");
const readline = require('readline-sync');


let word = (readline.question("Enter a String: "));

if(word != ''){
    while(word != ''){
        let vowels = '';
        for(let i = 0; i < word.length; i++){
            if(word.substring(i, i+1) === "a" || word.substring(i, i+1) === "e" || word.substring(i, i+1) === "i" || word.substring(i, i+1) === "o" || word.substring(i, i+1) === "u"){
            vowels = vowels + word.substring(i, i+1);
            }
        }
        console.log(`The vowels of ${word} are: ${vowels}`);
        word = (readline.question("Enter a String: "));
    }
    
}

console.log(`Goodbye!`);

