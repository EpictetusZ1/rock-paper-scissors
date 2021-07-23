// Handle Expansion of Character Divs, Display Name
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

// Handle Adding player info on click, removing from others
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

const arminFightBtn = document.getElementById("armin-fight")
const mikasaFightBtn = document.getElementById("mikasa-fight")
const erinFightBtn = document.getElementById("erin-fight")

arminFightBtn.addEventListener("click", confirmPlayerChoice)
mikasaFightBtn.addEventListener("click", confirmPlayerChoice)
erinFightBtn.addEventListener("click", confirmPlayerChoice)


const selection = []
let clicked = false

function confirmPlayerChoice() {
    this.style.backgroundColor = "#91141F"
    if (clicked !== true) {
    if (this.getAttribute("id") === "armin-fight") {
        selection.push(1)
        clicked = true
        getPlayer()
    } else if (this.getAttribute("id") === "mikasa-fight") {
        selection.push(2)
        clicked = true
        getPlayer()
    } else if ( this.getAttribute("id") === "erin-fight") {
        selection.push(3)
        clicked = true
        getPlayer()
    }}
}

const splash = document.querySelector(".intro-splash-mobile")

document.addEventListener("DOMContentLoaded", (evt) => {
    setTimeout(() => {
        splash.classList.add("display-none")
    }, 17000)
})

let fightBtn = document.querySelectorAll(".fight")

fightBtn.forEach(function (e) {
    e.addEventListener("click", showPlayScreen)
})


function showPlayScreen() {
    let element = document.querySelector(".play-screen")
    setTimeout(()=> {
        element.classList.remove("display-none")
    }, 250)
}

function getPlayer() {
    let playerImg = document.createElement("img")
    const playerContainer = document.querySelector(".player-container")
    if (selection[0] === 1) {
        playerImg.src = "assets/playerPhotos/armin.png"
    } else if (selection[0] === 2) {
        playerImg.src = "assets/playerPhotos/mikasa.png"
    } else if (selection[0] === 3) {
        playerImg.src = "assets/playerPhotos/erin.png"
    }
    playerImg.classList.add("player-image-fight")
    playerContainer.appendChild(playerImg)
}

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

const choices = document.querySelectorAll('.selection-box')
let playerSelection
const choiceArray = ["rock", "paper", "scissors"]
let scoreTracker = 0
let roundNum = 1

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playerSelection = choice.id // This is where the Players choice is being defined by the divs ID
        updateStyleChoice(choice)
        if (winner === false && roundNum <= 10) {
            roundCounter(roundNum)
            playerScore.textContent = playerSValue.toString()
            titanScore.textContent = titanSValue.toString()
            roundNum++
            }
    })
})

let playerSValue = 0
let titanSValue = 0

let playerScore = document.getElementById("player-score")
let titanScore = document.getElementById("titan-score")

const messageBox = document.querySelector(".score-message-container")

let titanImage = document.querySelector(".titan")
let titanIncrement = 0

function roundResult(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        messageBox.textContent = `This Round is a Draw! You and The Titan Both Picked: ${computerSelection}.`
    } else if (playerSelection === "rock" && computerSelection !== "paper") {
        playerSValue++
        scoreTracker++
        messageBox.textContent = `Congrats! You Won This round! The Titan Picked: ${computerSelection}.`
        titanIncrement += 5
        titanImage.style.top = titanIncrement + "px"
    } else if (playerSelection === "paper" && computerSelection !== "scissors") {
        playerSValue++
        scoreTracker++
        messageBox.textContent = `Congrats! You Won This round! The Titan Picked: ${computerSelection}.`
        titanIncrement += 5
        titanImage.style.top = titanIncrement + "px"
    } else if (playerSelection === "scissors" && computerSelection !== "rock") {
        playerSValue++
        scoreTracker++
        messageBox.textContent = `Congrats! You Won This round! The Titan Picked: ${computerSelection}.`
        titanIncrement += 5
        titanImage.style.top = titanIncrement + "px"
    }  else {
        titanSValue++
        scoreTracker--
        messageBox.textContent = `You Lost This Round! The Titan Picked: ${computerSelection}.`
    }
}

let winner = false
let roundUpdate = document.querySelector(".round-count-container")

function roundCounter(roundNum) {
    let compWin = "NO! The Titan Won! Shiganshina District is Going to Fall"
    let humanWin = "You  WON! The Titan Has Fallen!"
    roundUpdate.textContent = `Round: ${roundNum} /10`
    roundResult(computerPlay(choiceArray), playerSelection)
    if (scoreTracker === 6) {
        messageBox.textContent = humanWin
        titanImage.classList.add("hide-titan")
        winner = true
    } else if (scoreTracker === -6) {
        messageBox.textContent = compWin
        winner = true
    } else if (roundNum >= 10 ) {
            if (scoreTracker >= 1) {
                messageBox.textContent = humanWin
                titanImage.classList.add("hide-titan")
                winner = true
            } else if (scoreTracker <= -1) {
                messageBox.textContent = compWin
                winner = true
            } else {
                messageBox.textContent = "The Game is a DRAW, Shiganshina District is Safe... for now"
            }
        }
}

function updateStyleChoice(choice) {
    choice.classList.add("selection-highlight")
    setTimeout(function () {
        choice.classList.remove("selection-highlight")
    },300)
}





