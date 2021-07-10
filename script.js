const choices = ["rock", "paper", "scissors"]

function computerPlay(choices) {
    let computerSelection
    let randomNum = Math.floor(Math.random() * 100)
    if (randomNum < 33) {
        computerSelection = choices[0]
    } else if (randomNum > 33 && randomNum < 66) {
        computerSelection = choices[1]
    } else {
        computerSelection = choices[2]
    }
    return computerSelection
}

function playerSelection(choices) {
    let selection
    let goodAnswer = true
    selection = window.prompt("Type your choice here").toLowerCase()
    if (choices.indexOf(selection) === -1) { // Determines a NON-VALID entry
        goodAnswer = false
        while (goodAnswer !== true) { // While not a valid answer, display prompt again
            selection = window.prompt("Not a valid entry, please choose one of the following: rock, paper, scissors").toLowerCase()
            if (choices.indexOf(selection) !== -1) {
                goodAnswer = true
            }
        }
    }
    return selection
}

function gameResult(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`It's a Draw! You and the Computer Both Picked ${computerSelection}.`)
    } else if (playerSelection === "rock" && computerSelection !== "paper") {
        scoreTracker++
        console.log(`Congratulations, You Won This round! The Computer picked: ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection !== "scissors") {
        scoreTracker++
        console.log(`Congratulations, You Won This round! The Computer picked: ${computerSelection}`)
    } else if (playerSelection === "scissors" && computerSelection !== "rock") {
        scoreTracker++
        console.log(`Congratulations, You Won This round! The Computer picked: ${computerSelection}`)
    }  else {
        scoreTracker--
        console.log(`You Lost This Round! the Computer picked: ${computerSelection}.`)
    }
    return scoreTracker
}

let scoreTracker = 0

// TODO: Simply this function?

function roundCounter(scoreTracker) {
    let compWin = "The COMPUTER won the game! Wooo"
    let humanWin = "You  WON the game! Woo"
    for (let i = 1; i <=6; i++) {
       if (scoreTracker === 3 ) {
           console.log(humanWin)
       } else if (scoreTracker === -3) {
           console.log(compWin)
       } else if (i < 5) {
           scoreTracker = gameResult(computerPlay(choices), playerSelection(choices))
           console.log(`It is currently round number: ${i}`)
       } else if (i === 5) {
           if (scoreTracker === 3) {
               console.log(humanWin)
           } else if (scoreTracker === -3) {
               console.log(compWin)
           }
       } else {
           if (scoreTracker > 0) {
               console.log(humanWin)
           }
           else {
               console.log(compWin)
           }
       }
    }
}

roundCounter(scoreTracker)








