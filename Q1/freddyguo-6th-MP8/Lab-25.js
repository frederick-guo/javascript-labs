console.log("\nEncryption\n\n");
const readline = require('readline-sync');


let msg = (readline.question("Enter a message: "));

if(msg != ''){
    while(msg != '' ){
        let encryptedMsg = encrypt(msg);
        console.log(`${msg} encrypted is ${encryptedMsg}`)
        msg = (readline.question("Enter a message: "));
    }
}

console.log(`Goodbye!`);


function encrypt(msg){
    let encryptString = '';
    for(let i = 0; i < msg.length; i++){
        var ch = msg.charCodeAt(i);
        
        if(i % 2 === 0){
            ch += 4;
        }
        else{
            ch += 7;
        }
        
        let x = String.fromCharCode(ch);
        encryptString = encryptString + x;


    }
        return encryptString;
}