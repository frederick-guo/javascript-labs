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

const board1 = [ ['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'O', 'X'] ]
				       
const board2 = [ ['X', 'O', 'O'], ['O', 'X', 'O'], ['X', 'X', 'O'] ]

const board3 = [ ['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'O', 'O'] ]

console.log()

printBoard(board1)
console.log()
if(isWinner('X',board1)){
    console.log('X is the winner on board1')
}
else if(isWinner('O',board1)){
    console.log('O is the winner on board1')
}
else{
    console.log('There is no winner on board1. Cat\'s game!!!')
}
console.log()

printBoard(board2)
console.log()
if(isWinner('X',board2)){
    console.log('X is the winner on board2')
}
else if(isWinner('O',board2)){
    console.log('O is the winner on board2')
}
else{
    console.log('There is no winner on board2. Cat\'s game!!!')
}
console.log()

printBoard(board3)
console.log()
if(isWinner('X',board3)){
    console.log('X is the winner on board3')
}
else if(isWinner('O',board3)){
    console.log('O is the winner on board3')
}
else{
    console.log('There is no winner on board3. Cat\'s game!!!')
}