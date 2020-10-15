console.log("\nEncryption\n\n");
const readline = require('readline-sync');


let msg = (readline.question("Enter a message: "));

if(msg != ''){
    while(msg != '' ){
        let decryptedMsg = decrypt(msg);
        console.log(`${msg} decrypted is ${decryptedMsg}`)
        msg = (readline.question("Enter a message: "));
    }
}

console.log(`Goodbye!`);


function decrypt(msg){
    let decryptString = '';
    for(let i = 0; i < msg.length; i++){
        var ch = msg.charCodeAt(i);
        
        if(i % 2 === 0){
            ch -= 4;
        }
        else{
            ch -= 7;
        }
        
        let x = String.fromCharCode(ch);
        decryptString = decryptString + x;


    }
        return decryptString;
}