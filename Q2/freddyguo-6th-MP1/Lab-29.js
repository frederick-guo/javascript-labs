console.log("\nAverage Numbers\n");

function findAverage (array){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        count++;
    }
    return sum / count;
}

let one = [12,3,6,8,14,12,1]
let two = [1,2,8,4,9,6,6,8,2]

let averageOne = findAverage(one)

console.log(`The average of numbers in list one is ${averageOne}\n`);

let averageTwo = findAverage(two)

console.log(`The average of numbers in list two is ${averageTwo}\n`);