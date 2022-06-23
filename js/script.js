// Dichiaro la variabile per il parent del DOM
const gridContainer = document.getElementById('grid-container');
console.log(gridContainer);

// Dichiaro la variabile per il pulsante di Play
const playGame = document.querySelector("header button.btn");
console.log(playGame);

// Al click sul pulsante Play viene mostrata la griglia e resettata se è stata già caricata
playGame.addEventListener("click", function(){
    document.getElementById("grid-container").innerHTML = "";

    // Creo un ciclo FOR per il numero di quadrati da generare
    for (let i=0; i<100; i++){
    const newSquare = createNewSquare();

    newSquare.innerHTML = i + 1;

    newSquare.addEventListener("click", function(){
        newSquare.classList.toggle("clicked");
    });

    gridContainer.append(newSquare)
    }
})


// Creo una funzione per la creazione di un nuovo quadrato
function createNewSquare (){
    const currentSquare = document.createElement("div");
    currentSquare.classList.add("square");
    return currentSquare;
}

function createNewSquareMediumDifficult (){
    const currentSquare = document.createElement("div");
    currentSquare.classList.add("square-medium");
    return currentSquare;
}

// Cambio il livello di difficoltà
const selectLevel = document.querySelector('.form-select');