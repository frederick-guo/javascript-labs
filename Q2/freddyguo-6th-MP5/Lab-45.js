function printBoard(board){
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[r].length; c++){
            process.stdout.write(board[r][c] + ' ') 
        }
        console.log()
    }
}

function isWinnerHorizontally(player, board){
    for(let i = 0; i < board.length; i++){
        if(player === board[i][0] && player === board[i][1] && player === board[i][2]){
            return true;
        }
    }
    return false;
}

function isWinnerVertically(player,board){
    for(let i = 0; i < board.length; i++){
        if(player === board[0][i] && player === board[1][i] && player === board[2][i]){
            return true;
        }
    }
    return false;
}

function isWinnerOnDiagonal1(player, board){
    if(player === board[0][0] && player === board[1][1] && player === board[2][2]){
        return true;
    }
    return false;
}

function isWinnerOnDiagonal2(player, board){
    if(player === board[0][2] && player === board[1][1] && player === board[2][0]){
        return true;
    }
    return false;
}

function isWinner(player, board){
    if(isWinnerHorizontally(player,board)){
        return true
    }
    if(isWinnerVertically(player,board)){
        return true
    }
    if(isWinnerOnDiagonal1(player,board)){
        return true
    }
    if(isWinnerOnDiagonal2(player,board)){
        return true
    }
    return false
}


console.log('Tic-Tac-Toe')
console.log()
console.log()

const readline = require('readline-sync');

while (true){
    let board = [ ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'] ]
    printBoard(board)

    while (true){
        console.log('Player X\'s turn')
        let row = Number(readline.question("Enter your row to play on (1,2,3): "))
        let col = Number(readline.question("Enter your col to play on (1,2,3): "))
        row = row - 1;
        col = col - 1;

        board[row][col] = 'X'
        printBoard(board)

        if(isWinner("X", board)){
            console.log('X is the winner')
            break;
        }

        console.log()

        console.log('Player O\'s turn')
        row = Number(readline.question("Enter your row to play on (1,2,3): "))
        col = Number(readline.question("Enter your col to play on (1,2,3): "))
        row = row - 1;
        col = col - 1;

        board[row][col] = 'O'
        printBoard(board)

        if(isWinner("O", board)){
            console.log('O is the winner')
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
console.log("Thank you for playing Tic-Tac-Toe.  I hope that you had fun!")