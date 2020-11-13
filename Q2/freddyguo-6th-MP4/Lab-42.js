function findSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum;
}




function printRow(array){
    for(let i = 0; i < array.length; i++){
        process.stdout.write(array[i] + ' ') //so that a newline won't be generated
    }
}

function printSum(array){
    console.log(findSum(array))
}

const one =  [1, 3, 6, 8, 14, 16, 18] 
		
const two =  [2, 3, 6, 8, 14, 16, 18]

console.log('Array one:')
printRow(one)
console.log('\nSum of array one:')
printSum(one)

console.log('\nArray two:')
printRow(two)
console.log('\nSum of array two:')
printSum(two)