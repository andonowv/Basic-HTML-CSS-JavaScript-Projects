let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let player ={
    name: "Alexsander",
    chips: 145
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandom(){
    let value =  Math.floor(Math.random() * 13) +1
    if (value === 1){
        return 11
    }else if (value === 11 || value === 12 || value === 13){
        return 10
    }else return value
}

function startGame(){
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want do draw a new card?"
    } else if (sum === 21) {
        message = "You've got a BlackJack!"
        hasBlackJack = true
    } else {
        message = "You are out of Game"
        isAlive = false
    }

    messageEl.textContent = message
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandom()
        cards.push(newCard)
        sum+=newCard
        renderGame()
    }
}
