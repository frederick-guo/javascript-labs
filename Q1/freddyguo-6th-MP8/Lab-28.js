console.log("\nEven Numbers\n");

function countEvens (array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

let one = [12,3,6,8,14,12,1]
let two = [1,2,8,4,9,6,6,8,2]

let numberOfEvensOne = countEvens(one)

console.log(`The number of even numbers in array one is ${numberOfEvensOne}\n`);

let numberOfEvensTwo = countEvens(two)

console.log(`The number of even numbers in array two is ${numberOfEvensTwo}\n`);