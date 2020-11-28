function printBoard(board){
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[r].length; c++){
            process.stdout.write(board[r][c] + ' ') 
        }
        console.log()
    }
}

function copyBoard(board){
    let newBoard = []
    for(let r = 0; r < board.length; r++){
        let newRow = []
        for(let c = 0; c < board[r].length; c++){
            newRow.push(board[r][c])
        }
        newBoard.push(newRow)
    }
    return newBoard
}

function moveDestroyersDown(board){
    let lastRow = board.length - 1;
    for(let c = 0; c < board[lastRow].length; c++){
        if(board[lastRow][c] != '*'){
            board[lastRow][c] = ' '
        }
    }

    let shipIsHit = false

    for(let r = board.length - 2; r >= 0; r--){
        for(let c = 0; c < board[r].length; c++){
            if(board[r][c] === 'D'){
                if(board[r+1][c] === '*'){
                    shipIsHit = true
                }
                board[r][c] = ' '
                board[r+1][c] = 'D'
            }
           // printBoard(board) 
        }
    }

    return shipIsHit
}


const readline = require('readline-sync');

let row0 = ['D', ' ', 'D', ' ', 'D' , 'D', 'D', ' ']
let row1 = ['D', ' ', ' ', ' ', ' ' , 'D', ' ', ' ']
let row2 = ['D', ' ', 'D', ' ', ' ' , 'D', ' ', ' ']
let row3 = [' ', ' ', ' ', ' ', ' ' , 'D', ' ', 'D']
let row4 = [' ', ' ', ' ', ' ', ' ' , ' ', ' ', ' ']
let row5 = [' ', 'D', ' ', 'D', 'D' , ' ', ' ', ' ']
let row6 = [' ', ' ', ' ', ' ', ' ' , ' ', ' ', ' ']
let row7 = [' ', ' ', ' ', ' ', ' ' , ' ', ' ', ' ']
let row8 = [' ', ' ', ' ', ' ', ' ' , ' ', ' ', ' ']
let row9 = [' ', ' ', ' ', '*', ' ' , ' ', ' ', ' ']

board = []
board.push(row0)
board.push(row1)
board.push(row2)
board.push(row3)
board.push(row4)
board.push(row5)
board.push(row6)
board.push(row7)
board.push(row8)
board.push(row9)

let originalBoard = copyBoard(board)

let shipRow = 9
let shipCol = 3

console.log('Battle Ship')
console.log()
console.log()

while (true){
    // create a board for this came and reset it back to the beginning
    board = copyBoard(originalBoard)

    // reset the ship's coordinates shipRow and shipCol
    shipRow = 9
    shipCol = 3

    // print the baord
    printBoard(board)

    while (true){

        console.log('You can move left (l), up (u), right (r), none (n), or quit (q)')
        let move = readline.question("Enter how to move (l, u, r, n, q): ")

        if (move === 'l'){
            board[shipRow][shipCol] = ' '
            shipCol = shipCol - 1
            if (board[shipRow][shipCol] === 'D'){
                console.log('You lose!!!')
                break;
            }
            board[shipRow][shipCol] = '*'
        }
        else if (move === 'u'){
            board[shipRow][shipCol] = ' '
            shipRow = shipRow - 1
            if (board[shipRow][shipCol] === 'D'){
                console.log('You lose!!!')
                break;
            }
            board[shipRow][shipCol] = '*'
        }
        else if (move === 'r'){
            board[shipRow][shipCol] = ' '
            shipCol = shipCol + 1
            if (board[shipRow][shipCol] === 'D'){
                console.log('You lose!!!')
                break;
            }
            board[shipRow][shipCol] = '*'
        }
        else if (move === 'q'){
            break;
        }

        // move destroyers down
        let shipIsHit1 = moveDestroyersDown(board)
        //printBoard(board)
        // see if ship got hit
        if (shipIsHit1 === true){
            console.log('You lose!!!')
            break;
        }


        // print new board!!!!!!
        printBoard(board)

        if (shipRow === 0){
            console.log('You win!!! Great job!!!')
            break;
        }

        console.log()
        console.log()
    }
    console.log()
    console.log() 
    let playAgain = readline.question("Would you like to play another game? (y or n) ")
    if (playAgain === "n"){
        break;
    }
}

console.log()
console.log()
console.log('Thank you for playing Battle Ship.  I hope that you had fun!')