function printMatrix(matrix){
    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[r].length; c++){
            process.stdout.write(matrix[r][c] + ' ') //so that a newline won't be generated
        }
        console.log()
    }
}


const one = ([ [1, 3, 6, 8,14,16,18], [1, 2, 3, 4, 5, 6, 7], [1, 2, 8, 4, 9, 6, 6] ])
				   				  
const two = ([ [2, 3, 6, 8,14,16,18], [3, 2, 3, 4, 5, 6, 7], [4, 2, 8, 4, 9, 6, 6] ])


printMatrix(one)
console.log()
printMatrix(two)