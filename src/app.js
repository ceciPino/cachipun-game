// valores botones usuario
const rockValue = document.getElementById("rock");
const paperValue = document.getElementById("paper");
const sicsorsValue = document.getElementById("sicsors");
// valor opción seleccionada
let choiceBtn = document.getElementById("choice");
let computerResult = document.querySelector(".pc-player");
let gameResult = document.getElementById("gameResult");
let playerValue

function getRandomNumber () {
    return Math.floor(Math.random() * 3) + 1;
    
}

// Función elección PC
function getRandomChoice() {
    //asignar como valor en una variable un número random entre 1 y 3
    let randomNumber = getRandomNumber();

    /*usamos switch/case para asignar a cada caso de randomNumber piedra, papel o tijeras
    por ej: si randomNumber da 2 cuando se ejecuta la función, retornara el valor "paper"*/

    switch (randomNumber) {
        case 1: computerResult.innerHTML = "PIEDRA"
            return "rock";
        case 2: computerResult.innerHTML = "PAPEL"
            return "paper";
        case 3: computerResult.innerHTML = "TIJERAS"
            return "sicsors";
    }
}


function checkWinner(player, computer) {
    if(player == computer){
        return gameResult.innerHTML = "ES UN EMPATE";
    }
    else if(player == "rock"){
        return(computer == "sicsors") ? gameResult.innerHTML ="GANASTE" : gameResult.innerHTML = "PERDISTE!"}

    else if(player == "sicsors"){
        return(computer == "paper") ? gameResult.innerHTML ="GANASTE" : gameResult.innerHTML = "PERDISTE!"}

    else if(player == "paper"){
        return(computer == "rock") ? gameResult.innerHTML ="GANASTE" : gameResult.innerHTML = "PERDISTE!"}
    }
     

// escuchar la opción marcada por el usuario
function checkUserOption(event, choiceText, choice) {
    event.preventDefault();
    choiceBtn.innerHTML = choiceText;
    playerValue = choice;
    return checkWinner(playerValue,getRandomChoice())
}

rockValue.addEventListener("click", function (event) {
    return checkUserOption(event, "PIEDRA", "rock")
})

paperValue.addEventListener("click", function (event) {
   return checkUserOption(event, "PAPEL", "paper")
})

sicsorsValue.addEventListener("click", function (event) {
    return checkUserOption(event, "TIJERAS", "sicsors")
})




