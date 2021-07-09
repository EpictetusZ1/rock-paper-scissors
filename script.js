const choices = ["Rock", "Paper", "Scissors"]

function computerPlay(choices) {
    let computerSelection = ""
    let randomNum = Math.floor(Math.random() * 100)
    console.log(randomNum)
    if (randomNum < 33) {
        computerSelection = choices[0]
    } else if (randomNum > 33 && randomNum < 66) {
        computerSelection = choices[1]
    } else {
        computerSelection = choices[2]
    }
    return console.log(computerSelection)
}

computerPlay(choices)