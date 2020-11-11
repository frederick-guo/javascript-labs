function printRow(array){
    for(let i = 0; i < array.length; i++){
        process.stdout.write(array[i] + ' ') //so that a newline won't be generated
    }
    console.log()
}

const one = ([ [1, 3, 6, 8,14,16,18], [1, 2, 3, 4, 5, 6, 7], [1, 2, 8, 4, 9, 6, 6] ])
				   				  
const two = ([ [2, 3, 6, 8,14,16,18], [3, 2, 3, 4, 5, 6, 7], [4, 2, 8, 4, 9, 6, 6] ])

console.log(one[0][0])

console.log(one[0][1])

console.log(one[0][2])

printRow(one[0])

printRow(one[1])

printRow(one[2])

for(let r = 0; r < one.length; r++){
    printRow(one[r])
}