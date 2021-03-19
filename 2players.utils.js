
export const winnerCheck2 = (value,user,user2) => {
    if (value === 'user'){
        userScore ++
        userScore_span.innerHTML = userScore
        result_div.innerHTML = ' player wins. '+ user + ' beats ' + user2
        
    }
    else if (value === 'cpu'){
        cpuScore ++
        cpuScore_span.innerHTML = cpuScore
        result_div.innerHTML = 'player2 wins. '+ user2 +' beats ' + user
        }
    else{
        result_div.innerHTML = 'draw. '+ user + ' blocks '+ user2
    }
}


const game = (player1,player2) => {;
   switch(player1 + player2) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        winnerCheck2('user1',player1,player2)
        break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
        winnerCheck2('user2',player1,player2)
        break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        winnerCheck2('draw',player1,player2)
        break;
    }
} 