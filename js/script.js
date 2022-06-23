// Dichiaro la variabile per il parent del DOM
const gridContainer = document.getElementById('grid-container');
console.log(gridContainer);

// Creo una funzione per la creazione di un nuovo quadrato
function createNewSquare (){
    const currentSquare = document.createElement("div");
    currentSquare.classList.add("square");
    return currentSquare;
}