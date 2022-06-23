// Dichiaro la variabile per il parent del DOM
const gridContainer = document.getElementById('grid-container');
console.log(gridContainer);

// Dichiaro la variabile per il pulsante di Play
const playGame = document.querySelector("header button.btn");
console.log(playGame);


// Creo un ciclo FOR per il numero di quadrati da generare
for (let i=0; i<100; i++){
    const newSquare = createNewSquare();

    newSquare.innerHTML = i + 1;

    newSquare.addEventListener("click", function(){
        newSquare.classList.toggle("clicked");
    });

    gridContainer.append(newSquare)
}

// Creo una funzione per la creazione di un nuovo quadrato
function createNewSquare (){
    const currentSquare = document.createElement("div");
    currentSquare.classList.add("square");
    return currentSquare;
}