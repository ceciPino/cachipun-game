// valores botones usuario
const rockValue = document.getElementById("rock");
const paperValue = document.getElementById("paper");
const sicsorsValue = document.getElementById("sicsors");
// valor opción seleccionada
let choiceBtn = document.getElementById("choice");

// Función elección PC
function getRandomChoice(){
    // Obtener un número random entre 1 y 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber
}


// escuchar la opción marcada por el usuario
rockValue.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("presionaste piedra");
    choiceBtn.innerHTML = "PIEDRA";
    console.log(getRandomChoice());
    return 'rock'
})

paperValue.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("presionaste papel");
    choiceBtn.innerHTML = "PAPEL"
    return 'paper'
})

sicsorsValue.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("presionaste tijeras");
    choiceBtn.innerHTML = "TIJERAS"
    return 'sicsors'
})


