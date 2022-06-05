let userName = window.prompt('Please, state your name for our records: ')
let userScore = 0

function playGame() {
for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if (userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

window.alert('Your score is: '+userScore)


while (playAgain === true) {
    playGame()
    let userChoice = window.prompt('Would you like to play the game again?
    Answer yes or no.')
    if(userChoice === 'yes'){
        playAgain = true
    } else { 
        playAgain = false
        window.alert('Thanks for stating your case!')
    }
}



