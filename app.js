const rock = document.getElementById("rock-btn")
const scissor = document.getElementById("scissor-btn")
const paper = document.getElementById("paper-btn")

const rockInput = document.getElementById("rock-input")
const scissorInput = document.getElementById("scissor-input")
const paperInput = document.getElementById("paper-input")
const Result = document.getElementById("result")

const winCount = document.getElementById("win")
const loseCount = document.getElementById("lose")
const drawCount = document.getElementById("draw")
const roundCount = document.getElementById("round")
const youResult = document.getElementById("you-result")
const botResult = document.getElementById("bot-result")

const rps = ["Rock", "Paper", "Scissor"]
let win = 0
let lose = 0
let draw = 0
let round = 0
    
const randomRPS = () => {
     random = Math.floor(Math.random() * 3)
     resultRandom = rps[random]
}
    
const checkRock = () => {
    randomRPS()
    checktfd = "draw"
    if (resultRandom == "Scissor"){
        checktfd = true /* win */
    }else if (resultRandom == "Paper"){
        checktfd = false /* lose */
    }
    youResult.innerHTML = "Rock"
    botResult.innerHTML = resultRandom
    checkResult()
}

const checkPaper = () => {
    randomRPS()
    checktfd = "draw"
    if (resultRandom == "Scissor"){
        checktfd = false /* lose*/
    }else if (resultRandom == "Rock"){
        checktfd = true /* win */
    }
    youResult.innerHTML = "Paper"
    botResult.innerHTML = resultRandom
    checkResult()
}

const checkScissor = () => {
    randomRPS()
    checktfd = "draw"
    if (resultRandom == "Rock"){
        checktfd = false /* lose */
    }else if (resultRandom == "Paper"){
        checktfd = true /* win */
    }
    youResult.innerHTML = "Scissor"
    botResult.innerHTML = resultRandom
    checkResult()
}

const checkResult = () => {
    round += 1
    roundCount.innerHTML = `Round:${round}`
    if (checktfd != "draw"){
        if (checktfd){
            Result.style.color = 'green'
            Result.innerHTML = "WIN"
            win += 1
            winCount.innerHTML = `Win = ${win}`
        }else {
            Result.style.color = 'red'
            Result.innerHTML = "LOSE"
            lose += 1
            loseCount.innerHTML = `Lose = ${lose}`
        }
    }else {
        Result.style.color = 'blue'
        Result.innerHTML = "DRAW"
        draw += 1
        drawCount.innerHTML = `Draw = ${draw}`
    }

}

rock.addEventListener("click", checkRock)
paper.addEventListener("click", checkPaper)
scissor.addEventListener("click", checkScissor)