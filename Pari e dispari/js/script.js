
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

    return (number % 2 === 0)

    
    
}



let userChoice = prompt("Scegli pari o dispari : P o D");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5")) ;

const sumNumber = computerGeneratedNumber() + userNumber;
console.log("Il numero del computer è :", computerGeneratedNumber());
console.log("La somma dei numeri è :" ,sumNumber);



if(!checkPair(sumNumber)){
    console.log("Il numero è dispari");
    
}else {
    console.log("Il numero è pari");
    
}






