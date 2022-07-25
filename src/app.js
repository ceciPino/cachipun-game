// valores botones usuario
const rockValue = document.getElementById("rock");
const paperValue = document.getElementById("paper");
const sicsorsValue = document.getElementById("sicsors");
// valor opción seleccionada
let choiceBtn = document.getElementById("choice");
let computerResult = document.querySelector(".pc-player")

// Función elección PC
function getRandomChoice() {
    //asignar como valor en una variable un número random entre 1 y 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

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

// escuchar la opción marcada por el usuario
rockValue.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("presionaste piedra");
    choiceBtn.innerHTML = "PIEDRA";
    console.log(getRandomChoice());
    return 'rock'
})

paperValue.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("presionaste papel");
    choiceBtn.innerHTML = "PAPEL";
    console.log(getRandomChoice());
    return 'paper'
})

sicsorsValue.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("presionaste tijeras");
    choiceBtn.innerHTML = "TIJERAS";
    console.log(getRandomChoice());
    return 'sicsors'
})


