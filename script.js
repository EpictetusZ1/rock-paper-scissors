const choices = ["rock", "paper", "scissors"]

function computerPlay(choices) {
    let computerSelection
    let randomNum = Math.floor(Math.random() * 100)
    console.log(randomNum)
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
    selection = window.prompt("Type your choice here")
    selection = selection.toLowerCase()
    if (choices.indexOf(selection.toString()) === -1) {
        selection = window.prompt("Not a valid entry, please choose one of the following: rock, paper, scissors")
    } else {
        console.log("The user input after prompt is " + selection)
    }
    return selection
}

function gameResult(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`It's a Draw! You and the Computer Both Picked ${computerSelection}. Better Luck Next Time!`)
    } else if (playerSelection === "rock" && computerSelection !== "paper") {
        console.log(`Congratulations, You won! the Computer picked: ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection !== "scissors") {
        console.log(`Congratulations, You won! the Computer picked: ${computerSelection}`)
    } else if (playerSelection === "scissors" && computerSelection !== "rock") {
        console.log(`Congratulations, You won! the Computer picked: ${computerSelection}`)
    }  else {
        console.log(`You Lost! the Computer picked: ${computerSelection}. Better Luck Next Time!`)
    }
}

gameResult(computerPlay(choices), playerSelection(choices))













