
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function computerGeneratedNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function checkPair(number) {
    return number % 2 === 0;
}

// Input utente
let userChoice = prompt("Scegli pari o dispari: P o D");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Numero generato per il computer
const computerNumber = computerGeneratedNumber();
console.log("Il numero del computer è:", computerNumber);

// Calcolo della somma
const sumNumber = userNumber + computerNumber;
console.log("La somma dei numeri è:", sumNumber);

// Controllo se la somma è pari o dispari
const isPair = checkPair(sumNumber);
if (isPair) {
    console.log("La somma è pari.");
} else {
    console.log("La somma è dispari.");
}

// Determinazione del vincitore
if ((isPair && userChoice.toUpperCase() === "P") || (!isPair && userChoice.toUpperCase() === "D")) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");
}








