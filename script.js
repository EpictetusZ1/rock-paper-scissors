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
    if (choices.indexOf(selection) === -1) { // Determines if NON-VALID entry
        goodAnswer = false
        while (goodAnswer !== true) {
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
        console.log(`It's a Draw! You and The Computer Both Picked ${computerSelection}.`)
    } else if (playerSelection === "rock" && computerSelection !== "paper") {
        scoreTracker++
        console.log(`Congrats!, You Won This round! The Computer picked: ${computerSelection}.`)
    } else if (playerSelection === "paper" && computerSelection !== "scissors") {
        scoreTracker++
        console.log(`Congrats!, You Won This round! The Computer picked: ${computerSelection}.`)
    } else if (playerSelection === "scissors" && computerSelection !== "rock") {
        scoreTracker++
        console.log(`Congrats!, You Won This round! The Computer picked: ${computerSelection}.`)
    }  else {
        scoreTracker--
        console.log(`You Lost This Round! The Computer picked: ${computerSelection}.`)
    }
    return scoreTracker
}

let scoreTracker = 0

function roundCounter(scoreTracker) {let compWin = "The COMPUTER won the game! Woo"
    let humanWin = "You  WON the game! Woo"
    for (let i = 1; i <= 5; i++) {
        console.log(`It is currently round number: ${i}`)
        scoreTracker = gameResult(computerPlay(choices), playerSelection(choices))
       if (scoreTracker === 3 ) {
           console.log(humanWin)
       } else if (scoreTracker === -3) {
           console.log(compWin)
       } else if (i === 5) {
           if (scoreTracker >= 1) {
               console.log(humanWin)
           } else if (scoreTracker <= -1 ) {
               console.log(compWin)
           } else {
               console.log("The game is a DRAW!")
           }
       }
    }
}
// roundCounter(scoreTracker)

// Handle Expansion of Player Divs and Display Benefit
function increaseSize (element) {
    element.classList.add("expanded-image")
    if (element === document.getElementById("box-1")) {
        document.getElementById("box-2").classList.remove("expanded-image")
        document.getElementById("box-3").classList.remove("expanded-image")
    } else if (element === document.getElementById("box-2")) {
        document.getElementById("box-1").classList.remove("expanded-image")
        document.getElementById("box-3").classList.remove("expanded-image")
    } else if (element === document.getElementById("box-3")) {
        document.getElementById("box-1").classList.remove("expanded-image")
        document.getElementById("box-2").classList.remove("expanded-image")
    }
}


function displayPlayerInfo(element) {
    let player
    const box1 = document.getElementById("box-1")
    const box2 = document.getElementById("box-2")
    const box3 = document.getElementById("box-3")
    if (element === document.getElementById("box-1")) {
        box2.classList.remove("active-player")
        box3.classList.remove("active-player")
        player = document.getElementById("armin-info")
        player.classList.add("active-player")
        arminInfo()
    } else if (element === document.getElementById("box-2")) {
        box1.classList.remove("active-player")
        box3.classList.remove("active-player")
        player = document.getElementById("mikasa-info")
        player.classList.add("active-player")
        mikasaInfo()
    } else if (element === document.getElementById("box-3")) {
        box1.classList.remove("active-player")
        box2.classList.remove("active-player")
        player = document.getElementById("erin-info")
        player.classList.add("active-player")
        erinInfo()
    }
}

function arminInfo() {
    const arminContent = document.getElementById("armin-info")
    arminContent.style.display = "block"
    document.getElementById("mikasa-info").style.display = "none"
    document.getElementById("erin-info").style.display = "none"
}

function mikasaInfo() {
    const mikasaContent = document.getElementById("mikasa-info")
    mikasaContent.style.display = "block"
    document.getElementById("armin-info").style.display = "none"
    document.getElementById("erin-info").style.display = "none"
}

function erinInfo() {
    const erinContent = document.getElementById("erin-info")
    erinContent.style.display = "block"
    document.getElementById("armin-info").style.display = "none"
    document.getElementById("mikasa-info").style.display = "none"
}

