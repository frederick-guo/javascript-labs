function printRow(array){
    for(let i = 0; i < array.length; i++){
        process.stdout.write(array[i] + ' ') //so that a newline won't be generated
    }
}

function printRowSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}

function printAllRowsandSum(array){
    for(let i = 0; i < array.length; i++){
        printRow(array[i])
        printRowSum(array[i])
    }
}

function printColumnSum(array, column){
    let sum = 0;
    for(let r = 0; r < array.length; r++){
        sum += array[r][column]
        
    }
    console.log(sum)
}

function printSumofAllColumns(array){
    for(let r = 0; r < array.length; r++){
        for(let c = 0; c < array[r].length; c++){
            if(r === 0){
                printColumnSum(array, c)
            }
        }
    }   
}

const one = [ [1, 3, 6, 8, 14, 16, 18], [1, 2, 3, 4, 5, 6, 7], [1, 2, 8, 4, 9, 6, 6] ]
				  
const two = [ [2, 3, 6, 8,14,16,18], [3, 2, 3, 4, 5, 6, 7],[4, 2, 8, 4, 9, 6, 6]]

console.log('Sum of each row in matrix one')
printAllRowsandSum(one);

console.log('\nSum of each column in matrix one')
printSumofAllColumns(one);

console.log('\nSum of each row in matrix two')
printAllRowsandSum(two);

console.log('\nSum of each column in matrix two')
printSumofAllColumns(two);
