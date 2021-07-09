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

console.log(computerPlay(choices))

function playerSelection() {
    return document.getElementById("player-input").value.toLowerCase()
}

function gameResult(computerSelection, playerSelection) {
    if (playerSelection === "rock" && computerSelection !== "paper") {
        console.log(`Congratulations, You won! the Computer picked: ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection !== "scissors") {
        console.log(`Congratulations, You won! the Computer picked: ${computerSelection}`)
    } else if (playerSelection === "scissors" && computerSelection !== "rock") {
        console.log(`Congratulations, You won! the Computer picked: ${computerSelection}`)
    } else {
        console.log(`You Lost! the Computer picked: ${computerSelection}. Better Luck Next Time!`)
    }
}

gameResult(computerPlay(choices), playerSelection())















