console.log("\nLargest Number\n");

function findLargest (array){
    let largest = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}

let one = [12,3,6,8,14,12,1]
let two = [1,2,8,4,9,6,6,8,2]

let largestOfOne = findLargest(one)

console.log(`The largest number of array one is ${largestOfOne}\n`);

let largestOfTwo = findLargest(two)

console.log(`The largest number of array two is ${largestOfTwo}\n`);