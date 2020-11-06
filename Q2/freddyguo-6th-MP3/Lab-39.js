class GameScore{

    constructor(team1, points1, team2, points2){
        this.team1 = team1
        this.points1 = points1
        this.team2 = team2
        this.points2 = points2
    }
}
    
let games = [];

let game = new GameScore("Boston Celtics", 116, "LA Lakers", 112)
games.push(game)

game = new GameScore("San Antonio Spurs", 128, "Detroit Pistons", 96)
games.push(game)

game = new GameScore("Houston Rockets", 124, "Indiana Pacers", 119)
games.push(game)

game = new GameScore("Dallas Mavericks", 117, "New York Knicks", 115)
games.push(game)


console.log('\nGame Scores\n\n');

console.log('Here are the scores printed from an array: ')
console.log('===============================================')

for(let i = 0; i < games.length; i++){
    console.log('Team: ' + games[i].team1)
    console.log('Score: ' + games[i].points1 + '\n')

    console.log('Team: ' + games[i].team2)
    console.log('Score: ' + games[i].points2 + '\n')

    console.log('===============================================')
}

