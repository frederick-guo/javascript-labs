console.log('\nWelcome\n\n')
const readline = require('readline-sync');

let name = readline.question("Enter your first name: ");
let lastName = readline.question("Enter your last name: ");

console.log(`Welcome, ${name} ${lastName}!`)