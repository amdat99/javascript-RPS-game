let userScore = 0;
let cpuScore = 0;
let user2Score = 0;
let userScore_span = document.getElementById('user-score');
let cpuScore_span = document.getElementById('cpu-score');
const scoreboard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result-par');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const rock2_div = document.getElementById('r2');
const paper2_div = document.getElementById('p2');
const scissors2_div = document.getElementById('s2');
let playerVsPlayer_span = document.getElementById('player-vs-player');
let playerVsCpu_span = document.getElementById('player-vs-cpu');
let player1_span = document.getElementById('user-label');
let player2_span = document.getElementById('cpu-label');
let currentGameMode = ''
let player1Choice = ''
let player2Choice = ''


const setChoices1 = (choice) => {
    player1Choice = choice
    console.log(player1Choice)
}

const setChoices2 = (choice) => {
    player2Choice = choice

}

const getPlayer2Choice = () => {
    return player2Choice
}

const getPlayer1Choice = () => {
    return player1Choice
}



const getCpuChoice =() => {
    const choices =['rock','paper','scissors']
    const randNum = Math.floor(Math.random() * 3)
    
        return choices[randNum]
}

const setInputs = () => {
    if (currentGameMode === 'PVE'){
    return getCpuChoice()
    } else{
       
    return player2Choice
     }
    }

const resetGame =() => {
    userScore = 0;
    cpuScore = 0;
    user2Score = 0
    userScore_span.innerHTML = 0
    cpuScore_span.innerHTML = 0
    result_div.innerHTML = ''
}

const gameWinnerCheck  =() => {
    if(currentGameMode === 'PVE'){
    if(userScore  === 10 ){
       resetGame();
       alert('player wins the game')
    } else if(cpuScore === 10 ){
        resetGame();
        alert('computer beat you haha')
    }}

    if(currentGameMode === 'PVP'){
        if(userScore  === 10 ){
           resetGame();
           alert('player1 wins the game')
        } else if(user2Score === 10 ){
            resetGame();
            alert('player2 wins the game')
        }}
    }


const winnerCheck = (value,user,cpu) => {
    
    if (value === 'user'){
        player1Choice = ''
        userScore ++
        userScore_span.innerHTML = userScore
        result_div.innerHTML = ' player wins. '+ user + ' beats ' + cpu
        gameWinnerCheck()
        
    }
    else if (value === 'cpu'){
        
        if (currentGameMode === 'PVE'){
        cpuScore ++
        cpuScore_span.innerHTML = cpuScore
        result_div.innerHTML = 'computer wins. '+ cpu +' beats ' + user
        } else if(currentGameMode === 'PVP') {
        player2Choice =''
        user2Score +++
        cpuScore_span.innerHTML == user2Score
        result_div.innerHTML = 'player2 wins. '+ cpu +' beats ' + user
        }
        
        gameWinnerCheck()
        }
    else{
        result_div.innerHTML = 'draw. '+ user + ' blocks '+ cpu
    }
}

const setGamePVP = () => {
 const userChoice =  getPlayer1Choice()
   const cpuChoice = setInputs()
   currentGameMode = 'PVP'

   if(userChoice === '' ||cpuChoice === ''){
       return
   }

  return game(userChoice, cpuChoice)
}

const setGamePVE = () => {
    const userChoice =  getPlayer1Choice()
    const cpuChoice = setInputs()
    currentGameMode = 'PVE'
 
    game(userChoice, cpuChoice)
}

const game = (userChoice,cpuChoice) => {
    
    console.log(userChoice, cpuChoice,currentGameMode)

switch (userChoice + cpuChoice) {
  case "rockscissors":
  case "paperrock":
  case "scissorspaper":
    winnerCheck("user", userChoice, cpuChoice);
    break;
  case "rockpaper":
  case "paperscissors":
  case "scissorsrock":
    winnerCheck("cpu", userChoice, cpuChoice);
    break;
  case "rockrock":
  case "paperpaper":
  case "scissorsscissors":
    winnerCheck("draw", userChoice, cpuChoice);
    break;
}

resetChoice();
} 

const resetChoice = () => {
player1Choice = ''
player2Choice = ''
}


const setGame = () => {
        
    playerVsCpu_span.addEventListener('click', function(){
        currentGameMode = 'PVE'
        initialisePlayerVsCpu()
        resetGame()
    
    })
    
    playerVsPlayer_span.addEventListener('click', function(){
        currentGameMode = 'PVP'
        initialisePlayerVsPlayer()
        resetGame()
    })

}

const initialisePlayerVsCpu  = () => {
    
   
    player1_span.innerHTML = 'user'
    player2_span.innerHTML = 'comp'
  
 
rock_div.addEventListener('click', function(){
    setChoices1('rock')
    setGamePVE()
})

paper_div.addEventListener('click', function(){
    setChoices1('paper')
    setGamePVE()
})

scissors_div.addEventListener('click', function(){
    
    setChoices1('scissors')
    setGamePVE()
})
}

const initialisePlayerVsPlayer  = () => {
     
    player1_span.innerHTML = 'user'
    player2_span.innerHTML = 'user2'
   

    rock_div.addEventListener('click', function(){
        setChoices1('rock')
        setGamePVP()
    })
    
    paper_div.addEventListener('click', function(){
        setChoices1('paper')
        setGamePVP()
    })
    
    scissors_div.addEventListener('click', function(){
        setChoices1('scissors')
        setGamePVP()
    })

    rock2_div.addEventListener('click', function(){
        setChoices2('rock')
        setGamePVP()
    })
    
    paper2_div.addEventListener('click', function(){
        setChoices1('paper')
        setGamePVP()
    })
    
    scissors2_div.addEventListener('click', function(){
        setChoices2('scissors')
        setGamePVP()
    })
}

setGame()

