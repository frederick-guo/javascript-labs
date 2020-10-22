console.log("\nStrictly Increasing\n");

function isStrictlyIncreasing (array){
    let increasing = true;

    for(let i = 0; i < array.length - 1; i++){
        if(!(array[i+1] > array[i])){
            increasing = false;
        }
    }
    return increasing;
}

let one = [1,3,6,8,14,16,18];
let two = [1,2,8,4,9,6,6,8,2];

if (isStrictlyIncreasing(one)){
    console.log('Array One is strictly increasing.\n');
}
else{
    console.log('Array One is NOT strictly increasing.\n');
}

if (isStrictlyIncreasing(two)){
    console.log('Array Two is strictly increasing.\n');
}
else{
    console.log('Array Two is NOT strictly increasing.\n');
}